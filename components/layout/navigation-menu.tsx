import Link from "next/link"

const navigationLinks = [
  { href: "#corporate_values", label: "Valores corporativos" },
  { href: "#about", label: "Acerca de" },
  { href: "#vision", label: "Visión" },
  { href: "#contact", label: "Contacto" },
]

export function NavigationMenu() {
  return (
    <nav className="hidden md:flex gap-6">
      {navigationLinks.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary">
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

