import React, { useState } from "react";

export default function Heart() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`heart ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="heart-shape" aria-hidden>
        ❤️
      </div>
      {open && <div className="message">Be my Valentine? ❤️</div>}
    </div>
  );
}
