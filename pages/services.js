import React, { useState } from "react";
import HoverCardButton from "../components/HoverCardButton";
import ContactCTA from "../components/ContactWhatsAppCTA_RealFix";
import HoverButton from "../components/HoverButton";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaSnowflake, FaChargingStation, FaTools, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Flag link */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/en">
          <Image src="/flag-uk.png" alt="English" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '3rem',
        padding: '0 1rem',
        textAlign: 'center'
  }}>
  <Link href="/">
    <Image
      src="/logo.png"
      alt="Innovo Logo"
      width={300}
      height={160}
      style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
    />
  </Link>
  <p style={{
      marginTop: '1rem',
      fontSize: '1.1rem',
      lineHeight: '1.4',
      color: '#1f2937',
     maxWidth: '500px'
  }}>
    Instalaciones eléctricas · Iluminación · Climatización · Automación · Reparación
  </p>
</div>

<div style={{
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  marginBottom: '2rem'
}}>
  <HoverButton href="/en/services">Services</HoverButton>
  <HoverButton href="/en/about">About Us</HoverButton>
</div>


      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Nuestros Servicios</h1>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
      <HoverCardButton href="/instalaciones-electricas">
  <ServiceCard
    icon={<FaBolt />}
    title="Instalaciones Eléctricas"
    desc="Montaje y reparación de instalaciones eléctricas residenciales y comerciales."
  />
</HoverCardButton>
        <ServiceCard icon={<FaSnowflake />} title="Climatización" desc="Instalación y recarga de aires acondicionados split, revisión de funcionamiento." />
        <ServiceCard icon={<FaChargingStation />} title="Cargadores Eléctricos" desc="Asesoramiento e instalación de cargadores para autos eléctricos en hogares o locales." />
        <ServiceCard icon={<FaTools />} title="Otros Servicios" desc="Montaje de saunas, reparación de heladeras, mejoras eléctricas personalizadas." />
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc, hovered }) {
  return (
    <div style={{
      backgroundColor: hovered ? '#f3f4f6' : 'white',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: hovered
        ? '0 6px 12px rgba(0,0,0,0.15)'
        : '0 2px 6px rgba(0,0,0,0.1)',
      transform: hovered ? 'scale(1.03)' : 'scale(1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    }}>
      <div style={{ marginBottom: '0.5rem', color: '#0284c7' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}