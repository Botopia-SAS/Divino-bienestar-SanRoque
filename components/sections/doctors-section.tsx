import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Doctor {
  name: string
  specialty: string
  image: string
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Medicina Familiar",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiología",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatría",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. David Wilson",
    specialty: "Ortopedia",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Lisa Thompson",
    specialty: "Dermatología",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. James Parker",
    specialty: "Medicina Interna",
    image: "/placeholder.svg",
  },
]


export function DoctorsSection() {
  return (
    <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Nuestra visión</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Conozca como la empresa se proyecta a futuro</h2>
            <p className="max-w-[700px] text-muted-foreground mmd:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Para el año 2028, nos proyectamos como referentes en la prestación de servicios de salud en la región andina de Colombia. Nuestra gestión se fundamentará en el talento humano y la innovación tecnológica, incorporando herramientas avanzadas, como la inteligencia artificial, para optimizar la toma de decisiones y fortalecer nuestra posición en el sector salud.
            </p>

          </div>
        <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Conoce a los que nos ayudan a llegar a la meta:</h3>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <Image
                src={doctor.image || "/placeholder.svg"}
                width={300}
                height={300}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-primary">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

