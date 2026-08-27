interface Props {
  id?: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",
        padding: "120px 0",
        position: "relative",
      }}
    >
      {children}
    </section>
  );
}