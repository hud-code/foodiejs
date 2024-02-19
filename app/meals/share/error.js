'use client';

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Whoops! Something went wrong...</h1>
      <p>Failed to to create meal. Please check your inputs and try again.</p>
    </main>
  );
}
