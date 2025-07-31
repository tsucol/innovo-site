import React, { useState } from "react";
import Link from "next/link";

export default function HoverButton({ href, children }) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          backgroundColor: hover ? '#38bdf8' : '#0284c7',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
      >
        {children}
      </button>
    </Link>
  );
}