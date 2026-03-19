import { NextRequest, NextResponse } from "next/server";
import { getSql } from "@/lib/db";

// Simple in-memory rate limit: max 5 requests per IP per 60 seconds
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 5;
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < windowMs
  );
  if (timestamps.length >= maxRequests) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, templateSlug, templateTitle } = body as Record<
    string,
    unknown
  >;

  // Validate
  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }
  if (
    !templateSlug ||
    typeof templateSlug !== "string" ||
    !templateSlug.trim()
  ) {
    return NextResponse.json(
      { error: "templateSlug is required" },
      { status: 400 }
    );
  }
  if (
    !templateTitle ||
    typeof templateTitle !== "string" ||
    !templateTitle.trim()
  ) {
    return NextResponse.json(
      { error: "templateTitle is required" },
      { status: 400 }
    );
  }

  // Insert into Neon
  try {
    const sql = getSql();
    await sql`
      INSERT INTO leads (name, email, template_slug, template_title, source)
      VALUES (
        ${name.trim()},
        ${email.trim().toLowerCase()},
        ${templateSlug.trim()},
        ${templateTitle.trim()},
        'template_download'
      )
    `;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[/api/leads] DB insert failed:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
