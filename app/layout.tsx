import './globals.css'

import { Figtree } from 'next/font/google'
import type { Metadata } from 'next'
import ModalProvider from '@/providers/ModalProvider'
import Sidebar from "@/components/Sidebar"
import SupabaseProvider from '@/providers/SupabaseProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Super Songs',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider supabaseUrl="https://tvckuqrqbeenaprzonzh.supabase.co" supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y2t1cXJxYmVlbmFwcnpvbnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTU2MzMsImV4cCI6MjAyMTU5MTYzM30.v3u2EmfpYaAXgdVNFX9aQv1AyZ6ewgKrRxWeYCgoVaU">
          <UserProvider>
            <ModalProvider />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html >
  )
}

