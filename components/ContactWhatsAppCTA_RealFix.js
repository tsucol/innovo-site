import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCTA() {
   const whatsappUrl = `https://wa.me/59899318273?v=${Date.now()}`;
  return (
    <section style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>¿Necesitás un presupuesto?</h2>
      <p>Contactanos por WhatsApp.</p> 
      <a href="https://wa.me/59899318273" target="_blank" rel="noopener noreferrer">
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
  );
}