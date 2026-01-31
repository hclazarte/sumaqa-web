// app/page.jsx
import Image from "next/image";

const DIRECTORIO = [
  {
    nombre: "Gladys Paredes Oblitas",
    cargo: "Presidenta",
    foto: "/directorio/Gladys.png",
    perfil:
      "Abogada con más de 15 años de experiencia, especializada en Derechos de Familia, Niñez y Adolescencia. Cuento con una sólida formación académica y de postgrado en áreas clave para la defensa de los Derechos Humanos, especialmente en la atención a la niñez vulnerable y la gestión de instituciones educativas. Me he desempeñado en distintos espacios institucionales, combinando el trabajo jurídico con el enfoque social y educativo, comprometida siempre con la promoción de entornos seguros y equitativos para Niñas, Niños y Adolescentes.",
  },
  {
    nombre: "Guillermo Nina Uscamayta",
    cargo: "Secretario de actas",
    foto: "/directorio/Guillermo.png",
    perfil:
      "Abogado especializado en Derecho de Familia, Niñez y Adolescencia, con sólida formación académica y amplia experiencia en instituciones públicas vinculadas a la protección de derechos de sectores vulnerables. Licenciado en Derecho por la Universidad Mayor de San Andrés (UMSA), complementó su formación con diplomados en Pedagogía y Derecho de Familia, Educación Superior e Interculturalidad, y Ciencias Penales.",
  },
  {
    nombre: "Huascar Rolando Huallpa Martinez",
    cargo: "Secretario de hacienda",
    foto: "/directorio/Rolando.png",
    perfil:
      "Abogado con más de 20 años de trayectoria en el ejercicio del Derecho Penal, Civil y Constitucional, enfocado en la defensa de derechos fundamentales y estrategias de litigación de alto impacto. Mi experiencia me ha permitido combinar habilidades de liderazgo, argumentación jurídica avanzada y una comprensión profunda del funcionamiento de los sistemas y procesos judiciales en Bolivia. Dispuesto a colaboraciones profesionales, asesoría jurídica estratégica y formación legal.",
  },
];

function Section({ title, children }) {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 text-base leading-7 text-slate-700">{children}</div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-700 px-3 py-1 text-sm font-semibold text-white">
      {children}
    </span>
  );
}

function DirectorioCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr] sm:items-start">
        <div className="relative overflow-hidden rounded-2xl border-4 border-emerald-700 bg-slate-50">
          <Image
            src={item.foto}
            alt={item.nombre}
            width={714}
            height={1000}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        <div>
          <Badge>{item.cargo}</Badge>
          <h3 className="mt-3 text-lg sm:text-xl font-semibold">{item.nombre}</h3>

          <details className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <summary className="cursor-pointer select-none font-medium text-slate-800">
              Perfil profesional
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-700">{item.perfil}</p>
          </details>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO simple (puedes reemplazar por tu banner luego) */}
      <Section >
        <p className="mt-4 max-w-4xl text-base sm:text-lg leading-7 text-slate-700">
          La Asociación para el Desarrollo Integral de las Familias Suma Qamaña, fue
          fundada en fecha 22 de julio del año 2010 y refundada en fecha 25 de mayo de
          2022, con participación equitativa e igualitaria de sus miembros asociados,
          constituida al margen de ideologías políticas, credos religiosos y de toda
          forma de discriminación de género, social y racial. Su denominación actual es
          Fundación Suma Qamaña.
        </p>
      </Section>

      <Section title="Objetivo general">
        <p>
          El objetivo general de la <strong>Fundación Suma Qamaña (SQ)</strong> es brindar atención
          interdisciplinaria (área legal, social, psicológica y pedagógica) especializada en materia{" "}
          <strong>familiar, niñez y adolescencia y violencia contra la mujer</strong> a nivel
          departamental y nacional; promover el{" "}
          <strong>desarrollo integral de la persona humana</strong> y fomentar la{" "}
          <strong>restauración de las relaciones familiares</strong> por medio de talleres, seminarios
          y consejerías, y ejecutar proyectos y programas de interés social, económico y cultural
          para el “Vivir Bien”.
        </p>
      </Section>

      <Section title="Misión">
        <p>
          Identificar, planificar, formular, ejecutar, controlar y evaluar acciones de{" "}
          <strong>desarrollo integral comunitario</strong>, con estrategias sostenibles y sustentables
          en favor y beneficio de los sectores que se encuentran en situaciones de pobreza, mejorando
          la calidad de vida.
        </p>
      </Section>

      <Section title="Visión">
        <p>
          Contribuir en la <strong>construcción de una sociedad digna</strong>, erradicando la
          exclusión social y la pobreza de manera equitativa y económicamente productiva, a través
          del desarrollo integral comunitario con igualdad de oportunidades y fortalecimiento del
          capital humano, en el marco de un proceso de inclusión social.
        </p>
      </Section>

      <section className="py-10 sm:py-12 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Directorio</h2>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {DIRECTORIO.map((item) => (
              <DirectorioCard key={item.nombre} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
