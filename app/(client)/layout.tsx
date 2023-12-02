import Footer from '@/components/Client/Footer/Footer'
import './../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Client/Header/Header'
import Providers from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Shoes store',
    description: 'One perfect shoes store ',
    favicon: '/28378-2-sneaker-image.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className="max-w-[70%] mx-auto">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
