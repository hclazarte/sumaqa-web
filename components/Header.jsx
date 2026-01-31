import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="w-full">
      {/* Barra superior */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">


            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-emerald-700"
            >
              Fundación Suma Qamaña Bolivia
            </Link>


            {/* El "verdecito" se queda aquí arriba */}
            <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
              Fundación Suma Qamaña · Bolivia
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[100px] sm:h-[200px] lg:h-[300px]">
          <Image
            src="/portada-web.png"
            alt="Portada Fundación Suma Qamaña"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
