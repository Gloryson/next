import './globals.scss';


export const metadata = {
  title: 'Web developer Wladek',
  description: 'Frontend developer Wladek - site portfolio.',
}


export default function RootLayout ({ children }: { children: React.ReactNode } ) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/img/favicon.png' type='image/x-icon' />
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}