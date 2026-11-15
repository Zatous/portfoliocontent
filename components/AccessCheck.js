"use client";

import { useState } from "react";

export default function AccessCheck() {
  const [checked, setChecked] = useState(false);
  return <div className="access-check">
    <button className="access-button metadata" type="button" onClick={() => setChecked(true)} aria-describedby="access-status">CHECK ACCESS <span aria-hidden="true">↗</span></button>
    <p className="access-status metadata" id="access-status" role="status">{checked ? "Nice try. Still locked." : "FULL ACCESS REQUIRES A HIRE."}</p>
  </div>;
}
