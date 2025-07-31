import React, { useState } from "react";
import ContactCTA from "../../components/ContactWhatsAppCTA_RealFix";
import HoverButton from "../../components/HoverButton";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaSnowflake, FaChargingStation, FaTools, FaWhatsapp } from "react-icons/fa";

export default function ServicesPageEN() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Spanish flag top right */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/services">
          <Image src="/flag-es.png" alt="Español" width={36} height={24} />
        </Link>
      </div>
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
    Electrical installations · AC · EV chargers · Repairs
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

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Our Services</h1>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <ServiceCard icon={<FaBolt />} title="Electrical Installations" desc="Design, installation, and maintenance of residential and commercial electrical systems." />
        <ServiceCard icon={<FaSnowflake />} title="Air Conditioning" desc="Split unit installation, refrigerant refill, and performance checks." />
        <ServiceCard icon={<FaChargingStation />} title="EV Charging" desc="Professional installation and guidance for electric vehicle charging at home or business." />
        <ServiceCard icon={<FaTools />} title="Other Services" desc="Sauna building, refrigerator repair, and custom electrical improvements." />
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '0.5rem', color: '#0284c7' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );

}
<ContactCTA />