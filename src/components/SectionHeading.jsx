export default function SectionHeading({ title, align = 'left', className = '' }) {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div className={`flex items-stretch gap-1.5 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="w-1.5 h-7 rounded-full bg-primary/25" />
        <span className="w-1.5 h-7 rounded-full bg-primary" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-accent">{title}</h2>
    </div>
  );
}
