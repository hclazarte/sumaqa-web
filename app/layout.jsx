import './globals.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sumaqamaña Bolivia',
  description: 'Fundación Sumaqamaña - Bolivia'
}

export default function RootLayout({ children }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <html lang='es'>
      <head>
        <title>SUMA QAMAÑA BOLIVIA</title>
        {/* reCAPTCHA */}
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
          strategy='afterInteractive'
        />
        <meta
          name='description'
          content='SUMA QAMAÑA BOLIVIA PROMUEVE EL VIVIR BIEN A TRAVÉS DE PROGRAMAS SOCIALES, EDUCACIÓN, CULTURA Y DESARROLLO COMUNITARIO. TRABAJAMOS PARA FORTALECER VALORES, IDENTIDAD Y COOPERACIÓN EN LA SOCIEDAD, IMPULSANDO INICIATIVAS QUE CONTRIBUYEN AL BIENESTAR COLECTIVO Y AL DESARROLLO SOSTENIBLE.'
        />
        <meta
          name='keywords'
          content='SUMA QAMAÑA, VIVIR BIEN, BOLIVIA, DESARROLLO COMUNITARIO, FUNDACIÓN, PROGRAMAS SOCIALES, CULTURA, EDUCACIÓN, PARTICIPACIÓN CIUDADANA, BIENESTAR SOCIAL, COOPERACIÓN, ORGANIZACIÓN SOCIAL, PROYECTOS COMUNITARIOS, LA PAZ, BOLIVIA, DESARROLLO SOSTENIBLE, VALORES, COMUNIDAD, INICIATIVAS SOCIALES'
        />
        <meta name='robots' content='index,follow' />
        <meta name='author' content='Fundación Suma Qamaña Bolivia' />
        <meta name='contact' content='glaparedesoblitas@sumacamañabolivia.org' />
        <meta name='publisher' content='Fundación Suma Qamaña Bolivia' />
        <meta name='copyright' content='Fundación Suma Qamaña Bolivia' />
      </head>
      <body className='min-h-screen bg-white text-gray-900'>
        <Header />
        <main className='mx-auto w-full max-w-6xl px-4 py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
