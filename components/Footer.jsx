import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        
        {/* Contacto Bolivia */}
        <div className="text-sm leading-relaxed">
          <h3 className="mb-3 text-base font-semibold">
            Contacto Bolivia
          </h3>

          <p className="mb-2">
            <span className="font-semibold">Dirección:</span><br />
            Avenida Mecapaca #6734 calle 20<br />
            (Zona Obrajes) La Paz
          </p>

          <p className="mb-2">
            Calle 134 N° 14 A de la Zona Villa Bolivar D El Alto
          </p>

          <p className="mb-2">
            <span className="font-semibold">Email:</span><br />
            <a
              href="mailto:fundacion.suma.qamana.bolivia@gmail.com"
              className="underline hover:text-emerald-200"
            >
              fundacion.suma.qamana.bolivia@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Teléfonos:</span><br />
            +591 62463715 &nbsp; +591 2824457
          </p>
        </div>

        {/* Redes Sociales Bolivia */}
        <div className="text-sm">
          <h3 className="mb-3 text-base font-semibold">
            Redes Sociales Bolivia
          </h3>

          <a
            href="https://www.facebook.com/AsociacionSumaQamanaBolivia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/20 mt-8 py-4">
        <p className="text-center text-xs text-white/90">
          Sitio web desarrollado y alojado por{" "}
          <a
            href="https://geosoft.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-white"
          >
            GeoSoft
          </a>
        </p>
      </div>
    </footer>
  );
}
