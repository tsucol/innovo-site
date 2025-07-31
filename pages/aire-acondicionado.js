import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactWhatsAppCTA_RealFix";
import HoverButton from "../components/HoverButton";

export default function AireAcondicionadoPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      
      {/* Language flag */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/en">
          <Image src="/flag-uk.png" alt="English" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and subtitle */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', marginBottom: '2rem', padding: '0 1rem', textAlign: 'center'
      }}>
        <Link href="/">
          <Image src="/logo.png" alt="Innovo Logo" width={300} height={160} style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }} />
        </Link>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.4', color: '#1f2937', maxWidth: '500px' }}>
          Instalaciones eléctricas · Iluminación · Climatización · Automación · Reparación
        </p>
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/">Inicio</HoverButton>
        <HoverButton href="/about">Sobre Nosotros</HoverButton>
      </div>

      {/* Main content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Aire Acondicionado</h1>
        <p style={{ marginBottom: '2rem' }}>
          Ofrecemos instalación, mantenimiento y recarga de unidades de aire acondicionado split para hogares, oficinas y comercios. Trabajamos con equipos nuevos, hacemos recambios de equipos antiguos y ofrecemos asesoramiento técnico sobre potencia adecuada y ubicación.
        </p>
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px', marginBottom: '2rem' }}>
          <li>✔ Instalación de aires acondicionados split</li>
          <li>✔ Recarga de gas refrigerante</li>
          <li>✔ Reubicación de equipos</li>
          <li>✔ Mantenimiento preventivo</li>
          <li>✔ Limpieza de filtros y control de rendimiento</li>
          <li>✔ Asesoramiento técnico y elección del equipo</li>
        </ul>
      </section>

      {/* Gallery placeholder */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', textAlign: 'center' }}>
        <h2>Galería de trabajos anteriores</h2>
        <p style={{ marginBottom: '1rem' }}>Muy pronto podrás ver fotos de nuestras instalaciones reales aquí.</p>
        <div style={{
          height: '200px',
          backgroundColor: '#e5e7eb',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#6b7280'
        }}>
          Galería próximamente...
        </div>
      </section>

      {/* WhatsApp CTA */}
      <ContactCTA />
    </div>
  );
}