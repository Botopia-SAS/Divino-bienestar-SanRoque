import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/branding/logo"
import { NavigationMenu } from "@/components/layout/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <NavigationMenu />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="#contact">
              <Phone className="mr-2 h-4 w-4" />
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

