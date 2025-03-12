import Link from "next/link"
import Image from "next/image"
import { Clock, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-green-900 dark:text-green-100">
                ¿Quiénes somos?
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-green-700 dark:text-green-300 max-w-[600px]">
                Somos una empresa privada especializada en el tratamiento de heridas y servicios de enfermería. Ofrecemos atención domiciliaria, en nuestra infraestructura y en hospitales o clínicas. Nuestro propósito es prevenir, tratar y rehabilitar secuelas patológicas y discapacidades, garantizando una atención integral y humanizada.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                <Link href="#contact">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 dark:border-green-300 dark:text-green-300 dark:hover:bg-green-800">
                <Link href="#about">
                  Conoce más sobre nosotros
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-first lg:order-last mb-6 lg:mb-0">
            <Image
              src="/hero.jpg"
              width={600}
              height={600}
              alt="Healthcare professionals"
              className="mx-auto rounded-xl object-cover w-full h-auto max-w-[350px] sm:max-w-[450px] lg:max-w-none aspect-video md:aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
