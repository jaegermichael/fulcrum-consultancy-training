"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { List, ChatCircleDots, ArrowUpRight } from "@phosphor-icons/react";

const links = [["Home", "/"], ["Courses", "/courses"], ["Consulting", "/consulting"], ["Corporate Training", "/corporate-training"], ["About", "/about"], ["Contact", "/contact"]];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" aria-label="Fulcrum home"><Image src="/fulcrum-logo.png" alt="Fulcrum Consultancy and Training" width={260} height={130} priority /></Link><nav className="desktop-nav" aria-label="Primary">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="button button-small nav-cta" href="/contact">Book training <ArrowUpRight /></Link><button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <span aria-hidden="true">×</span> : <List />}</button></div>{open && <nav className="mobile-nav" aria-label="Mobile">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></Link>)}<Link className="button" href="/contact">Book training</Link></nav>}</header>;
}
export function Footer() { return <footer><div className="footer-grid"><div><Image className="footer-logo" src="/fulcrum-logo.png" alt="Fulcrum Consultancy and Training" width={280} height={140} /><p>Practical training and consulting in data analytics, accounting software, computer applications and business systems.</p></div><div><h3>Explore</h3>{links.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><h3>Contact</h3><a href="tel:+263778599227">0778 599 227</a><a href="tel:+263714325378">0714 325 378</a><span>Harare, Zimbabwe</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Fulcrum Consultancy & Training</span><span>Knowledge is leverage.</span></div></footer> }
export function WhatsAppDock() { return <a className="whatsapp-dock" href="https://wa.me/263778599227?text=Hello%20Fulcrum%2C%20I%27d%20like%20to%20book%20training." target="_blank" rel="noreferrer"><ChatCircleDots weight="fill" /><span>WhatsApp us</span></a> }
