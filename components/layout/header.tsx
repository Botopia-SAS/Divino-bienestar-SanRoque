import Link from "next/link"
import { Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/branding/logo"
import { NavigationMenu } from "@/components/layout/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 md:py-6 lg:py-8">
      <div className="container flex h-14 md:h-16 items-center justify-between">
      <div className="flex items-center gap-1 md:gap-2">
        <Logo className="h-8 md:h-10" />
      </div>
      <div className="hidden md:block">
        <NavigationMenu />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        <Button asChild variant="outline" size="sm" className="hidden sm:flex md:text-lg dark:bg-green-700 dark:text-white bg-blue-500 text-white">
        <Link href="#contact">
          <Phone className="mr-2 h-3 w-3 md:h-4 md:w-4" />
          <span className="text-sm md:text-base">Contáctanos</span>
        </Link>
        </Button>
        <Button asChild variant="outline" size="sm" className="flex md:hidden md:text-lg dark:bg-green-700 dark:text-white bg-blue-500 text-white">
        <Link href="#contact">
          <Phone className="mr-2 h-3 w-3 md:h-4 md:w-4" />
          <span className="text-sm md:text-base sr-only">Contacto</span>
        </Link>
        </Button>
        <div className="md:hidden">
        <NavigationMenu className="py-3" />
        </div>
      </div>
      </div>
    </header>
  )
}
