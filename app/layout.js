import './globals.css'
import NavBar from './(Components)/NavBar'


export const metadata = {
  title: 'Q NEXT App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  let theme = "light";
  return (
    <html lang="en">
      <body data-theme={theme}>
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
