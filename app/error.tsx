"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Something went wrong.</h1>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </main>
  );
}