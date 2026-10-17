type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
      {description && <p className="mt-1 text-sm text-zinc-500">{description}</p>}
    </header>
  );
}
