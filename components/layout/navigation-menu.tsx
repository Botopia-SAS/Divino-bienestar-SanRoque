"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigationLinks = [
  { href: '#home', label: 'Inicio' },
  { href: "#corporate_values", label: "Valores corporativos" },
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
]

interface NavigationMenuProps {
  className?: string
}

export function NavigationMenu({ className }: NavigationMenuProps) {
  return (
    <div className="relative z-20">
      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4 mt-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium px-2 py-1 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop menu */}
      <nav className={cn("hidden md:flex gap-6", className)}>
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
