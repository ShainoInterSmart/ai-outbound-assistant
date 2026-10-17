type EmptyStateProps = {
  title: string;
  message: string;
};

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <section className="rounded-lg border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
      <h2 className="text-base font-semibold text-zinc-900">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">{message}</p>
    </section>
  );
}
