import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactWhatsAppCTA_Final";
import HoverButton from "../components/HoverButton";

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Language flag */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/en/about">
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

      {/* Navigation button */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/">Inicio</HoverButton>
      </div>

      {/* About content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sobre Nosotros</h1>
        <p style={{ marginBottom: '2rem' }}>
          Con raíces suecas, traemos una combinación única de experiencia técnica y comprensión profunda del clima, la construcción y la eficiencia. Nuestro conocimiento en ambientes fríos y cálidos nos da una perspectiva única a la hora de instalar sistemas de climatización, posicionar unidades de aire acondicionado de manera óptima, y evaluar el aislamiento térmico de los espacios.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Hemos trabajado con instalaciones eléctricas tanto en sistemas simples como en entornos más complejos y automatizados. Nuestra experiencia incluye desde la instalación de cargadores para autos eléctricos hasta la creación de sistemas integrados de control climático. También ofrecemos la instalación y el montaje completo de saunas, un elemento fundamental en la cultura escandinava.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Nos dedicamos a encontrar soluciones prácticas, seguras y estéticamente integradas, adaptadas a las necesidades específicas de cada cliente. Creemos en la calidad, la confianza y la funcionalidad a largo plazo.
        </p>
      </section>

      {/* WhatsApp CTA */}
      <ContactCTA />
    </div>
  );
}
