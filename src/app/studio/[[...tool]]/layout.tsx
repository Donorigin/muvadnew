import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sanity Studio | Muvad Consults',
  robots: { index: false },
}

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}