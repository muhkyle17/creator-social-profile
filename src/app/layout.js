import { Roboto, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Creator Social Profile',
  description:
    'Showcase your social profiles, links, and content in one dynamic, customizable platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
