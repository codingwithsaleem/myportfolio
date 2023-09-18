import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          

          <title>{metadata.title}</title>
        </head>
        <body>
          {children}

          
                    {/* Add the reCAPTCHA script here */}

          {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}

        </body>
      </html>
    </>
  )
}
