import './globals.css'

export const metadata = {
  title: 'nextJS course app',
  description: 'my first nextJS app!'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}