import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function VisionSection() {
  return (
    <section
      id="vision"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/vision.jpg"
            width={600}
            height={400}
            alt="Our vision"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
              Nuestra Visión
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Visión
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Para el año 2028, nos proyectamos como referentes en la prestación
              de servicios de salud en la región andina de Colombia. Nuestra
              gestión se fundamentará en el talento humano y la innovación
              tecnológica, incorporando herramientas avanzadas, como la
              inteligencia artificial, para optimizar la toma de decisiones y
              fortalecer nuestra posición en el sector salud.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild>
                <Link href="#about">Sobre Nosotros</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#contact">Contáctenos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
