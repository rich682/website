import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { ProblemScene } from "./scenes/ProblemScene";
import { TransitionScene } from "./scenes/TransitionScene";
import { TasksScene } from "./scenes/TasksScene";
import { ConnectScene } from "./scenes/ConnectScene";
import { AgentsScene } from "./scenes/AgentsScene";
import { ApproveScene } from "./scenes/ApproveScene";
import { CloseScene } from "./scenes/CloseScene";
import { CTAScene } from "./scenes/CTAScene";
import { scenes } from "./styles";

export const ProductVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0e0e0e" }}>
      {/* Audio tracks — uncomment when files are provided */}
      {/* <Audio src={staticFile("video/voiceover.mp3")} volume={1} /> */}
      {/* <Audio src={staticFile("video/bg-music.mp3")} volume={0.15} /> */}

      {/* Scene sequences */}
      <Sequence from={scenes.problem.start} durationInFrames={scenes.problem.duration}>
        <ProblemScene />
      </Sequence>

      <Sequence from={scenes.transition.start} durationInFrames={scenes.transition.duration}>
        <TransitionScene />
      </Sequence>

      <Sequence from={scenes.tasks.start} durationInFrames={scenes.tasks.duration}>
        <TasksScene />
      </Sequence>

      <Sequence from={scenes.connect.start} durationInFrames={scenes.connect.duration}>
        <ConnectScene />
      </Sequence>

      <Sequence from={scenes.agents.start} durationInFrames={scenes.agents.duration}>
        <AgentsScene />
      </Sequence>

      <Sequence from={scenes.approve.start} durationInFrames={scenes.approve.duration}>
        <ApproveScene />
      </Sequence>

      <Sequence from={scenes.close.start} durationInFrames={scenes.close.duration}>
        <CloseScene />
      </Sequence>

      <Sequence from={scenes.cta.start} durationInFrames={scenes.cta.duration}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
