import { useState } from 'react'

interface FlowDiagramProps {
  type: 'us-flow' | 'asia-flow' | 'comparison'
}

const steps = {
  'us-flow': [
    { id: 1, label: 'Quote Request', desc: 'Cash lender requests quotes via email/voice/platform' },
    { id: 2, label: 'Trade Execution', desc: 'Cash borrower provides quote; trade agreed' },
    { id: 3, label: 'Trade Submission', desc: 'Both parties submit to FICC; must match exactly' },
    { id: 4, label: 'Matching Engine', desc: 'FICC verifies instructions; matched or rejected' },
    { id: 5, label: 'Novation', desc: 'Bilateral contract extinguished; two CCP contracts created' },
    { id: 6, label: 'Netting', desc: 'Multilateral offsetting reduces gross obligations' },
    { id: 7, label: 'Margining', desc: 'Initial and variation margin posted to FICC' },
    { id: 8, label: 'Settlement (DVP)', desc: 'Delivery vs Payment through clearing bank (BNY Mellon)' },
  ],
  'asia-flow': [
    { id: 1, label: 'Trade Agreement', desc: 'Bilateral or platform-based trade execution' },
    { id: 2, label: 'CCP Interposition', desc: 'JSCC/CCP steps in via obligation assumption (novation)' },
    { id: 3, label: 'Risk Calculation', desc: 'Portfolio-based margin (VaR) calculated' },
    { id: 4, label: 'Margin Posting', desc: 'Both parties post margin to CCP' },
    { id: 5, label: 'Settlement', desc: 'BOJ-Net or central bank system (not private clearing bank)' },
  ],
}

export default function FlowDiagram({ type }: FlowDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const currentSteps = steps[type as keyof typeof steps] || steps['us-flow']

  if (type === 'comparison') {
    return (
      <div className="bg-dark-800 border border-dark-600 rounded-lg p-6 overflow-x-auto">
        <div className="grid grid-cols-2 gap-8 min-w-[600px]">
          <div>
            <h4 className="text-accent-blue font-semibold mb-4">U.S. Model</h4>
            <div className="space-y-2">
              {['Quote → Execute → Submit to FICC → Match → Novate → Net → Margin → DVP'].map((step, i) => (
                <div key={i} className="p-3 bg-dark-700 rounded text-sm">{step}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-accent-purple font-semibold mb-4">Asia Model</h4>
            <div className="space-y-2">
              {['Trade → Novate → Risk Calc → Margin → Central Bank Settlement'].map((step, i) => (
                <div key={i} className="p-3 bg-dark-700 rounded text-sm">{step}</div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Key difference: U.S. has explicit matching before novation; Asia focuses on risk calculation post-novation
        </p>
      </div>
    )
  }

  return (
    <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {currentSteps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <button
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                activeStep === i 
                  ? 'bg-accent-cyan text-dark-900' 
                  : 'bg-dark-600 text-gray-400 hover:bg-dark-500'
              }`}
            >
              {i + 1}
            </button>
            {i < currentSteps.length - 1 && (
              <div className="w-6 h-0.5 bg-dark-500 mx-1" />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {currentSteps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              activeStep === i 
                ? 'bg-accent-cyan/10 border border-accent-cyan' 
                : 'bg-dark-700 border border-transparent hover:border-dark-500'
            }`}
          >
            <div className="flex items-start gap-4">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${
                activeStep === i ? 'bg-accent-cyan text-dark-900' : 'bg-dark-600 text-gray-400'
              }`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">{step.label}</h4>
                <p className={`text-sm ${activeStep === i ? 'text-gray-300' : 'text-gray-500'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
