"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Contáctenos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Déjanos ayudarte
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes alguna duda o necesitas más información? Aquí estamos para
              ti.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <div className="w-full max-w-3xl rounded-xl border border-teal-100 dark:border-teal-800 bg-white dark:bg-slate-900 text-card-foreground shadow-md hover:shadow-lg transition-shadow p-6">
            {/* Formulario con integración a FormSubmit */}
            <form
              action="https://formsubmit.co/juandiego.gama11@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Campos ocultos para mejorar el funcionamiento */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://tu-web.com/gracias"
              />

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  Correo
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="¿Cuál es tu duda?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(+57) 300 123 4567"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descríbenos tu petición"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
