import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VisionSection } from "./vision-section";

export function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/about.jpg"
              width={600}
              height={400}
              alt="Our clinic building"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                Sobre nosotros
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Misión
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Ofrecer atención integral y oportuna en el tratamiento de
                heridas, promoviendo la recuperación y el mantenimiento del
                estado de salud de nuestros pacientes.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Nos distinguimos por la calidad humana de nuestro equipo,
                brindando servicios con calidez, empatía y profesionalismo,
                generando altos niveles de satisfacción en nuestros usuarios y
                sus familias.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="#contact">Contáctenos</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#vision">Visión</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisionSection />
    </>
  );
}
