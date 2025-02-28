import { Card, CardContent } from "@/components/ui/card"

interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: "Enfoque en el servicio",
    description: "Optimizamos nuestros procesos para brindar una atención centrada en nuestros pacientes.",
    icon: "🩺",
  },
  {
    title: "Pasión",
    description: "Trabajamos con entusiasmo y vocación, ofreciendo un trato cordial, empático y comprensivo a cada paciente.",
    icon: "🫀",
  },
  {
    title: "Compromiso con el medio ambiente",
    description: "Fomentamos prácticas sostenibles y promovemos la responsabilidad ambiental.",
    icon: "🛡️",
  },
  {
    title: "Compasión",
    description: "Comprendemos el sufrimiento de nuestros pacientes y sus familias, esforzándonos por aliviarlo y brindarles bienestar.",
    icon: "🤗",
  },
]

export function ServicesSection() {
  return (
    <section id="corporate_values" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">San Roque</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nuestros valores, tu bienestar</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            En nuestra clínica, cada acción refleja nuestros principios: compromiso, confianza y excelencia. Descubre cómo nos guían para brindarte la mejor atención.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

