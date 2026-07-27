export function SectionHeading({
  children,
  subheading,
}: {
  children: React.ReactNode;
  subheading?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{children}</h2>
      {subheading ? (
        <p className="mx-auto mt-3 max-w-2xl text-muted">{subheading}</p>
      ) : null}
    </div>
  );
}
