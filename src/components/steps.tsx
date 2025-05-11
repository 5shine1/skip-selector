'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const steps = [
  { label: 'Postcode' },
  { label: 'Waste Type' },
  { label: 'Select Skip Size' },
  { label: 'Permit Check' },
  { label: 'Choose Date' },
  { label: 'Payment' },
]

const Steps: React.FC<Props> = () => {
  const [currentStep, setCurrentStep] = useState<number>(2)

  return (
    <div className='ml-auto h-[250px] w-[192px] space-y-3'>
      {steps.map((step, idx) => (
        <button
          className={twMerge(
            'font-instrument-sans mx-auto block cursor-pointer',
            idx === currentStep ? 'font-bold' : '',
          )}
          key={`step-${idx}`}
          style={{
            fontSize: 24 - Math.abs(currentStep - idx) * 2,
            opacity: Math.max(1 - Math.abs(currentStep - idx) * 0.15, 0.3),
          }}
          onClick={() => setCurrentStep(idx)}
        >
          {step.label}
        </button>
      ))}
    </div>
  )
}

export default Steps
