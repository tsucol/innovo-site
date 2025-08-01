import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../../components/ContactWhatsAppCTA_Final";
import HoverButton from "../../components/HoverButton";

export default function AboutPageEN() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Language flag */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/about">
          <Image src="/flag-es.png" alt="Español" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and subtitle */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', marginBottom: '2rem', padding: '0 1rem', textAlign: 'center'
      }}>
        <Link href="/en">
          <Image src="/logo.png" alt="Innovo Logo" width={300} height={160} style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }} />
        </Link>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.4', color: '#1f2937', maxWidth: '500px' }}>
          Electrical Installations · Lighting · Climate Control · Automation · Repairs
        </p>
      </div>

      {/* Navigation button */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/en">Home</HoverButton>
      </div>

      {/* About content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Us</h1>
        <p style={{ marginBottom: '2rem' }}>
          With Swedish roots, we bring a unique blend of technical expertise and deep understanding of climate, construction, and efficiency. Our experience in both hot and cold environments gives us a special perspective when it comes to installing climate systems, placing air conditioning units for optimal performance, and evaluating insulation in homes and commercial spaces.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          We've worked with everything from basic electrical installations to advanced building automation systems. Our services include electric vehicle charger installations, integrated control systems, and complete sauna builds—an essential part of Scandinavian culture and wellness.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Our goal is to deliver practical, safe, and visually integrated solutions tailored to each client’s needs. We believe in quality, trust, and functionality that lasts.
        </p>
      </section>

      {/* WhatsApp CTA */}
      <ContactCTA />
    </div>
  );
}