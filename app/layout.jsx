// Fonts
import { Bebas_Neue, Baskervville } from 'next/font/google'
// Styles
import "./globals.scss";
// Components
import Header from '@/components/header/header.component';

const bebasNeue = Bebas_Neue({weight: '400', subsets: ['latin'], variable: '--font-bebasneue'})
const baskervville = Baskervville({weight: '400', subsets: ['latin'], variable: '--font-baskervville'})

export const metadata = {
  title: 'SimplifyYourHome',
  description: 'E-shop with gadgets to simlify your home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${baskervville.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}