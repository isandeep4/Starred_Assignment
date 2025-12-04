import Header from './components/Header';
import './globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
