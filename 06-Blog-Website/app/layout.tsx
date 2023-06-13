import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Dave's Mustaine",
  description: 'Created by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-700">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}