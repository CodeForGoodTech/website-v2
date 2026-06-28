export default function BlogSection({
  title,
  paragraphs = [],
}) {
  return (
    <section className="space-y-6">
      {title && (
        <h2 className="text-3xl font-semibold text-slate-700">
          {title}
        </h2>
      )}

      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg leading-9 text-slate-600"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}