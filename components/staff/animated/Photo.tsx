import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Photo: React.FC<{ src: string; focalPosition?: string }> = ({
  src,
  focalPosition,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Slow Ken Burns zoom-out across the whole photo segment.
  const scale = interpolate(frame, [0, durationInFrames], [1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, overflow: "hidden" }}>
      <div style={{ width: "100%", height: "100%", transform: `scale(${scale})` }}>
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: focalPosition ?? "center 12%",
          }}
        />
      </div>
      {/* Gradient fade from photo into the dark card background below */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,10,0) 55%, rgba(15,12,10,0.85) 85%, #0f0c0a 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
