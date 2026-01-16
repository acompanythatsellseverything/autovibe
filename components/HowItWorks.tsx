export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Pide tu coche',
      description:
        'Elige el que quieras de nuestro catálogo o dinos qué modelo buscas. Tu gestor personal te llama en menos de 5 minutos.',
    },
    {
      number: '2',
      title: 'Recibe tu propuesta',
      description:
        'Te enviamos un presupuesto claro con dos opciones — Smart Leasing y Drivovo Subscription — y tú decides cuál te viene mejor.',
    },
    {
      number: '3',
      title: 'Firma online',
      description:
        'Todo se firma por internet con firma digital. Nada de papeleo, sin sorpresas en las comisiones y sin moverte de casa.',
    },
    {
      number: '4',
      title: 'A rodar',
      description:
        'Tu coche te espera cuando lo necesites. Ya viene matriculado, asegurado y listo para lo que le eches.',
    },
  ];

  return (
    <section className="relative py-12 sm:py-14 md:py-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#A368AC] to-[#E1809F]" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-medium leading-[100%] tracking-[0%] text-[#DFDBC8]">
          Cómo funciona
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-medium leading-[100%] tracking-[0%] text-[#DFDBC8]">
                {step.number}. {step.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[120%] sm:leading-[100%] tracking-[0%] text-[#DFDBC8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

