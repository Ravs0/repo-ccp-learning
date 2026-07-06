interface MetadataPillProps {
  label: string
  tone?: 'cyan' | 'blue' | 'green' | 'amber' | 'slate'
}

const toneClasses = {
  cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
  blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  green: 'bg-accent-green/10 text-accent-green border-accent-green/20',
  amber: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  slate: 'bg-dark-700 text-gray-300 border-dark-500',
}

export default function MetadataPill({ label, tone = 'slate' }: MetadataPillProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}>
      {label}
    </span>
  )
}
