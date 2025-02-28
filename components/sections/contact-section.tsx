import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contáctenos</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Déjanos ayudarte</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes alguna duda o necesitas más información? Aquí estamos para ti.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/contact.png"
                width={600}
                height={400}
                alt="Map location"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Medical Center Drive, Healthville, HV 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@healthcareclinic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Monday-Friday: 8am-7pm | Saturday: 9am-2pm | Sunday: Closed</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nombre
                </label>
                <Input id="contact-name" placeholder="Ingresa tu nombre" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Correo
                </label>
                <Input id="contact-email" type="email" placeholder="john.doe@email.com" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Asunto
                </label>
                <Input id="contact-subject" placeholder="Cuál es tu duda" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea id="contact-message" placeholder="Describenos tu petición" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                Envíar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

