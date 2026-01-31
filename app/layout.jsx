import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sumaqamaña Bolivia",
  description: "Fundación Sumaqamaña - Bolivia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
