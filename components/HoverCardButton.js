import React, { useState } from "react";
import Link from "next/link";

export default function HoverCardButton({ href, children }) {
  const [hover, setHover] = useState(false);

  // Inject the hover prop into the child (ServiceCard)
  const cloned = React.cloneElement(children, { hovered: hover });

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block'
        }}
      >
        {cloned}
      </a>
    </Link>
  );
}