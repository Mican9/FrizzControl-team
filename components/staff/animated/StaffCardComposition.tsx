import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Photo } from "./Photo";
import { TextBlock } from "./TextBlock";

export type StaffCardCompositionProps = {
  photoSrc: string;
  focalPosition?: string;
  quote: string;
  name: string;
  role: string;
  ctaText?: string;
};

export const StaffCardComposition: React.FC<StaffCardCompositionProps> = ({
  photoSrc,
  focalPosition,
  quote,
  name,
  role,
  ctaText,
}) => {
  const frame = useCurrentFrame();

  const cardOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0c0a",
        opacity: cardOpacity,
        display: "flex",
        flexDirection: "column",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      <div style={{ position: "relative", flex: "0 0 66%" }}>
        <Photo src={photoSrc} focalPosition={focalPosition} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 32,
        }}
      >
        <TextBlock quote={quote} name={name} role={role} ctaText={ctaText} />
      </div>
    </AbsoluteFill>
  );
};
