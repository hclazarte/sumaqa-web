import Image from "next/image";

const ACCIONES = [
  {
    titulo: "Entrega y recojo de hijos/as asistido",
    descripcion:
      "Supervisión de entrega y recojo de hijos/as, asegurando un proceso respetuoso, seguro y en apego a las disposiciones judiciales.",
    imagen: "/proyectos/proyecto-1.png",
    href: "#",
  },
  {
    titulo: "Visitas supervisadas seguras",
    descripcion:
      "Visitas supervisadas en instalaciones de la institución, generando un espacio protegido, confiable y de acompañamiento para fortalecer los vínculos familiares.",
    imagen: "/proyectos/proyecto-2.png",
    href: "#",
  },
  {
    titulo: "Apoyo psicológico familiar",
    descripcion:
      "Atención y terapias psicológicas, orientadas al bienestar emocional de niñas, niños, adolescentes y padres, con el fin de favorecer la resolución pacífica de conflictos y la salud integral de la familia.",
    imagen: "/proyectos/proyecto-3.png",
    href: "#",
  },
];

function AccionCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="relative mx-auto h-48 w-full max-w-sm overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={item.imagen}
          alt={item.titulo}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="mt-6 text-center text-base sm:text-lg font-bold uppercase tracking-wide text-slate-900">
        {item.titulo}
      </h3>

      <p className="mt-4 text-center text-sm leading-6 text-slate-700">
        {item.descripcion}
      </p>

      <div className="mt-6 flex justify-center">
        <a
          href={item.href}
          className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900"
        >
          Más información
        </a>
      </div>
    </article>
  );
}

function TextoJustificado({ children }) {
  return (
    <p className="text-left text-justify text-base leading-7 text-slate-700">
      {children}
    </p>
  );
}

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            ¿Qué hacemos?
          </h1>

          {/* 4 párrafos (justificados) */}
          <div className="mx-auto mt-8 max-w-4xl space-y-6">
            <TextoJustificado>
              <strong>Suma Qamaña</strong> presta sus servicios con la
              participación activa de profesionales altamente especializados,
              quienes, a través de un trabajo voluntario, demuestran un profundo{" "}
              <strong>
                compromiso e identificación con la visión y misión de nuestra
                institución.
              </strong>
            </TextoJustificado>

            <TextoJustificado>
              Nuestro equipo se caracteriza por su vocación de servicio,
              responsabilidad social y entrega solidaria, lo que nos permite
              desarrollar acciones integrales orientadas al bienestar colectivo.{" "}
              <strong>
                Promovemos iniciativas que fortalecen los valores humanos, la
                inclusión y la participación comunitaria
              </strong>
              , contribuyendo de manera sostenible al mejoramiento de la calidad
              de vida de las personas.
            </TextoJustificado>

            <TextoJustificado>
              En cada proyecto, buscamos <strong>generar un impacto positivo</strong>,
              fomentando la colaboración y el sentido de pertenencia, convencidos
              de que el trabajo conjunto entre profesionales y comunidad es la
              base para alcanzar una sociedad más justa, equitativa y solidaria.
            </TextoJustificado>

            <TextoJustificado>
              <strong>Suma Qamaña</strong>, en el{" "}
              <strong>área psicosociolegal</strong>, brinda un apoyo
              interdisciplinario integral a las familias que requieren
              acompañamiento especializado. Nuestro trabajo se centra en la
              atención de casos derivados por los Juzgados de Niñez y
              Adolescencia, Juzgados de Familia y la Fiscalía, garantizando{" "}
              <strong>
                un servicio responsable y comprometido con los derechos de niñas,
                niños, adolescentes y sus familias.
              </strong>
            </TextoJustificado>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-slate-700">
            Dentro de este ámbito, desarrollamos las siguientes acciones:
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ACCIONES.map((item) => (
              <AccionCard key={item.titulo} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
