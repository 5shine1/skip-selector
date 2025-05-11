'use client'

import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import BackgroundImage from '@/assets/images/background.jpg'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

const queryClient = new QueryClient()

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className='relative'
        style={{ background: 'linear-gradient(251.23deg, #312623 40.85%, #2A2523 99.44%)' }}
      >
        <Image
          src={BackgroundImage}
          alt='Background'
          className='absolute top-0 left-0 h-screen w-full object-cover opacity-50 mix-blend-color-burn'
        />
        <div className='relative z-10 h-screen overflow-y-auto'>
          <Header/>
          <div className='min-h-[calc(100vh-234px)] sm:min-h-[calc(100vh-206px)]'>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  )
}
