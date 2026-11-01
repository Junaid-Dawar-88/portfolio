"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { whatsappLink } from "../lib/site";
import { ease } from "../lib/motion";

/** Chat-bubble glyph, sized by the parent's font-size. */
export const ChatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20.5 4.4 16A8.5 8.5 0 1 1 8 19.6Z" />
    <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6a5.4 5.4 0 0 0 2.6 2.4l.6-.6c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .5-.4 1-1 1.2-1 .3-2.6 0-4.3-1.5S9 11.5 9 10.2c0-.6 0-1.1.2-1.6Z" fill="currentColor" stroke="none" />
  </svg>
);

/** Click-to-chat on WhatsApp, pinned to the corner of every page except the printable CV. */
const WhatsAppButton = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/cv")) return null;

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Junaid on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.4, ease, delay: 1.2 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-[#05301a] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] sm:bottom-7 sm:right-7 sm:px-5"
    >
      <ChatIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
