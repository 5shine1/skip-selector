import { twMerge } from 'tailwind-merge'

export interface SkipData {
    id: number,
    size: number,
    hire_period_days: number,
    transport_cost: number | null,
    per_tonne_cost: number | null,
    price_before_vat: number,
    vat: number,
    postcode: string,
    area: string,
    forbidden: boolean,
    created_at: string,
    updated_at: string,
    allowed_on_road: boolean,
    allows_heavy_waste: boolean,
}

interface Props extends SkipData {
  className?: string
  isSelected?: boolean
  onSelect: React.Dispatch<number>
}

const SkipSizeCard: React.FC<Props> = ({
  className,
  id,
  isSelected = false,
  size,
  allowed_on_road,
  allows_heavy_waste,
  hire_period_days,
  price_before_vat,
  onSelect,
}) => {
  const isAvailable: boolean = allowed_on_road && allows_heavy_waste;
  const unavailableReason: string = !allowed_on_road ? !allows_heavy_waste? 'Unavailable for Heavy Waste or On the Road' : "Not Allowed On The Road" : "Not Suited For Heavy Waste"

  return (
    <div
      className={twMerge(
        `flex h-10 ${isAvailable ? 'cursor-pointer bg-[#5D5D5D4D]' : 'pointer-events-none bg-[#8f42424d]'} items-center rounded-full  pr-[30px] backdrop-blur-[10px]`,
        className,
      )}
      onClick={() => onSelect(id)}
    >
      <div className='flex size-10 shrink-0 items-center justify-center'>
        <div className='flex size-[18px] items-center justify-center rounded-full bg-[#D9D9D9] scal transition'>
          {isSelected && <div className='size-3 rounded-full bg-[#FF6161]' />}
        </div>
      </div>
      <div className='hidden items-center sm:flex'>
        <div className='ml-2 w-[100px] space-y-1.5'>
          <p className='text-xs/3'>{size} Yard Skip</p>
          <p className='text-[8px]/2 text-[#9E9E9E]'>
            {isAvailable ? 'Available' : unavailableReason}
          </p>
        </div>
        <p className='ml-2 w-[120px] text-xs/3'>
          {hire_period_days} Day{hire_period_days === 1 ? '' : 's'} hire period
        </p>
        <p className='ml-6 w-12 text-xs/3'>
          <span className='text-[10px]/3'>£</span> {price_before_vat}
        </p>
        <p className='ml-6 w-14 text-xs/3'>
          <strong>{size}</strong> Yard{size === 1 ? '' : 's'}
        </p>
      </div>
      <div className='space-y-1 sm:hidden'>
        <p className='text-xs/3'>
          {size} Yard Skip{' '}
          <span className='text-[10px]/[10px] text-[#9E9E9E]'>
            {isAvailable ? 'Available' : unavailableReason}
          </span>
        </p>
        <div className='flex gap-6'>
          <p className='w-[120px] text-xs/3'>
            {hire_period_days} Day{hire_period_days === 1 ? '' : 's'} hire period
          </p>
          <p className='w-12 text-xs/3'>
            <span className='text-[10px]/3'>£</span> {price_before_vat}
          </p>
          <p className='w-14 text-xs/3'>
            <strong>{size}</strong> Yard{size === 1 ? '' : 's'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkipSizeCard
