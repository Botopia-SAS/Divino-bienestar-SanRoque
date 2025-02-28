import Link from "next/link"
import Image from "next/image"
import { Clock, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              ¿Quiénes somos?
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Somos una empresa privada especializada en el tratamiento de heridas y servicios de enfermería. Ofrecemos atención domiciliaria, en nuestra infraestructura y en hospitales o clínicas. Nuestro propósito es prevenir, tratar y rehabilitar secuelas patológicas y discapacidades, garantizando una atención integral y humanizada.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#about">
                  Conoce más sobre nosotros
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 8am-7pm</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-primary" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
          <Image
            src="/hero.webp"
            width={350}
            height={350}
            alt="Healthcare professionals"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  )
}

