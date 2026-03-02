import { Composition } from "remotion";
import { ProductVideo } from "./ProductVideo";

// 30fps, ~65 seconds = 1950 frames
export const FPS = 30;
export const DURATION_IN_FRAMES = 1950;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ProductVideo"
      component={ProductVideo}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
