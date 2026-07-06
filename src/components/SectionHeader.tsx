interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      {eyebrow && (
        <div className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-cyan mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
      {description && <p className="text-gray-400 leading-relaxed">{description}</p>}
    </div>
  )
}
