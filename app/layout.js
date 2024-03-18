import './globals.css'

export const metadata = {
  title: 'SpeedoMass | Homepage',
  description: 'This is SpeedoMass Living Innovation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
