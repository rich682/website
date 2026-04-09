export default function DocumentStorageMockup() {
  const files = [
    { vendor: "Mason Electric", docType: "Lien Waiver", status: "complete" },
    { vendor: "Summit Concrete", docType: "Insurance Cert", status: "complete" },
    { vendor: "Valley Mechanical", docType: "W-9", status: "pending" },
  ];

  const collapsedFolders = [
    { name: "Project 1087", count: "8 documents" },
    { name: "Project 1103", count: "5 documents" },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[11px] sm:text-xs font-medium text-foreground">
          Documents
        </span>
        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-background-tertiary text-foreground-muted">
          24 files
        </span>
      </div>

      {/* File tree */}
      <div className="flex-1 space-y-1.5 sm:space-y-2">
        {/* Expanded folder: Project 1042 */}
        <div>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            {/* Folder icon (open) */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground-muted flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H2V6z" />
              <path fillRule="evenodd" d="M2 9h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] sm:text-xs text-foreground font-medium">
              Project 1042
            </span>
          </div>

          {/* File rows */}
          <div className="ml-4 sm:ml-5 space-y-1 sm:space-y-1.5">
            {files.map((file) => (
              <div
                key={file.vendor}
                className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-background border border-border"
              >
                {/* Document icon */}
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-foreground-muted flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>

                {/* Vendor & doc type */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] sm:text-[10px] text-foreground block truncate">
                    {file.vendor}
                  </span>
                  <span className="text-[7px] sm:text-[8px] text-foreground-muted">
                    {file.docType}
                  </span>
                </div>

                {/* Status icon */}
                {file.status === "complete" ? (
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-warning flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 002 0V6zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Collapsed folders */}
        {collapsedFolders.map((folder) => (
          <div key={folder.name} className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg bg-background border border-border">
            {/* Folder icon (closed) */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground-muted flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            <span className="text-[10px] sm:text-xs text-foreground font-medium flex-1">
              {folder.name}
            </span>
            <span className="text-[8px] sm:text-[9px] text-foreground-muted flex-shrink-0">
              {folder.count}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] text-foreground-muted">
          21 of 24 collected
        </span>
        <div className="w-16 sm:w-20 h-1.5 rounded-full bg-background-tertiary overflow-hidden">
          <div className="h-full rounded-full bg-success" style={{ width: "87.5%" }} />
        </div>
      </div>
    </div>
  );
}
