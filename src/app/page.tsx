'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import SkipImage from '@/assets/images/skip.png'
import SkipSizeCard from '@/components/skip-size-card'
import Steps from '@/components/steps'
import { useQuery } from '@tanstack/react-query'
import { SkipData } from '@/components/skip-size-card'

export default function Home() {
  const { data, isFetching } = useQuery<SkipData[]>({
    queryKey: [''], queryFn: async () => {
      const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      if (response.ok)
        return await response.json()
      return []
    }
  })
  const [selectedCard, setSelectedCard] = useState<number>(Number.MAX_VALUE);

  const handleClick = useCallback(() => {
    if (selectedCard !== Number.MAX_VALUE) {
      //Next page with Card id
    }
  }, [selectedCard])

  return (
    <div className='pb-10'>
      <div className='container flex items-start'>
        <div className='w-full md:max-w-[446px]'>
          <h1 className='text-center text-3xl/[30px] sm:text-4xl/9 md:text-left'>
            Choose your skip size
          </h1>
          <p className='mt-5 text-center text-sm/[14px] sm:text-base/4 md:text-left'>
            Select the skip size that best suits your needs
          </p>
          {isFetching ? <div className='flex items-center justify-center mt-10 space-y-2.5 md:h-[440px]'>
            <p className='text-3xl'>... Loading</p>
          </div> : <div className='mt-10 space-y-2.5 md:h-[440px] md:overflow-auto md:scrollbar-thin md:scrollbar-thumb-gray-500 md:scrollbar-track-gray-200'>
            {data && data.map((skip, idx) => (
              <SkipSizeCard
                {...skip}
                isSelected={skip.id === selectedCard}
                key={`skip-card-${idx}`}
                onSelect={(cardId) => setSelectedCard(cardId)}
              />
            ))}
          </div>}

          <button className='mx-auto mt-10 block h-12 w-[200px] cursor-pointer rounded-full bg-white text-base tracking-[2.4px] text-black md:mx-[unset]' onClick={() => handleClick()} >
            Continue
          </button>
        </div>
        <div className='mt-10 ml-auto hidden md:block'>
          <Steps />
          <Image
            src={SkipImage}
            alt=''
            className='mt-16 hidden h-fit w-[480px] translate-x-5 lg:block'
          />
        </div>
      </div>
    </div>
  )
}
