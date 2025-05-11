import Link from 'next/link'

const policies = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
]

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col items-center justify-between gap-5 px-5 py-5 sm:h-[60px] sm:flex-row sm:py-0 lg:px-10 2xl:px-[90px]'>
      <p className='text-sm/[14px]'>&copy; 2025 Skip Hire For The UK.</p>
      <nav>
        <ul className='flex gap-8'>
          {policies.map((policy, idx) => (
            <li key={`policy-${idx}`}>
              <Link href={policy.href} className='block text-sm/[14px]'>
                {policy.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
