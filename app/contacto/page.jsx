import ContactoForm from '@/components/ContactoForm'

export default function ContactoPage() {
  return (
    <main className='w-full'>
      <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
          {/* Formulario */}
          <div>
            <h1 className='text-4xl font-extrabold tracking-tight text-neutral-900'>
              ¿Necesita realizarnos una consulta?
            </h1>

            <div className='mt-8'>
              <ContactoForm />
            </div>
          </div>

          {/* Datos de contacto */}
          <aside className='lg:pt-14'>
            <div className='rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm'>
              <h2 className='text-lg font-bold text-neutral-900'>Contacto Bolivia</h2>

              <div className='mt-4 space-y-4 text-neutral-800'>
                <div className='text-sm leading-6'>
                  <span className='font-semibold'>Dirección sede La Paz: </span>
                  <a
                    className='text-green-700 underline underline-offset-4 hover:text-green-800'
                    href='https://maps.app.goo.gl/J36NZvYEG4YnuVNj8'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Avenida Mecapaca #6734 calle 20 Obrajes
                  </a>
                </div>

                <div className='text-sm leading-6'>
                  <span className='font-semibold'>Dirección sede El Alto: </span>
                  <a
                    className='text-green-700 underline underline-offset-4 hover:text-green-800'
                    href='https://goo.gl/maps/pd6rKjP1vXyZyuLr9'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Calle 134 N° 14 A de la Zona Villa Bolivar D
                  </a>
                </div>

                <div className='text-sm leading-6'>
                  <span className='font-semibold'>Teléfonos: </span>
                  <span>+591 62463715 | +591 74908165 | +591 2824457</span>
                </div>

                <div className='text-sm leading-6'>
                  <span className='font-semibold'>Email: </span>
                  <a
                    className='text-green-700 underline underline-offset-4 hover:text-green-800'
                    href='mailto:fundacion.suma.qamana.bolivia@gmail.com'
                  >
                    fundacion.suma.qamana.bolivia@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Mapas */}
        <div className='mt-14'>
          <p className='text-center font-extrabold text-neutral-900'>
            Mapas de las sedes de la Fundación Suma Qamana en Bolivia
          </p>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
            {/* El Alto */}
            <figure className='rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm'>
              <img
                src='/contacto/localizacion-el-alto-1024x612.png'
                alt='Mapa sede El Alto'
                className='w-full h-auto rounded-xl'
              />
              <figcaption className='mt-3 text-sm text-neutral-700'>
                <span className='font-semibold'>El Alto: </span>
                <a
                  className='text-green-700 underline underline-offset-4 hover:text-green-800'
                  href='https://goo.gl/maps/pd6rKjP1vXyZyuLr9'
                  target='_blank'
                  rel='noreferrer'
                >
                  Calle 134 N° 14 A de la Zona Villa Bolivar D
                </a>
              </figcaption>
            </figure>

            {/* La Paz */}
            <figure className='rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm'>
              <img
                src='/contacto/la-paz-baja-3.png'
                alt='Mapa sede La Paz'
                className='w-full h-auto rounded-xl'
              />
              <figcaption className='mt-3 text-sm text-neutral-700'>
                <span className='font-semibold'>La Paz: </span>
                <a
                  className='text-green-700 underline underline-offset-4 hover:text-green-800'
                  href='https://maps.app.goo.gl/J36NZvYEG4YnuVNj8'
                  target='_blank'
                  rel='noreferrer'
                >
                  Avenida Mecapaca #6734 calle 20 Obrajes
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}
