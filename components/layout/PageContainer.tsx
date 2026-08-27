interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <main
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "0 48px",
      }}
    >
      {children}
    </main>
  );
}