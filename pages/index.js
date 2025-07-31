import React, { useState } from "react";
import ContactCTA from "../components/ContactWhatsAppCTA_RealFix";
import HoverCardButton from "../components/HoverCardButton";
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

      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/about">Sobre Nosotros</HoverButton>
      </div>

      {/* Services grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <HoverCardButton href="/instalaciones-electricas">
          <ServiceCard
            icon={<FaBolt />}
            title="Instalaciones Eléctricas"
            desc="Montaje y reparación de instalaciones eléctricas residenciales y comerciales."
          />
        </HoverCardButton>

        <HoverCardButton href="/aire-acondicionado">
          <ServiceCard
            icon={<FaSnowflake />}
            title="Aire Acondicionado"
            desc="Instalación, recarga y mantenimiento de aires acondicionados."
          />
        </HoverCardButton>

        <HoverCardButton href="/cargadores-electricos">
          <ServiceCard
            icon={<FaChargingStation />}
            title="Cargadores para Autos Eléctricos"
            desc="Instalación de cargadores y asesoramiento técnico."
          />
        </HoverCardButton>

        <HoverCardButton href="/otros-servicios">
          <ServiceCard
            icon={<FaTools />}
            title="Otros Servicios"
            desc="Montaje de saunas, reparación de heladeras, y soluciones a medida."
          />
        </HoverCardButton>
      </section>

      {/* Contact */}
      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2>¿Necesitás un presupuesto?</h2>
        <p>Contactanos por WhatsApp.</p>
        <a href="https://wa.me/59812345678" target="_blank" rel="noopener noreferrer">
          <button style={{
            marginTop: '1rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#25D366',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}>
            <FaWhatsapp size={20} /> WhatsApp
          </button>
        </a>
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