import Image from "next/image";

export default function ServicesSection() {

  return (
    <section
      id="servicios"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 dark:text-green-300">
              Nuestros Servicios Especializados
            </h2>
            <p className="max-w-[900px] text-green-600 dark:text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos atención médica especializada con un enfoque integral y
              humano.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/services.jpg"
            width="550"
            height="550"
            alt="Servicios médicos especializados"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-md dark:shadow-green-900/30"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="bg-blue-50 dark:bg-blue-800/40 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-green-700 dark:text-teal-300">
                    Curación úlceras varicosas
                  </h3>
                  <p className="text-green-600 dark:text-green-200">
                    Tratamiento especializado para la curación efectiva de úlceras derivadas de problemas venosos, mejorando la calidad de vida del paciente.
                  </p>
                </div>
              </li>
              <li className="bg-green-50 dark:bg-green-800/40 p-4 rounded-lg shadow-sm border-l-4 border-green-500 dark:border-green-400">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300">
                    Curación pie diabético
                  </h3>
                  <p className="text-green-600 dark:text-green-200">
                    Atención especializada para el tratamiento y prevención de complicaciones en pacientes con pie diabético, enfocada en la preservación de la extremidad.
                  </p>
                </div>
              </li>
              <li className="bg-blue-50 dark:bg-blue-800/40 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-green-700 dark:text-teal-300">
                    Curación por quemaduras
                  </h3>
                  <p className="text-green-600 dark:text-green-200">
                    Tratamiento integral para pacientes con quemaduras de diversos grados, incluyendo limpieza, desbridamiento y aplicación de apósitos especializados.
                  </p>
                </div>
              </li>
              <li className="bg-green-50 dark:bg-green-800/40 p-4 rounded-lg shadow-sm border-l-4 border-green-500 dark:border-green-400">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300">
                    Cirugía reconstructiva de miembro inferior
                  </h3>
                  <p className="text-green-600 dark:text-green-200">
                    Intervenciones quirúrgicas avanzadas para restaurar la forma
                    y función de las extremidades inferiores tras traumatismos o
                    defectos congénitos.
                  </p>
                </div>
              </li>
              <li className="bg-blue-50 dark:bg-blue-800/40 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-green-700 dark:text-teal-300">
                    Atención al paciente quemado
                  </h3>
                  <p className="text-green-600 dark:text-green-200">
                    Manejo integral de pacientes con quemaduras, incluyendo
                    tratamiento agudo, cirugía reconstructiva y rehabilitación
                    especializada.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
