import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const FadeUp: React.FC<{
  children: React.ReactNode;
  delay: number;
  style?: React.CSSProperties;
}> = ({ children, delay, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const progress = spring({
    fps,
    frame: localFrame,
    config: { damping: 200 },
  });

  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(progress, [0, 1], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ ...style, opacity, transform: `translateY(${translateY}px)` }}>{children}</div>
  );
};

const Divider: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const width = spring({
    fps,
    frame: localFrame,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        height: 1,
        width: `${interpolate(width, [0, 1], [0, 100], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}%`,
        maxWidth: 560,
        background: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.35), rgba(255,255,255,0))",
        margin: "28px auto",
      }}
    />
  );
};

export const TextBlock: React.FC<{
  quote: string;
  name: string;
  role: string;
  ctaText?: string;
}> = ({ quote, name, role, ctaText }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <FadeUp delay={10}>
        <div
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.4,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {quote}
        </div>
      </FadeUp>

      <Divider delay={28} />

      <FadeUp delay={34}>
        <div
          style={{
            color: "#ffffff",
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: 0.2,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {name}
        </div>
      </FadeUp>

      <FadeUp delay={42} style={{ marginTop: 10 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            background: "linear-gradient(90deg, #c084fc 0%, #f0abfc 50%, #f472b6 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {role}
        </div>
      </FadeUp>

      {ctaText ? (
        <FadeUp delay={52} style={{ marginTop: 26 }}>
          <div
            style={{
              display: "inline-block",
              color: "rgba(255,255,255,0.85)",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 0.3,
              padding: "12px 30px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.35)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {ctaText}
          </div>
        </FadeUp>
      ) : null}
    </div>
  );
};
