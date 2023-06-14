import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ 
  weight: ['300', '600', '800'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'World Countries',
  description: 'Desenvolvido por Paulo Turino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
