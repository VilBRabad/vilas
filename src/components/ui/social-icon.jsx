"use client";

import Link from "next/link";
import { useState } from "react";

function SocialIcon({ account }) {
    const [isHover, setHover] = useState(false);

  return (
    <Link
      href={account.href}
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
          backgroundColor: isHover? account.bgColor : "rgba(110, 110, 110, 0.28)",
          transition: "background-color 0.3s",
      }} 
      className={`p-2 rounded-full`}
    >
      { account.icon }
    </Link>
  )
}

export default SocialIcon