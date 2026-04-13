export type Locale = 'es' | 'en' | 'uk' | 'ru';

export const translations = {
  es: {
    // Header
    header: {
      inicio: 'Inicio',
      suscripcion: 'Suscripción',
      compra: 'Compra',
      empresas: 'Empresas',
      elClub: 'El Club',
      llamaMe: 'Llama me!',
      miCuenta: 'Mi Cuenta',
    },
    callbackRequest: {
      title: 'Solicitar llamada',
      name: 'Nombre',
      message: 'Mensaje',
      phone: 'Tu teléfono',
      submit: 'Enviar solicitud',
      sending: 'Enviando...',
      successMessage: '¡Enviado! Te llamaremos pronto.',
      close: 'Cerrar',
    },
    // Home page
    home: {
      hero: {
        title: 'Suscripción de coches sin líos.',
        subtitle: 'Tu coche, tus reglas. Para ti o tu empresa.',
        verCoches: 'Ver coches!',
      },
      featuredCars: {
        title: 'Lo más pedido, disponible ya',
        verMas: 'ver más >',
        noCars: 'No hay coches disponibles en este momento.',
      },
      carsForSale: {
        title: 'Coches en venta',
        verMas: 'ver más >',
      },
      shortTermRental: {
        title: 'Alquiler a corto plazo',
        verMas: 'ver más >',
      },
      featureCardsMain: {
        card1: { title: 'Tú decides cuánto tiempo', description: 'Desde 1 mes hasta 3 años. Sin ataduras, sin rollos.' },
        card2: { title: 'Tu próximo coche te espera', description: 'Nuevos y usados, pocos kilómetros, muchas opciones.' },
        card3: { title: 'Súmate a El Club!', description: 'Donde conducir sin ataduras es normal.' },
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Se acaba tu contrato — tienes 4 opciones',
      options: {
        option1: {
          title: 'Devuélvelo sin líos',
          description:
            'Lo traes, cerramos todo y te vas. Cero comisiones, cero complicaciones.',
        },
        option2: {
          title: 'Cambia o extiende',
          description:
            'Coge otro coche de nuestra flota o quédate más meses con el que tienes. Tú mandas.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Ajusta tu plan de pagos y compra el coche al valor residual que pactamos desde el inicio.',
        },
        option4: {
          title: 'Compra ya sin intereses',
          description:
            'Aprovecha el precio especial de tu contrato (sin intereses) y el coche es tuyo ya.',
        },
      },
    },
    // FAQ
    faq: {
      title: '¿Tienes dudas?',
      questions: {
        q1: {
          question: '¿Qué es la suscripción de coches?',
          answer:
            'La suscripción de coches es la nueva forma de tener un coche. Comprar un coche es cosa del pasado, no solo por todos los costes asociados. Con AutoVibe, tienes el coche que quieres, durante el tiempo que lo quieras. Todo está incluido en tu suscripción mensual. Así que solo tienes que preocuparte de conducir. Nosotros nos encargamos de todos tus gastos, excepto del combustible.',
        },
        q2: {
          question: '¿Qué incluye mi cuota mensual?',
          answer:
            'Con AutoVibe tu suscripción de coche está completamente cubierta para que puedas disfrutarla al máximo. Todo está incluido en la misma cuota: mantenimiento, impuestos e ITV. ¡Solo tienes que preocuparte del combustible!',
        },
        q3: {
          question: '¿Cuánto tiempo tengo que estar mínimo?',
          answer:
            'La duración de tu contrato con AutoVibe es flexible y depende del coche y del tipo de suscripción que hayas elegido. La duración mínima de tu suscripción corresponde a la establecida en tu contrato e indica cuánto tiempo debes permanecer con nosotros.',
        },
        q4: {
          question: '¿En qué se diferencia de un renting?',
          answer:
            'La diferencia clave está en la flexibilidad. El renting te obliga a firmar contratos de años con condiciones fijas y sin opción a cambios. La suscripción funciona por meses, sin ataduras largas, y puedes adaptar el servicio a lo que necesites en cada momento (kilometraje, duración, incluso cambiar de coche).',
        },
      },
    },
    // How it works (Como funciona)
    howItWorks: {
      title: 'Cómo funciona',
      step1: { title: 'Pide tu coche', description: 'Elige el que quieras de nuestro catálogo o dinos qué modelo buscas. Tu gestor personal te llama en menos de 5 minutos.' },
      step2: { title: 'Recibe tu propuesta', description: 'Te enviamos un presupuesto claro con dos opciones — Smart Leasing y Drivovo Subscription — y tú decides cuál te viene mejor.' },
      step3: { title: 'Firma online', description: 'Todo se firma por internet con firma digital. Nada de papeleo, sin sorpresas en las comisiones y sin moverte de casa.' },
      step4: { title: 'A rodar', description: 'Tu coche te espera cuando lo necesites. Ya viene matriculado, asegurado y listo para lo que le eches.' },
    },
    // Footer
    footer: {
      legal: {
        terminos: 'Términos y condiciones',
        privacidad: 'Política de privacidad',
        cookies: 'Política de cookies',
        condiciones: 'Condiciones de la platforma',
      },
      ciudades: {
        title: 'Ciudades',
        valencia: 'Valéncia',
        barcelona: 'Barcelona',
        madrid: 'Madrid',
        marbella: 'Marbella',
      },
      conocenos: {
        title: 'Conócenos',
        sitemap: 'Mapa del sitio',
        trabaja: 'Trabaja con nosotros',
        compramos: 'Compramos tú coche',
        opiniones: 'Opiniones de clientes',
      },
      contactanos: {
        title: 'Contáctanos',
        horario: 'L-V 9:00 – 18:00',
        atencion: 'Atención al cliente: 613 295 610',
        nuevos: 'Nuevos clientes: 611 713 755',
        asistencia: 'Asistencia inmediata por accidente',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 reseñas',
        title: 'Una cuota, todo dentro, cero entrada',
        subtitle: 'Tu suscripción cubre seguro completo, mantenimiento, asistencia, ITV e impuestos. Tú solo conduces.',
        permanenciaLarga: 'Permanencia larga',
        permanenciaLargaDesc: '12, 24, 36 meses de permanencia',
        permanenciaCorta: 'Permanencia corta',
        permanenciaCortaDesc: '1-24 meses',
        comprarCoche: 'Comprar coche',
        comprarCocheDesc: 'Nuestros coches de ocasión',
        vamos: 'Vamos!!!',
        cuotaMensual: 'Cuota mensual',
        ordenarPor: 'Ordenar por:',
        precio: 'Precio',
        nombre: 'Nombre',
        noCoches: 'No hay coches disponibles con los filtros seleccionados.',
      },
      compra: {
        reviews: '104 reseñas',
        title: 'Compra tu próximo coche con garantías',
        subtitle: 'Coches seminuevos listos para comprar. Garantía incluida, entrega donde quieras y las mejores opciones de financiación.',
        permanenciaLarga: 'Permanencia larga',
        permanenciaLargaDesc: '12, 24, 36 meses de permanencia',
        permanenciaCorta: 'Permanencia corta',
        permanenciaCortaDesc: '1-24 meses',
        comprarCoche: 'Comprar coche',
        comprarCocheDesc: 'Nuestros coches de ocasión',
        vamos: 'Vamos!!!',
        cuotaMensual: 'Cuota mensual',
        ordenarPor: 'Ordenar por:',
        precio: 'Precio',
        nombre: 'Nombre',
        noCoches: 'No hay coches disponibles con los filtros seleccionados.',
      },
      empresas: {
        reviews: '104 reseñas',
        title: 'Alquiler flexible para empresas',
        subtitle: 'Solución de movilidad empresarial con contratos de 1 a 12 meses. Sin ataduras largas, adaptado a tus necesidades.',
        permanenciaLarga: 'Permanencia larga',
        permanenciaLargaDesc: '12, 24, 36 meses de permanencia',
        permanenciaCorta: 'Permanencia corta',
        permanenciaCortaDesc: '1-24 meses',
        comprarCoche: 'Comprar coche',
        comprarCocheDesc: 'Nuestros coches de ocasión',
        vamos: 'Vamos!!!',
        cuotaMensual: 'Cuota mensual',
        ordenarPor: 'Ordenar por:',
        precio: 'Precio',
        nombre: 'Nombre',
        noCoches: 'No hay coches disponibles con los filtros seleccionados.',
      },
      elClub: {
        hero: {
          title: 'El Club',
          subtitle: 'Hacemos lo que nos une: ganar dinero, disfrutar juntos y vivir la vida al máximo.',
          button: '¡Únete al Club!',
        },
        returns: {
          title: 'Rendimientos estables con AutoVibe',
          items: {
            item1: 'Rentabilidad del 10-12% anual en USD o EUR para inversiones a partir de 10 000 $.',
            item2: 'Máxima transparencia: acceso a reportes periódicos de flota y resultados financieros.',
            item3: 'Financias la expansión: tu capital se destina al crecimiento del servicio y del parque de vehículos.',
            item4: 'Pagos periódicos: los dividendos se ingresan mensualmente en tu cuenta.',
          },
        },
        benefits: {
          title: 'El Club – Lo que te llevas además del coche',
          items: {
            item1: 'Eventos solo para miembros: quedadas, estrenos de modelos y pruebas VIP que no están abiertas a cualquiera.',
            item2: 'Descuentos que molan: precios especiales en restaurantes, gimnasios, coaching y en servicios extra de AutoVibe.',
            item3: 'Trae amigos y cobra: consigue entre 500 y 2000€ por cada colega que se apunte.',
          },
        },
      },
    },
    // Comparison Table
    comparison: {
      title: 'Por qué somos mejores (en todo)',
      caracteristicas: 'Características',
      leasing: 'Leasing',
      alquiler: 'Alquiler',
      suscripcion: 'Suscripción',
      autovibe: 'AutoVibe',
      features: {
        eligeTiempo: 'Elige cuánto tiempo lo quieres',
        ajustaKm: 'Ajusta los km cada mes',
        llevamosCasa: 'Te lo llevamos a casa',
        todoOnline: 'Todo online, sin papeleos',
        ayudamosAccidente: 'Te ayudamos si tienes un accidente',
        cocheSustitucion: 'Coche de sustitución gratis',
        sinEntrada: 'Sin entrada ni depósito gordo',
        mantenimiento: 'Mantenimiento, ITV, impuestos y asistencia',
        seguro: 'Seguro a todo riesgo incluido',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'meses permanencia mínima',
      cuotaMensualDe: 'cuota mensual de',
      cuotaMensualDeShort: 'mensual',
      desde: 'desde',
      ivaIncl: 'IVA incl.',
      continuar: 'Continuar',
      configuraSuscripcion: 'Configura tu suscripción',
      permanencia: 'Permanencia',
      permanenciaMinimaLabel: 'permanencia mínima',
      mes: 'mes',
      meses: 'meses',
      mesesDisponibles: 'meses disponibles',
      noDisponible: 'No disponible',
      personalizaKilometraje: 'Personaliza tu kilometraje',
      kmMesIncluido: 'km/mes incluido',
      resumenSuscripcion: 'Resumen de tu suscripción',
      precioMes: 'Precio al mes',
      descuentoOferta: 'Descuento por oferta',
      kmAdicionales: 'Personaliza tu kilometraje',
      cuotaMensual: 'Cuota mensual',
      ivaIncluido: 'IVA incluido',
      masIva: '+21% IVA',
      iva21Percent: '21% IVA',
      sobreEsteCoche: 'Sobre este coche',
      caracteristicas: 'Características',
      nombre: 'Nombre',
      telefono: 'Teléfono',
      email: 'Email',
      opcional: '(opcional)',
      enviar: 'Enviar',
      enviando: 'Enviando...',
      contactoFormulario: 'Completa tus datos',
      graciasEnvio: '¡Gracias! Te contactaremos pronto.',
      graciasTitle: '¡Gracias!',
      graciasSubtitle: 'Te contactaremos pronto.',
      mensajeEnvioExitoso: 'Nos pondremos en contacto contigo muy pronto.',
      // Empresas (rental)
      configuraRenta: 'Configura tu renta',
      duracionRenta: 'Duración de la renta',
      resumenRenta: 'Resumen de tu renta',
      // Compra (purchase)
      configuraCompra: 'Configura tu compra',
      opcionCompra: 'Opción de compra',
      plazoFinanciacion: 'Plazo de financiación',
      resumenCompra: 'Resumen de tu compra',
      pagoUnico: 'Pago único',
      financiacion: 'Financiación',
      precioTotal: 'Precio total',
      duracion: 'Duración',
      total: 'Total',
    },
    cookies: {
      title: 'Usamos cookies',
      description: 'Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Puedes aceptar todas o solo las esenciales.',
      showDetails: 'Ver detalles',
      hideDetails: 'Ocultar detalles',
      essential: 'Esenciales',
      essentialDesc: 'Necesarias para el funcionamiento del sitio. No se pueden desactivar.',
      nonEssential: 'Analíticas y marketing',
      nonEssentialDesc: 'Nos ayudan a entender cómo usas el sitio y a mostrarte anuncios relevantes.',
      optional: 'Opcional',
      acceptAll: 'Aceptar todas',
      essentialOnly: 'Solo esenciales',
      privacyLink: 'Política de privacidad',
      termsLink: 'Términos y condiciones',
    },
    privacyPolicy: {
      title: 'Política de Privacidad',
      section1: {
        title: '1. ¿Quiénes somos?',
        intro: 'Somos AUTOVIBESPAIN S.L. .',
        addressLabel: 'Dirección',
        emailLabel: 'Correo electrónico',
      },
      section2: {
        title: '2. ¿Qué hace esta política de privacidad?',
        content: 'Esta Política de Privacidad se aplica a los datos personales que recopilamos y procesamos a través de su uso de https://autovibe.es, la aplicación de AutoVibe, cualquier otro canal en línea que opere AutoVibe (en conjunto, las "Propiedades") y cualquier interacción que tenga con nosotros. Se le referirá como "usted", "usuario" o "usuarios" a lo largo de esta Política de Privacidad. El término "Servicios" se refiere a la prestación de servicios de suscripción de vehículos por parte de AutoVibe al usuario. Por favor, lea atentamente esta Política de Privacidad, que establece los datos personales que recopilamos, por qué y cómo procesamos sus datos personales y cuáles son sus derechos en relación con sus datos personales.',
      },
      section3: {
        title: '3. Provisión obligatoria de datos',
        content: 'Los datos solicitados por AutoVibe a través de cualquiera de los canales proporcionados son, en general, obligatorios (salvo que se especifique lo contrario en el campo requerido) para cumplir con los propósitos para los cuales se están recopilando. Por lo tanto, si no se proporcionan o no se proporcionan correctamente, estas solicitudes no pueden ser atendidas y es posible que no pueda utilizar los Servicios, aunque puede visualizar libremente el contenido del Sitio Web.',
      },
      section4: {
        title: '4. ¿Para qué fines procesará AutoVibe los datos del usuario?',
        purpose1: {
          title: '4.1 Prestación de los Servicios que nos solicita',
          content: 'AutoVibe recopila y utiliza su información para gestionar su uso de los Servicios y la relación entre nosotros, incluyendo: gestión de sus pedidos y suscripciones para nuestros Servicios; entrega de los Servicios que haya solicitado; contacto para ayudarle a completar un pedido o utilizar el proceso de pago con éxito; contacto para organizar la entrega del vehículo que haya solicitado; suspensión de la prestación de Servicios y/o inmovilización del vehículo de acuerdo con los Términos de Uso; contacto de soporte y retención de clientes. Cuando recopilamos los datos personales mencionados anteriormente, lo hacemos para la ejecución del contrato con usted y, para la retención de clientes, en la persecución de nuestros intereses legítimos.',
        },
        purpose2: {
          title: '4.2 Análisis de riesgos',
          content: 'AutoVibe lleva a cabo la evaluación de los riesgos económicos de la contratación solicitada por el Usuario mediante el procesamiento de los datos proporcionados, con el fin de llevar a cabo la contratación de los servicios de AutoVibe. Para ello, realizará las consultas necesarias con terceros, incluyendo sistemas de información crediticia, sistemas de detección de fraude y sistemas de información relacionados con el blanqueo de capitales. Este análisis de riesgos se basará en criterios objetivos que permitan inferir la capacidad de una persona para asumir obligaciones financieras. La base para el procesamiento de datos personales en relación con estos propósitos es el cumplimiento de la solicitud de obtención del producto y el interés legítimo de AutoVibe.',
        },
        purpose3: {
          title: '4.3 Respuesta a consultas',
          content: 'Si plantea cualquier tipo de consulta, sus datos serán procesados para gestionar, procesar y responder a sus solicitudes y consultas. La base legal en la que nos basamos es nuestro interés legítimo para garantizar que pueda utilizar las Propiedades, el Sitio Web y los Servicios y para comprender cómo podemos mejorar, así como para la ejecución del contrato con usted.',
        },
        purpose4: {
          title: '4.4 Encuestas de satisfacción e informes internos',
          content: 'Para este fin, se realizarán las siguientes acciones: consultas a los usuarios sobre la calidad y su satisfacción con los bienes o Servicios proporcionados por AutoVibe; análisis y preparación de estadísticas e informes internos sobre el grado de satisfacción del usuario, el éxito de las campañas comerciales, las preferencias del usuario en su conjunto, así como sobre cualquier otro asunto considerado de interés. Todo el procesamiento derivado de este fin se basará en nuestro interés legítimo.',
        },
        purpose5: {
          title: '4.5 Envío de comunicaciones comerciales personalizadas',
          content: 'AutoVibe enviará comunicaciones comerciales y promocionales a través de correo electrónico, mensajería de texto y llamadas telefónicas relacionadas con los Servicios. El procesamiento derivado de este fin se basará en nuestro interés legítimo para hacer crecer nuestro negocio. Puede darse de baja de las comunicaciones comerciales en cualquier momento contactando a ceo@autovibe.es.',
        },
      },
      section5: {
        title: '5. Categorías de datos personales procesados',
        content: 'A. Datos recopilados directamente: AutoVibe recopila los siguientes datos personales proporcionados por el usuario: datos identificativos (nombre del usuario y otros conductores permitidos y permiso de conducción); datos de contacto (correo electrónico, número de teléfono); datos de características personales (edad, fecha de nacimiento, nacionalidad, dirección); datos de transacciones derivados de los Servicios; detalles de pedidos y suscripciones, vehículos alquilados y pagos; datos de geolocalización; datos telemáticos. B. Datos recopilados a través de terceros: sistemas de referencia crediticia y verificación de identidad. C. Datos recopilados automáticamente: información técnica (dirección IP, tipo de navegador, sistema operativo); información de interacción (URLs, flujo de clics, tiempos de respuesta). Utilizamos cookies y tecnologías similares para recopilar y almacenar cierta información sobre usted.',
      },
      section6: {
        title: '6. ¿Con quién compartimos sus datos personales?',
        content: 'Los datos del usuario podrán ser comunicados a: autoridades públicas, policía y otras agencias de aplicación de la ley cuando lo exija la ley; compañías de seguros cuando un nuevo usuario se registre o se solicite una nueva suscripción; nuestros proveedores de servicios; posibles inversores o compradores/vendedores potenciales de negocios; nuestros auditores, asesores legales y otros asesores profesionales; las empresas del grupo empresarial al que pertenece AutoVibe; nuestros socios (empresas propietarias de los vehículos alquilados). AutoVibe cuenta con procedimientos estrictos para la selección de proveedores con el fin de cumplir con sus obligaciones de protección de datos.',
      },
      section7: {
        title: '7. Transferencias internacionales de datos',
        content: 'AutoVibe no tiene previsto transferir datos fuera del Espacio Económico Europeo (EEE). Sin embargo, si decidimos transferir los datos personales de los usuarios a terceros ubicados fuera del EEE, nos aseguraremos, en los casos en que no exista una decisión de adecuación vigente, de que la transferencia de datos se realice de conformidad con las normativas de protección de datos aplicables, en particular mediante la suscripción de cláusulas contractuales tipo aprobadas por la Comisión Europea.',
      },
      section8: {
        title: '8. Conservación de datos',
        content: 'Los datos del usuario se conservarán durante los siguientes períodos: los datos proporcionados para completar una compra se conservarán durante la relación contractual y, una vez finalizada, durante el período de prescripción de las acciones legales que pudieran derivarse; los datos proporcionados a través de formularios de contacto se conservarán durante el período necesario para procesar y responder a la solicitud; los datos de localización del vehículo se conservarán durante 6 meses después de la terminación de la suscripción; los datos utilizados para el envío de comunicaciones comerciales se procesarán hasta que el usuario se oponga o revoque su consentimiento.',
      },
      section9: {
        title: '9. Responsabilidad del usuario',
        content: 'El usuario confirma que es mayor de dieciocho (18) años y que los datos proporcionados a AutoVibe son verdaderos, precisos, completos y actualizados. El usuario es responsable de la veracidad de todos los datos proporcionados y deberá mantener la información proporcionada debidamente actualizada. El usuario confirma que ha informado a los terceros de los que haya proporcionado datos y de los aspectos contenidos en esta Política de Privacidad. El usuario es responsable de cualquier información falsa o inexacta proporcionada.',
      },
      section10: {
        title: '10. Ejercicio de derechos',
        content: 'Puede enviar una carta a AutoVibe, a la dirección indicada en el encabezado de esta Política de Privacidad, o puede enviarnos un correo electrónico a la siguiente dirección: ceo@autovibe.es en cualquier momento y de forma gratuita, para: revocar los consentimientos otorgados; obtener confirmación sobre si AutoVibe está procesando o no datos personales que le conciernen; acceder a sus datos personales; rectificar datos inexactos o incompletos; solicitar la eliminación de sus datos; obtener la limitación del procesamiento de datos; solicitar la portabilidad de los datos; oponerse a cualquier decisión tomada únicamente a través de procesamiento automatizado. En caso de considerar que AutoVibe ha infringido sus derechos, el usuario puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) visitando su sitio web en www.aepd.es.',
      },
      section11: {
        title: '11. Medidas de seguridad',
        content: 'AutoVibe tratará los datos del usuario en todo momento de forma absolutamente confidencial y mantendrá el deber obligatorio de confidencialidad con respecto a los mismos, de acuerdo con las disposiciones de la normativa aplicable, adoptando para ello las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado.',
      },
      section12: {
        title: '12. Cambios',
        content: 'AutoVibe se reserva el derecho de revisar su Política de Privacidad en cualquier momento que lo considere oportuno, en cuyo caso se comunicará a los usuarios. Por este motivo, le rogamos que consulte regularmente esta declaración de privacidad para leer la versión más reciente de la Política de Privacidad de AutoVibe.',
      },
      lastUpdate: 'Última actualización',
    },
    termsConditions: {
      title: 'Términos y Condiciones Generales',
      aboutUs: {
        title: 'Sobre nosotros',
        intro: 'Somos AUTOVIBESPAIN S.L. .',
        addressLabel: 'Dirección',
        emailLabel: 'Correo electrónico',
      },
      overview: {
        title: 'Resumen de nuestro servicio',
        content: 'AutoVibe proporciona servicios de suscripción de vehículos a través de Planes de Suscripción, cuyos detalles están disponibles en la Plataforma. Los usuarios pueden alquilar un Vehículo eligiendo un Plan de Suscripción y, sujeto a que AutoVibe complete ciertas verificaciones, aceptando tanto el Acuerdo de Alquiler como estos Términos Generales (conjuntamente, el "Contrato de Suscripción"). Si se registra para una Cuenta en la Plataforma, solo se le aplicarán los Términos Generales. Si elige suscribirse a un Vehículo, como parte del proceso de solicitud, deberá celebrar el Acuerdo de Alquiler. Las Tarifas pagaderas en relación con su Plan de Suscripción serán las que se le notifiquen en el momento de celebrar el Contrato de Suscripción. Recopilamos y procesamos información personal de acuerdo con nuestra Política de Privacidad.',
      },
      structure: {
        title: 'Estructura de este Contrato de Suscripción',
        content: 'Este Contrato de Suscripción comprende: (a) esta página de resumen; (b) el Acuerdo de Alquiler; y (c) los Términos Generales — los términos y condiciones generales que regulan la relación contractual entre AutoVibe y usted, incluyendo su uso de la Plataforma. Si existe alguna inconsistencia entre el Acuerdo de Alquiler y los Términos Generales, prevalecerán los términos establecidos en el Acuerdo de Alquiler.',
      },
      section1: {
        title: '1. Glosario',
        content: 'En este Contrato de Suscripción: (a) el plural incluye el singular, el singular también incluye el plural; (b) el masculino incluye el femenino. Definiciones clave: "Cuenta" significa la cuenta en línea del Usuario en el Portal. "Conductor" significa la(s) persona(s) nombrada(s) identificada(s) en un Acuerdo de Alquiler firmado que tienen derecho a conducir el Vehículo. "Tarifas" significa las tarifas a pagar por el Usuario a AutoVibe en relación con este Contrato de Suscripción. "Plan de Suscripción" significa el plan particular seleccionado por el Usuario para alquilar el Vehículo. "Período Mínimo" significa la duración mínima del Contrato de Suscripción. "Plataforma" significa el portal en línea puesto a disposición por AutoVibe en https://autovibe.es. "Vehículo" significa el vehículo proporcionado en virtud de este Contrato de Suscripción. "Territorio" significa España peninsular, no incluyendo islas.',
      },
      section2: {
        title: '2. Proceso contractual',
        content: 'El Usuario puede abrir una Cuenta en la Plataforma y estos Términos Generales se aplicarán al uso de su Cuenta. Una vez que el Usuario haya abierto su Cuenta, puede explorar los Planes de Suscripción disponibles. Si el Usuario decide elegir un Plan de Suscripción, se le pedirá que complete el Proceso de Registro proporcionando la información solicitada por AutoVibe, incluyendo copias del permiso de conducción, información sobre el Método de Pago preferido y otra documentación. Si AutoVibe determina que el Usuario no ha cumplido los requisitos, AutoVibe puede rechazar la solicitud. Después de seleccionar un Plan de Suscripción y completar el Proceso de Registro, AutoVibe enviará al Usuario una copia del Contrato de Suscripción. Una vez firmado digitalmente el Acuerdo de Alquiler, el Contrato de Suscripción es un contrato legalmente vinculante.',
      },
      section3: {
        title: '3. Inicio y duración',
        content: 'El Contrato de Suscripción comienza en la fecha en que el Usuario firma electrónicamente y permanecerá en vigor durante la duración del Período Mínimo y cualquier renovación. El Período Mínimo comienza en la fecha de entrega del Vehículo. Después de que el Período Mínimo haya expirado, el Contrato de Suscripción se renovará automáticamente mensualmente a menos que el Usuario opte por no hacerlo. Período de desistimiento: El Usuario puede cancelar el Contrato de Alquiler de forma gratuita durante un período de 14 días naturales desde la fecha de celebración del contrato. Terminación anticipada: En caso de cancelación antes del final del Período de Permanencia contratado o renovado, se cobrarán al Usuario las penalizaciones correspondientes según lo establecido en el contrato. AutoVibe puede cancelar el Contrato en cualquier momento si el Usuario o cualquier Conductor no cumple con los términos.',
      },
      section4: {
        title: '4. Territorio',
        content: 'El Territorio aplicable al Contrato de Suscripción es España peninsular, no incluyendo islas. Esto significa que el Vehículo solo puede conducirse en España peninsular y no fuera de ella sin el permiso previo de AutoVibe. AutoVibe y el Usuario pueden acordar agregar países adicionales dentro de Europa al Territorio (dependiendo del Plan de Suscripción y siempre que no lleve el Vehículo en un barco). Si el Usuario desea extender el Territorio, debe contactar a AutoVibe, especificando los países adicionales y las fechas de salida y regreso.',
      },
      section5: {
        title: '5. Conductores',
        content: 'El derecho a conducir un Vehículo está limitado exclusivamente a los Conductores nombrados en el Contrato de Suscripción. Todos los Conductores deben: (i) tener al menos 25 años de edad en la fecha del Contrato; y (ii) tener un permiso de conducción completo (no provisional) válido que haya sido mantenido durante al menos dos (2) años. El Usuario puede designar un conductor principal y hasta cuatro (4) conductores adicionales. El Usuario es totalmente responsable del cumplimiento de cada Conductor con el Contrato de Suscripción.',
      },
      section6: {
        title: '6. Permisos de conducir',
        content: 'AutoVibe acepta los permisos de conducir según lo descrito en nuestras FAQ. Ciertos modelos de Vehículos pueden requerir una edad mínima superior o un período más largo de experiencia de conducción previa.',
      },
      section7: {
        title: '7. Seguro',
        content: 'Cuando un Plan de Suscripción incluye seguro de Vehículo y asistencia en carretera, estos están incluidos como parte de las Tarifas. El Usuario deberá informar inmediatamente a AutoVibe si alguna de las respuestas a los Requisitos de Seguro cambia. AutoVibe puede cancelar el Contrato de Suscripción inmediatamente si el Usuario o cualquier Conductor ya no cumple los requisitos de seguro de AutoVibe. Si el Plan de Suscripción no incluye seguro, el Usuario debe obtener su propio seguro para la duración del Contrato.',
      },
      section8: {
        title: '8. Tarifas y pagos',
        content: 'Las Tarifas se calculan con referencia al Plan de Suscripción aplicable y se establecen en el Acuerdo de Alquiler. Las Tarifas son pagaderas mensualmente. La Tarifa incluye: provisión del Vehículo, kilometraje mensual permitido, mantenimiento y servicio, impuesto de circulación, inspección técnica del vehículo y servicio al cliente. Las Tarifas incluyen IVA. El Usuario es responsable además de: cargos de combustible y energía; peajes o cargos de congestión; seguros y asistencia en carretera (salvo que el Plan diga lo contrario). En caso de impago o pago tardío, el vehículo será bloqueado durante un período de al menos cuarenta y ocho (48) horas. AutoVibe se reserva el derecho de actualizar el precio durante la vida del contrato con notificación previa de treinta (30) días.',
      },
      section9: {
        title: '9. Detalles del vehículo',
        content: 'AutoVibe confirma que el Vehículo tendrá las mismas o similares características técnicas y condición al Vehículo seleccionado por el Usuario. De acuerdo con la Política de Privacidad, AutoVibe incluirá dispositivos de geolocalización en el Vehículo.',
      },
      section10: {
        title: '10. Entrega del vehículo',
        content: 'Los costes de entrega del Vehículo se establecen en el Acuerdo de Alquiler. La entrega se realizará únicamente en ubicaciones peninsulares del Territorio. AutoVibe se reserva el derecho de realizar cambios en el lugar o la hora acordada de entrega o recogida debido a circunstancias fuera de su control. En la entrega del Vehículo, el Usuario debe identificarse mostrando su permiso de conducción. El Usuario debe inspeccionar el vehículo y, si tiene algún daño en la entrega, debe reportarlo dentro de las 72 horas. En ningún caso AutoVibe proporcionará una segunda llave del Vehículo.',
      },
      section11: {
        title: '11. Restricciones y responsabilidades del usuario',
        content: 'El Usuario no debe, y debe asegurarse de que los Conductores no: conducir el Vehículo en carreteras no autorizadas o sin pavimentar; conducir en exceso de los límites de velocidad o infringiendo señales de tráfico; transportar más personas de las que la capacidad del Vehículo permite; ceder, subarrendar, alquilar, hipotecar, pignorar, vender o transferir de cualquier manera el Vehículo; transportar pasajeros con fines comerciales; transportar drogas, sustancias tóxicas o inflamables; conducir bajo la influencia de alcohol o drogas; manipular el cuentakilómetros; usar el Vehículo para carreras o competiciones; modificar cualquier característica técnica del Vehículo; fumar dentro del Vehículo. El Usuario debe cumplir con las leyes aplicables, realizar los pagos requeridos, proteger el Vehículo contra uso no autorizado o robo, y mantener el Vehículo en buenas condiciones.',
      },
      section12: {
        title: '12. Incidentes y vehículo de sustitución',
        content: 'Cualquier Incidente debe ser reportado a AutoVibe dentro de las 48 horas. El Usuario también debe informar a la policía de cada Incidente. La policía debe ser contactada inmediatamente si un Incidente involucra cualquier delito o lesión a cualquier persona. Si el Usuario no notifica puntualmente el Incidente, el seguro puede no ser válido. Si hay 3 o más Incidentes durante el Contrato de Suscripción, AutoVibe puede rescindir inmediatamente el Contrato.',
      },
      section13: {
        title: '13. Disposiciones generales',
        content: 'Fuerza mayor: AutoVibe no es responsable de ningún acto, omisión o pérdida causada por factores fuera de su control razonable. Renuncia: Si AutoVibe no ejerce alguno de sus derechos en el momento en que surgen, puede optar por ejercer ese derecho en una fecha posterior. Disposiciones separables: Si alguna disposición del Contrato de Suscripción se considera inaplicable, todas las demás disposiciones permanecerán vigentes. Sin cesión: El Usuario no puede ceder a terceros los derechos y obligaciones derivados del Contrato de Suscripción sin la autorización expresa por escrito de AutoVibe. Este Contrato de Suscripción se rige por la legislación española. Cualquier disputa entre AutoVibe y el Usuario será resuelta por los tribunales competentes en Valencia, España. Si tiene alguna pregunta o experimenta algún Incidente, póngase en contacto con nosotros en ceo@autovibe.es.',
      },
      lastUpdate: 'Última actualización',
    },
  },
  en: {
    // Header
    header: {
      inicio: 'Home',
      suscripcion: 'Subscription',
      compra: 'Purchase',
      empresas: 'For Business',
      elClub: 'The Club',
      llamaMe: 'Call me!',
      miCuenta: 'My Account',
    },
    callbackRequest: {
      title: 'Request a call',
      name: 'Name',
      message: 'Message',
      phone: 'Your phone',
      submit: 'Send request',
      sending: 'Sending...',
      successMessage: 'Sent! We will call you soon.',
      close: 'Close',
    },
    // Home page
    home: {
      hero: {
        title: 'Car subscription without hassle.',
        subtitle: 'Your car, your rules. For you or your business.',
        verCoches: 'View cars!',
      },
      featuredCars: {
        title: 'Most requested, available now',
        verMas: 'View more >',
        noCars: 'No cars available at this time.',
      },
      carsForSale: {
        title: 'Cars for sale',
        verMas: 'View more >',
      },
      shortTermRental: {
        title: 'Short-term rental',
        verMas: 'View more >',
      },
      featureCardsMain: {
        card1: { title: 'You choose how long', description: 'From 1 month to 3 years. No ties, no hassle.' },
        card2: { title: 'Your next car is waiting', description: 'New and used, low mileage, many options.' },
        card3: { title: 'Join the Club!', description: 'Where driving without ties is the norm.' },
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Your contract is ending — you have 4 options',
      options: {
        option1: {
          title: 'Return it hassle-free',
          description:
            'You bring it, we close everything and you leave. Zero commissions, zero complications.',
        },
        option2: {
          title: 'Change or extend',
          description:
            'Take another car from our fleet or stay more months with the one you have. You decide.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Adjust your payment plan and buy the car at the residual value we agreed upon from the beginning.',
        },
        option4: {
          title: 'Buy-out without interest',
          description:
            'Take advantage of the special price of your contract (without interest) and the car is yours now.',
        },
      },
    },
    // FAQ
    faq: {
      title: 'Have questions?',
      questions: {
        q1: {
          question: 'What is car subscription?',
          answer:
            'The car subscription is the new way of owning a car. Buying a car is a thing of the past, not least because of all the associated costs. With AutoVibe, you have the car you want, for as long as you want it. Everything is included in your monthly subscription. So all you have to do is take care of the driving. We take care of all your expenses, except for fuel.',
        },
        q2: {
          question: 'What does my monthly fee include?',
          answer:
            'With AutoVibe your car subscription is fully covered so you can enjoy it to the fullest. Everything is included in the same fee: maintenance, taxes and MOT. You only have to worry about the fuel!',
        },
        q3: {
          question: 'How long do I have to stay minimum?',
          answer:
            'The duration of your contract with AutoVibe is flexible and depends on the car and the type of subscription you have chosen. The minimum duration of your subscription corresponds to that set out in your contract and indicates how long you must stay with us.',
        },
        q4: {
          question: 'How is it different from a rental?',
          answer:
            'The key difference is flexibility. Renting obliges you to sign multi-year contracts with fixed conditions and no option for changes. Subscription works by months, without long ties, and you can adapt the service to what you need at any time (mileage, duration, even changing cars).',
        },
      },
    },
    // How it works (Como funciona)
    howItWorks: {
      title: 'How it works',
      step1: { title: 'Request your car', description: 'Choose the one you want from our catalogue or tell us which model you are looking for. Your personal manager will call you in less than 5 minutes.' },
      step2: { title: 'Receive your quote', description: 'We send you a clear quote with two options — Smart Leasing and Drivovo Subscription — and you decide which one suits you best.' },
      step3: { title: 'Sign online', description: 'Everything is signed online with a digital signature. No paperwork, no commission surprises, and all from home.' },
      step4: { title: 'Hit the road', description: 'Your car is waiting for you when you need it. It comes registered, insured and ready to go.' },
    },
    // Footer
    footer: {
      legal: {
        terminos: 'Terms and conditions',
        privacidad: 'Privacy policy',
        cookies: 'Cookie policy',
        condiciones: 'Platform conditions',
      },
      ciudades: {
        title: 'Cities',
        valencia: 'Valencia',
        barcelona: 'Barcelona',
        madrid: 'Madrid',
        marbella: 'Marbella',
      },
      conocenos: {
        title: 'Get to know us',
        sitemap: 'Site map',
        trabaja: 'Work with us',
        compramos: 'We buy your car',
        opiniones: 'Customer reviews',
      },
      contactanos: {
        title: 'Contact us',
        horario: 'Mon-Fri 9:00 – 18:00',
        atencion: 'Customer service: 613 295 610',
        nuevos: 'New clients: 611 713 755',
        asistencia: 'Urgent accident assistance.',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 reviews',
        title: 'One fee, everything included, zero down payment',
        subtitle: 'Your subscription covers full insurance, maintenance, assistance, MOT and taxes. You just drive.',
        permanenciaLarga: 'Long-term rental',
        permanenciaLargaDesc: '12, 24, 36 months',
        permanenciaCorta: 'Short-term rental',
        permanenciaCortaDesc: '1-24 months',
        comprarCoche: 'Buy car',
        comprarCocheDesc: 'Our used cars',
        vamos: 'Let\'s go!!!',
        cuotaMensual: 'Monthly fee',
        ordenarPor: 'Sort by:',
        precio: 'Price',
        nombre: 'Name',
        noCoches: 'No cars available with the selected filters.',
      },
      compra: {
        reviews: '104 reviews',
        title: 'Buy your next car with guarantees',
        subtitle: 'Used cars ready to buy. Warranty included, delivery wherever you want and the best financing options.',
        permanenciaLarga: 'Long-term rental',
        permanenciaLargaDesc: '12, 24, 36 months',
        permanenciaCorta: 'Short-term rental',
        permanenciaCortaDesc: '1-24 months',
        comprarCoche: 'Buy car',
        comprarCocheDesc: 'Our used cars',
        vamos: 'Let\'s go!!!',
        cuotaMensual: 'Monthly fee',
        ordenarPor: 'Sort by:',
        precio: 'Price',
        nombre: 'Name',
        noCoches: 'No cars available with the selected filters.',
      },
      empresas: {
        reviews: '104 reviews',
        title: 'Flexible rental for businesses',
        subtitle: 'Business mobility solution with contracts from 1 to 12 months. No long-term commitments, adapted to your needs.',
        permanenciaLarga: 'Long-term rental',
        permanenciaLargaDesc: '12, 24, 36 months',
        permanenciaCorta: 'Short-term rental',
        permanenciaCortaDesc: '1-24 months',
        comprarCoche: 'Buy car',
        comprarCocheDesc: 'Our used cars',
        vamos: 'Let\'s go!!!',
        cuotaMensual: 'Monthly fee',
        ordenarPor: 'Sort by:',
        precio: 'Price',
        nombre: 'Name',
        noCoches: 'No cars available with the selected filters.',
      },
      elClub: {
        hero: {
          title: 'The Club',
          subtitle: 'We do what unites us: earn money, enjoy together, and live life to the fullest.',
          button: 'Join the Club!',
        },
        returns: {
          title: 'Stable returns with AutoVibe',
          items: {
            item1: '10-12% annual profitability in USD or EUR for investments starting from $10,000.',
            item2: 'Maximum transparency: access to periodic fleet reports and financial results.',
            item3: 'You finance the expansion: your capital is allocated to the growth of the service and the vehicle fleet.',
            item4: 'Periodic payments: dividends are deposited monthly into your account.',
          },
        },
        benefits: {
          title: 'The Club – What you get in addition to the car',
          items: {
            item1: 'Member-only events: meetups, model premieres, and VIP tests not open to anyone else.',
            item2: 'Cool discounts: special prices in restaurants, gyms, coaching, and extra AutoVibe services.',
            item3: 'Bring friends and get paid: get between €500 and €2000 for each friend who signs up.',
          },
        },
      },
    },
    // Comparison Table
    comparison: {
      title: 'Why we are better (at everything)',
      caracteristicas: 'Features',
      leasing: 'Leasing',
      alquiler: 'Rental',
      suscripcion: 'Subscription',
      autovibe: 'AutoVibe',
      features: {
        eligeTiempo: 'Choose your rental period',
        ajustaKm: 'Adjust monthly mileage',
        llevamosCasa: 'Home delivery',
        todoOnline: '100% online paperwork',
        ayudamosAccidente: 'Accident support',
        cocheSustitucion: 'Replacement car',
        sinEntrada: 'No deposit or downpayment',
        mantenimiento: 'Maintenance, MOT, taxes and assistance',
        seguro: 'Full coverage insurance included',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'months minimum rental',
      cuotaMensualDe: 'monthly fee of',
      cuotaMensualDeShort: 'monthly',
      desde: 'from',
      ivaIncl: 'VAT incl.',
      continuar: 'Continue',
      configuraSuscripcion: 'Configure your subscription',
      permanencia: 'Rental period',
      permanenciaMinimaLabel: 'minimum rental',
      mes: 'month',
      meses: 'months',
      mesesDisponibles: 'months available',
      noDisponible: 'Not available',
      personalizaKilometraje: 'Personalize your mileage',
      kmMesIncluido: 'km/month included',
      resumenSuscripcion: 'Subscription summary',
      precioMes: 'Price per month',
      descuentoOferta: 'Discount by offer',
      kmAdicionales: 'Additional km',
      cuotaMensual: 'Monthly fee',
      ivaIncluido: 'VAT included',
      masIva: '+21% VAT',
      iva21Percent: '21% VAT',
      sobreEsteCoche: 'About this car',
      caracteristicas: 'Features',
      nombre: 'Name',
      telefono: 'Phone',
      email: 'Email',
      opcional: '(optional)',
      enviar: 'Send',
      enviando: 'Sending...',
      contactoFormulario: 'Complete your details',
      graciasEnvio: 'Thank you! We will contact you soon.',
      graciasTitle: 'Thank you!',
      graciasSubtitle: 'We will contact you soon.',
      mensajeEnvioExitoso: 'We will contact you very soon.',
      // Empresas (rental)
      configuraRenta: 'Configure your rental',
      duracionRenta: 'Rental duration',
      resumenRenta: 'Rental summary',
      // Compra (purchase)
      configuraCompra: 'Configure your purchase',
      opcionCompra: 'Purchase option',
      plazoFinanciacion: 'Financing term',
      resumenCompra: 'Purchase summary',
      pagoUnico: 'Single payment',
      financiacion: 'Installment',
      precioTotal: 'Total price',
      duracion: 'Duration',
      total: 'Total',
    },
    cookies: {
      title: 'We use cookies',
      description: 'We use cookies to improve your experience and analyse site traffic. You can accept all or only essential cookies.',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      essential: 'Essential',
      essentialDesc: 'Required for the site to function. Cannot be disabled.',
      nonEssential: 'Analytics & marketing',
      nonEssentialDesc: 'Help us understand how you use the site and show you relevant ads.',
      optional: 'Optional',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      privacyLink: 'Privacy policy',
      termsLink: 'Terms and conditions',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      section1: {
        title: '1. Who are we?',
        intro: 'We are AUTOVIBESPAIN S.L. .',
        addressLabel: 'Address',
        emailLabel: 'Email',
      },
      section2: {
        title: '2. What does this privacy policy do?',
        content: 'This Privacy Policy applies to the personal data we collect and process through your use of https://autovibe.es, the AutoVibe app, any other online channels AutoVibe operates (together the "Properties") and any interactions you have with us. You will be referred to as "you", "user" or "users" throughout this Privacy Policy. The term "Services" shall mean the provision of vehicle subscription services by AutoVibe to the user. Please carefully read this Privacy Policy, which sets out the personal data we collect, why and how we process your personal data and what your rights are in relation to your personal data.',
      },
      section3: {
        title: '3. Obligatory provision of data',
        content: 'The data requested by AutoVibe through any of the channels provided are, in general, obligatory (unless otherwise specified in the required field) in order to fulfil the purposes for which they are being collected. Therefore, if they are not provided or are not provided correctly, these requests cannot be met and you may not be able to use the Services, although you may freely view the content of the Website.',
      },
      section4: {
        title: '4. For what purposes will AutoVibe process the user\'s data?',
        purpose1: {
          title: '4.1 Providing the Services you order from us',
          content: 'AutoVibe collects and uses your information to manage your use of the Services and the relationship between us, including: managing your orders and subscriptions for our Services; delivering our Services you have ordered; contacting you to help you complete an order or use the payment process successfully; contacting you to arrange delivery of the vehicle you have ordered; suspending the provision of Services and/or immobilising the vehicle in accordance with the Terms of Use; contacting you for customer support and retention. When we collect the above noted personal data, we are doing so for the performance of the contract with you and, for customer retention, in pursuing our legitimate interests.',
        },
        purpose2: {
          title: '4.2 Risk analysis',
          content: 'AutoVibe carries out the evaluation of the economic risks of the contracting requested by the User through the processing of the data provided, in order to carry out the contracting of AutoVibe\'s services. To this end, it will conduct any necessary consultations with third parties, including credit information systems, fraud detection systems, and information systems related to money laundering. This risk assessment will be based on objective criteria that allow the inference of a person\'s capacity to assume financial obligations. The basis for the processing of personal data in relation to these purposes is the fulfilment of the request to obtain the product and AutoVibe\'s legitimate interest.',
        },
        purpose3: {
          title: '4.3 Responding to questions',
          content: 'If you raise any type of question, your data will be processed in order to manage, process and respond to your requests and queries. The lawful basis we rely on is our legitimate interest to ensure you are able to use the Properties, Website and Services and to understand how we can improve, and for the performance of the contract with you.',
        },
        purpose4: {
          title: '4.4 Satisfaction surveys and internal reports',
          content: 'For this purpose, the following actions will be carried out: making enquiries to users regarding the quality of, and their satisfaction with, the goods or Services provided by AutoVibe; analysis and preparation of internal statistics and reports on the degree of user satisfaction, the success of commercial campaigns, user preferences as a whole. All processing derived from this purpose will be based on our legitimate interest.',
        },
        purpose5: {
          title: '4.5 Sending personalised marketing',
          content: 'AutoVibe will send commercial and promotional communications through email, text messaging and phone calls related to the Services. The processing derived from this purpose will be based on our legitimate interest to grow our business. You can unsubscribe from marketing communications at any time by contacting ceo@autovibe.es.',
        },
      },
      section5: {
        title: '5. Categories of personal data processed',
        content: 'A. Data collected directly: AutoVibe collects the following personal data provided by the user: identifying data (name of the user and other permitted drivers and driving licence); contact details (email, phone number); personal characteristics data (age, date of birth, nationality, address); transaction data derived from the Services; details of orders and subscriptions, vehicles hired and payments; geolocation data; telematics data. B. Data collected through third parties: credit reference and identity verification systems. C. Data collected automatically: technical information (IP address, browser type, operating system); interaction information (URLs, clickstream, response times). We use cookies and similar technologies to collect and store certain information about you.',
      },
      section6: {
        title: '6. Who do we share your personal data with?',
        content: 'The user\'s data may be communicated to: public authorities, police and other law enforcement agencies where required by law; insurance companies when a new user signs up or a new subscription is ordered; our service providers; potential investors, or if we sell or buy any business or assets; our auditors, legal advisers and other professional advisers; the companies of the business group to which AutoVibe belongs; our partners (companies that own the leased vehicles). AutoVibe has strict procedures for the selection of suppliers in order to comply with its data protection obligations.',
      },
      section7: {
        title: '7. International data transfers',
        content: 'AutoVibe does not plan to transfer data outside the European Economic Area (EEA). However, if we do decide to transfer users\' personal data to third parties located outside the EEA, we will, in the cases where there is no adequacy decision in force, ensure that transfer of data will be carried out in compliance with the applicable data protection regulations, in particular by subscribing standard contractual clauses approved by the European Commission.',
      },
      section8: {
        title: '8. Data retention',
        content: 'The user\'s data will be kept for the following periods: data provided to complete a purchase will be kept during the contractual relationship and, once ended, during the period of limitation of the legal actions that may arise; data provided through contact forms shall be kept for the necessary period to process and reply to the request; vehicle location data will be kept for 6 months after the termination of the subscription; data used for sending commercial communications will be processed until the user opposes or revokes their consent.',
      },
      section9: {
        title: '9. User responsibility',
        content: 'The user confirms that he/she is over eighteen (18) years of age and that the data provided to AutoVibe are true, accurate, complete and updated. The user is responsible for the accuracy of all the data provided and shall keep the information provided suitably updated. The user confirms that he/she has informed the third parties from whom data was provided and of the aspects contained in this Privacy Policy. The user is responsible for any false or inaccurate information provided.',
      },
      section10: {
        title: '10. Exercise of rights',
        content: 'You can send a letter to AutoVibe, at the address indicated in the heading of this Privacy Policy, or you can email us at ceo@autovibe.es at any time and free of charge, in order to: revoke consents granted; obtain confirmation as to whether or not AutoVibe is processing personal data concerning the user; access personal data; rectify inaccurate or incomplete data; request the deletion of your data; obtain limitation of data processing; request the portability of data; object to any decision made solely through automated processing. Where the data subject considers that AutoVibe has infringed their rights, the user may lodge a complaint with the Spanish Data Protection Agency (AEPD) by visiting their website at www.aepd.es.',
      },
      section11: {
        title: '11. Security measures',
        content: 'AutoVibe will treat the user\'s data at all times in an absolutely confidential manner and will keep the mandatory duty of confidentiality with regard to the same, in accordance with the provisions of the applicable regulations, adopting the necessary technical and organizational measures to guarantee the security of your data and prevent its alteration, loss, processing or unauthorized access.',
      },
      section12: {
        title: '12. Changes',
        content: 'AutoVibe reserves the right to revise its Privacy Policy at any time it deems appropriate, in which case it will be communicated to users. For this reason, please check this privacy statement regularly to read the most recent version of AutoVibe\'s Privacy Policy.',
      },
      lastUpdate: 'Last update',
    },
    termsConditions: {
      title: 'General Terms and Conditions',
      aboutUs: {
        title: 'About Us',
        intro: 'We are AUTOVIBESPAIN S.L. .',
        addressLabel: 'Address',
        emailLabel: 'Email',
      },
      overview: {
        title: 'Overview of our service',
        content: 'AutoVibe provides vehicle subscription services through Subscription Plans, details of which are made available on the Platform. Users may rent a Vehicle by choosing a Subscription Plan and, subject to AutoVibe completing certain checks, agreeing to both the Hire Agreement and these General Terms (together, the "Subscription Contract"). If you sign up for an Account on the Platform, only the General Terms will apply to you. If you choose to subscribe for a Vehicle, as part of the application process you will be required to enter into the Hire Agreement. The Fees payable in connection with your Subscription Plan will be those notified to you at the time you enter the Subscription Contract. We collect and process personal information in accordance with our Privacy Policy.',
      },
      structure: {
        title: 'Structure of this Subscription Contract',
        content: 'This Subscription Contract comprises: (a) this summary page; (b) the Hire Agreement; and (c) the General Terms — the general terms and conditions that regulate the contractual relationship between AutoVibe and you, including your use of the Platform. If there is any inconsistency between the Hire Agreement and the General Terms, the terms set out in the Hire Agreement will take priority.',
      },
      section1: {
        title: '1. Glossary',
        content: 'In this Subscription Contract: (a) the plural includes the singular, the singular also includes the plural; (b) the masculine includes the feminine. Key definitions: "Account" means the User\'s online account on the Portal. "Driver" means the named person(s) identified in a signed Hire Agreement who are entitled to drive the Vehicle. "Fees" means the fees to be paid by the User to AutoVibe in relation to this Subscription Contract. "Subscription Plan" means the particular plan selected by the User to hire the Vehicle. "Minimum Term" means the minimum duration of the Subscription Contract. "Platform" means the online portal made available by AutoVibe at https://autovibe.es. "Vehicle" means the vehicle provided pursuant to this Subscription Contract. "Territory" means mainland Spain, not including islands.',
      },
      section2: {
        title: '2. Contractual process',
        content: 'The User may open an Account on the Platform and these General Terms shall apply to the User\'s use of their Account. Once the User has opened their Account, they may browse the available Subscription Plans. If the User decides to choose a Subscription Plan, they will be prompted to complete the Registration Process by providing the information requested by AutoVibe, including copies of the driving licence, information about the preferred Payment Method and other documentation. If AutoVibe determines that the User has not met AutoVibe\'s requirements, AutoVibe may reject the application. After selecting a Subscription Plan and completing the Registration Process, AutoVibe will send the User a copy of the Subscription Contract. Once the Hire Agreement has been digitally signed, the Subscription Contract is a legally binding contract.',
      },
      section3: {
        title: '3. Commencement and duration',
        content: 'The Subscription Contract starts on the date the User electronically signs and shall remain in force for the duration of the Minimum Term and any renewal. The Minimum Term starts on the date the Vehicle is delivered. After the Minimum Term has expired, the Subscription Contract will automatically renew on a monthly basis unless the User opts out. Cooling off period: The User may cancel the Rental Contract free of charge for a period of 14 calendar days from the date of conclusion of the contract. Early termination: In the event of cancellation before the end of the contracted or renewed Minimum Term, the User will be charged the corresponding penalties as set out in the contract. AutoVibe may cancel the Contract at any time if the User or any Driver does not comply with the terms.',
      },
      section4: {
        title: '4. Territory',
        content: 'The Territory applicable to the Subscription Contract is mainland Spain, not including islands. This means that the Vehicle may only be driven in mainland Spain and not outside of it without the prior permission of AutoVibe. AutoVibe and the User may agree to add further countries within Europe to the Territory (depending on the Subscription Plan and provided you do not take the Vehicle on a boat). If the User wishes to extend the Territory, it must contact AutoVibe, specifying the additional countries and the departure and return dates.',
      },
      section5: {
        title: '5. Drivers',
        content: 'The right to drive a Vehicle is solely and exclusively limited to Drivers named on the Subscription Contract. All Drivers are required to: (i) be at least 25 years old on the date of the Subscription Contract; and (ii) have a full (not provisional) valid driving licence which has been held for at least two (2) years. The User may designate a main Driver and up to four (4) additional Drivers. The User remains wholly responsible and liable for each Driver\'s compliance with the Subscription Contract.',
      },
      section6: {
        title: '6. Driving licences',
        content: 'AutoVibe accepts driving licences as described in our FAQs. Certain Vehicle models may require a higher age or longer period of prior driving experience.',
      },
      section7: {
        title: '7. Insurance',
        content: 'Where a Subscription Plan includes Vehicle insurance and roadside assistance, these are included as part of the Fees. The User shall immediately inform AutoVibe if any of the answers to any of the Insurance Requirements change. AutoVibe may cancel the Subscription Contract immediately if the User or any Driver no longer meets AutoVibe\'s insurance requirements. If the Subscription Plan does not include insurance, the User must obtain their own insurance for the duration of the Subscription Contract.',
      },
      section8: {
        title: '8. Fees and payments',
        content: 'The Fees are calculated with reference to the applicable Subscription Plan and set out in the Hire Agreement. The Fees are payable on a monthly basis. The Fee includes: provision of the Vehicle, the permitted per-month mileage, maintenance and servicing, vehicle tax, technical testing of the Vehicle and customer service. The Fees are inclusive of Value Added Tax. The User is additionally responsible for: any applicable fuel and energy charges; tolls or congestion charges; insurance and roadside assistance (unless the Plan states otherwise). In the event of non-payment or late payment, the vehicle will be blocked for a period of at least forty-eight (48) hours. AutoVibe reserves the right to update the price during the life of the contract with thirty (30) days prior notice.',
      },
      section9: {
        title: '9. Vehicle details',
        content: 'AutoVibe confirms that the Vehicle shall have the same or substantially similar technical characteristics and condition to the Vehicle selected by the User. In accordance with the Privacy Policy, AutoVibe will include geolocation devices in the Vehicle.',
      },
      section10: {
        title: '10. Delivery of the vehicle',
        content: 'The costs of delivery of the Vehicle are set out in the Hire Agreement. Delivery will be made only to mainland locations in the Territory. AutoVibe reserves the right to make changes to the place or the agreed time of delivery or collection due to circumstances beyond its control. On delivery of the Vehicle, the User must identify themselves by showing their driving licence. The User must inspect the vehicle and, if the vehicle has any damage on delivery, must report this within 72 hours. Under no circumstances will AutoVibe provide a second key to the Vehicle.',
      },
      section11: {
        title: '11. User and Driver restrictions and responsibilities',
        content: 'The User must not, and must ensure Drivers do not: drive the Vehicle on unauthorised or unpaved roads; drive in disregard of speed limits or traffic signs; transport more people than the Vehicle\'s capacity allows; assign, sublet, rent, mortgage, pledge, sell or transfer the Vehicle; carry passengers for commercial purposes; transport drugs, toxic or inflammable substances; drive under the influence of alcohol or drugs; manipulate the mileage clock; use the Vehicle for races or competitions; modify any technical characteristics of the Vehicle; smoke inside the Vehicle. The User must comply with applicable laws, make required payments, protect the Vehicle from unauthorized use or theft, and maintain the Vehicle in good condition.',
      },
      section12: {
        title: '12. Incidents and replacement vehicle',
        content: 'Any Incident must be reported to AutoVibe within 48 hours. The User must also inform the police of each Incident. The police should be contacted immediately if an Incident involves any crime or injury to any person. If the User does not give prompt notice of the Incident, the insurance may not be valid. If there are 3 or more Incidents during the Subscription Contract, AutoVibe may immediately terminate the Contract.',
      },
      section13: {
        title: '13. General provisions',
        content: 'Force Majeure: AutoVibe is not responsible for any acts, omissions or losses which are caused by factors outside its reasonable control. Waiver: If AutoVibe does not enforce any of its rights at the time they arise, it may choose to exercise that right at a later date. Severable provisions: If any provision of the Subscription Contract is found to be unenforceable, all other provisions shall remain unaffected. No assignment: The User may not assign to third parties the rights and obligations arising from the Subscription Contract without the express written authorisation of AutoVibe. This Subscription Contract is governed by Spanish law. Any dispute between AutoVibe and the User will be dealt with by the competent courts in Valencia, Spain. If you have any questions or experience any Incident, please get in touch with us at ceo@autovibe.es.',
      },
      lastUpdate: 'Last update',
    },
  },
  uk: {
    // Header
    header: {
      inicio: 'Головна',
      suscripcion: 'Підписка',
      compra: 'Продаж',
      empresas: 'Для бізнесу',
      elClub: 'Клуб',
      llamaMe: 'Зателефонуй!',
      miCuenta: 'Мій акаунт',
    },
    callbackRequest: {
      title: 'Запросити дзвінок',
      name: "Ім'я",
      message: 'Повідомлення',
      phone: 'Ваш телефон',
      submit: 'Надіслати заявку',
      sending: 'Надсилаємо...',
      successMessage: 'Надіслано! Ми передзвонимо найближчим часом.',
      close: 'Закрити',
    },
    // Home page
    home: {
      hero: {
        title: 'Підписка на автомобіль без клопоту.',
        subtitle: 'Твій автомобіль, твої правила. Для тебе або твого бізнесу.',
        verCoches: 'Переглянути автомобілі!',
      },
      featuredCars: {
        title: 'Найпопулярніші, доступні зараз',
        verMas: 'Ще >',
        noCars: 'Наразі автомобілі недоступні.',
      },
      carsForSale: {
        title: 'Автомобілі на продаж',
        verMas: 'Ще >',
      },
      shortTermRental: {
        title: 'Оренда на короткий термін',
        verMas: 'Ще >',
      },
      featureCardsMain: {
        card1: { title: 'Ти вирішуєш, як довго', description: 'Від 1 місяця до 3 років. Без зв\'язків, без клопоту.' },
        card2: { title: 'Твоя наступна тачка чекає', description: 'Нові та вживані, малий пробіг, багато варіантів.' },
        card3: { title: 'Приєднуйся до Клубу!', description: 'Де керувати без обмежень — норма.' },
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Твій контракт закінчується — у тебе є 4 опції',
      options: {
        option1: {
          title: 'Повернення',
          description:
            'Ти привозиш, ми закриваємо все, і ти йдеш. Нуль комісій, нуль ускладнень.',
        },
        option2: {
          title: 'Зміна або продовження авто',
          description:
            'Візьми інший автомобіль з нашого парку або залишся ще на кілька місяців з тим, що маєш. Ти вирішуєш.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Налаштуй свій план оплати та купи автомобіль за залишковою вартістю, яку ми домовилися з самого початку.',
        },
        option4: {
          title: 'Викуп без відсотків',
          description:
            'Скористайся спеціальною ціною свого контракту (без відсотків), і автомобіль вже твій.',
        },
      },
    },
    // FAQ
    faq: {
      title: 'Є питання?',
      questions: {
        q1: {
          question: 'Що таке підписка на автомобіль?',
          answer:
            'Підписка на автомобіль — це новий спосіб володіння автомобілем. Покупка автомобіля — це минуле, не лише через всі пов’язані витрати. З AutoVibe у тебе є автомобіль, який ти хочеш, на той час, який ти хочеш. Все включено в твою щомісячну підписку. Тож тобі потрібно лише піклуватися про водіння. Ми піклуємося про всі твої витрати, крім палива.',
        },
        q2: {
          question: 'Що включає моя щомісячна плата?',
          answer:
            'З AutoVibe твоя підписка на автомобіль повністю покрита, щоб ти міг насолоджуватися нею на повну. Все включено в ту саму плату: обслуговування, податки та техогляд. Тобі потрібно лише піклуватися про паливо!',
        },
        q3: {
          question: 'Як довго я маю залишатися мінімум?',
          answer:
            'Тривалість твого контракту з AutoVibe гнучка і залежить від автомобіля та типу підписки, яку ти обрав. Мінімальна тривалість твоєї підписки відповідає тій, що вказана в твоєму контракті, і вказує, як довго ти маєш залишатися з нами.',
        },
        q4: {
          question: 'Чим це відрізняється від оренди?',
          answer:
            'Ключова відмінність — гнучкість. Оренда зобов’язує тебе підписувати багаторічні контракти з фіксованими умовами та без можливості змін. Підписка працює помісячно, без довгих зв’язків, і ти можеш адаптувати послугу до того, що тобі потрібно в будь-який момент (пробіг, тривалість, навіть зміна автомобіля).',
        },
      },
    },
    // How it works (Como funciona)
    howItWorks: {
      title: 'Як це працює',
      step1: { title: 'Замов свій автомобіль', description: 'Обери будь-який з нашого каталогу або скажи, яку модель шукаєш. Твій персональний менеджер передзвонить менш ніж за 5 хвилин.' },
      step2: { title: 'Отримай пропозицію', description: 'Надсилаємо тобі чіткий бюджет з двома опціями — Smart Leasing та Drivovo Subscription — і ти вирішуєш, що підходить краще.' },
      step3: { title: 'Підпиши онлайн', description: 'Усе підписується в інтернеті електронним підписом. Жодного папероволоки, ніяких сюрпризів з комісіями, не виходячи з дому.' },
      step4: { title: 'В дорогу', description: 'Твій автомобіль чекає, коли він тобі знадобиться. Вже з реєстрацією, страхуванням і готовий до поїздок.' },
    },
    // Footer
    footer: {
      legal: {
        terminos: 'Умови та положення',
        privacidad: 'Політика конфіденційності',
        cookies: 'Політика cookie',
        condiciones: 'Умови платформи',
      },
      ciudades: {
        title: 'Міста',
        valencia: 'Валенсія',
        barcelona: 'Барселона',
        madrid: 'Мадрид',
        marbella: 'Марбелья',
      },
      conocenos: {
        title: 'Познайомся з нами',
        sitemap: 'Карта сайту',
        trabaja: 'Працюй з нами',
        compramos: 'Ми купуємо твій автомобіль',
        opiniones: 'Відгуки клієнтів',
      },
      contactanos: {
        title: 'Зв\'яжіться з нами',
        horario: 'Пн-Пт 9:00 – 18:00',
        atencion: 'Служба підтримки: 613 295 610',
        nuevos: 'Нові клієнти: 611 713 755',
        asistencia: 'Допомога при аварії',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 відгуки',
        title: 'Одна плата, все включено, нуль першого внеску',
        subtitle: 'Твоя підписка покриває повне страхування, обслуговування, допомогу, техогляд та податки. Ти просто їздиш.',
        permanenciaLarga: 'Довгострокова оренда',
        permanenciaLargaDesc: '12, 24, 36 місяців',
        permanenciaCorta: 'Короткострокова оренда',
        permanenciaCortaDesc: '1-24 міс.',
        comprarCoche: 'Купити автомобіль',
        comprarCocheDesc: 'Наші вживані автомобілі',
        vamos: 'Поїхали!!!',
        cuotaMensual: 'Щомісячна плата',
        ordenarPor: 'Сортувати за:',
        precio: 'Ціною',
        nombre: 'Назвою',
        noCoches: 'Немає автомобілів, доступних з обраними фільтрами.',
      },
      compra: {
        reviews: '104 відгуки',
        title: 'Купи свій наступний автомобіль з гарантіями',
        subtitle: 'Вживані автомобілі готові до покупки. Гарантія включена, доставка куди завгодно та найкращі опції фінансування.',
        permanenciaLarga: 'Довгострокова оренда',
        permanenciaLargaDesc: '12, 24, 36 місяців',
        permanenciaCorta: 'Короткострокова оренда',
        permanenciaCortaDesc: '1-24 міс.',
        comprarCoche: 'Купити автомобіль',
        comprarCocheDesc: 'Наші вживані автомобілі',
        vamos: 'Поїхали!!!',
        cuotaMensual: 'Щомісячна плата',
        ordenarPor: 'Сортувати за:',
        precio: 'Ціною',
        nombre: 'Назвою',
        noCoches: 'Немає автомобілів, доступних з обраними фільтрами.',
      },
      empresas: {
        reviews: '104 відгуки',
        title: 'Гнучка оренда для бізнесу',
        subtitle: 'Рішення для бізнес-мобільності з контрактами від 1 до 12 місяців. Без довгострокових зобов\'язань, адаптовано до твоїх потреб.',
        permanenciaLarga: 'Довгострокова оренда',
        permanenciaLargaDesc: '12, 24, 36 місяців',
        permanenciaCorta: 'Короткострокова оренда',
        permanenciaCortaDesc: '1-24 міс.',
        comprarCoche: 'Купити автомобіль',
        comprarCocheDesc: 'Наші вживані автомобілі',
        vamos: 'Поїхали!!!',
        cuotaMensual: 'Щомісячна плата',
        ordenarPor: 'Сортувати за:',
        precio: 'Ціною',
        nombre: 'Назвою',
        noCoches: 'Немає автомобілів, доступних з обраними фільтрами.',
      },
      elClub: {
        hero: {
          title: 'Клуб',
          subtitle: 'Ми робимо те, що нас об\'єднує: заробляємо гроші, насолоджуємося разом і живемо життям на повну.',
          button: 'Приєднайся до Клубу!',
        },
        returns: {
          title: 'Стабільна прибутковість з AutoVibe',
          items: {
            item1: 'Прибутковість 10-12% річних у USD або EUR для інвестицій від 10 000 $.',
            item2: 'Максимальна прозорість: доступ до періодичних звітів про флот та фінансові результати.',
            item3: 'Ти фінансуєш розширення: твій капітал спрямовується на розвиток сервісу та автопарку.',
            item4: 'Періодичні виплати: дивіденди надходять щомісяця на твій рахунок.',
          },
        },
        benefits: {
          title: 'Клуб – Що ти отримуєш крім автомобіля',
          items: {
            item1: 'Події лише для членів: зустрічі, прем\'єри моделей та VIP-тести, які не відкриті для всіх.',
            item2: 'Круті знижки: спеціальні ціни в ресторанах, спортзалах, коучингу та додаткових послугах AutoVibe.',
            item3: 'Приведи друзів і отримай гроші: отримуй від 500 до 2000€ за кожного друга, який приєднається.',
          },
        },
      },
    },
    // Comparison Table
    comparison: {
      title: 'Чому ми кращі (у всьому)',
      caracteristicas: 'Характеристики',
      leasing: 'Лізинг',
      alquiler: 'Оренда',
      suscripcion: 'Підписка',
      autovibe: 'AutoVibe',
      features: {
        eligeTiempo: 'Визнач тривалість підписки',
        ajustaKm: 'Обери бажаний кілометраж',
        llevamosCasa: 'Доставка на дім',
        todoOnline: 'Все онлайн, без паперів',
        ayudamosAccidente: 'Допомога при аварійних ситуаціях',
        cocheSustitucion: 'Безкоштовна заміна авто',
        sinEntrada: 'Без першого внеску та депозиту',
        mantenimiento: 'Включені всі податки, обслуговування та техогляд',
        seguro: 'Повне страхування',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'місяців мінімальної оренди',
      cuotaMensualDe: 'щомісячна плата',
      cuotaMensualDeShort: 'щомісячно',
      desde: 'від',
      ivaIncl: 'з ПДВ',
      continuar: 'Продовжити',
      configuraSuscripcion: 'Налаштуй свою підписку',
      permanencia: 'Термін оренди',
      permanenciaMinimaLabel: 'мінімальна оренда',
      mes: 'місяць',
      meses: 'місяців',
      mesesDisponibles: 'місяців доступно',
      noDisponible: 'Недоступно',
      personalizaKilometraje: 'Персоналізуй свій пробіг',
      kmMesIncluido: 'км/місяць включено',
      resumenSuscripcion: 'Резюме підписки',
      precioMes: 'Ціна на місяць',
      descuentoOferta: 'Знижка за пропозицією',
      kmAdicionales: 'Додаткові км',
      cuotaMensual: 'Щомісячна плата',
      ivaIncluido: 'з ПДВ',
      masIva: '+21% ПДВ',
      iva21Percent: '21% ПДВ',
      sobreEsteCoche: 'Про цей автомобіль',
      caracteristicas: 'Характеристики',
      nombre: 'Ім\'я',
      telefono: 'Телефон',
      email: 'Email',
      opcional: '(необов\'язково)',
      enviar: 'Відправити',
      enviando: 'Відправка...',
      contactoFormulario: 'Заповніть свої дані',
      graciasEnvio: 'Дякуємо! Ми з вами зв\'яжемося найближчим часом.',
      graciasTitle: 'Дякуємо!',
      graciasSubtitle: 'Ми з вами зв\'яжемося найближчим часом.',
      mensajeEnvioExitoso: 'Ми з вами зв\'яжемося найближчим часом.',
      // Empresas (rental)
      configuraRenta: 'Налаштуй свою оренду',
      duracionRenta: 'Тривалість оренди',
      resumenRenta: 'Резюме оренди',
      // Compra (purchase)
      configuraCompra: 'Налаштуй свою покупку',
      opcionCompra: 'Опція покупки',
      plazoFinanciacion: 'Термін фінансування',
      resumenCompra: 'Резюме покупки',
      pagoUnico: 'Одноразовий платіж',
      financiacion: 'Розстрочка',
      precioTotal: 'Загальна ціна',
      duracion: 'Тривалість',
      total: 'Всього',
    },
    cookies: {
      title: 'Ми використовуємо cookies',
      description: 'Ми використовуємо cookies для покращення вашого досвіду та аналізу трафіку сайту. Ви можете прийняти всі або лише необхідні.',
      showDetails: 'Детальніше',
      hideDetails: 'Сховати деталі',
      essential: 'Необхідні',
      essentialDesc: 'Потрібні для роботи сайту. Не можна вимкнути.',
      nonEssential: 'Аналітика та маркетинг',
      nonEssentialDesc: 'Допомагають нам зрозуміти, як ви використовуєте сайт, та показувати релевантну рекламу.',
      optional: 'Опціонально',
      acceptAll: 'Прийняти всі',
      essentialOnly: 'Лише необхідні',
      privacyLink: 'Політика конфіденційності',
      termsLink: 'Умови та положення',
    },
    privacyPolicy: {
      title: 'Політика конфіденційності',
      section1: {
        title: '1. Хто ми?',
        intro: 'Ми — AUTOVIBESPAIN S.L. .',
        addressLabel: 'Адреса',
        emailLabel: 'Електронна пошта',
      },
      section2: {
        title: '2. Що робить ця політика конфіденційності?',
        content: 'Ця Політика конфіденційності застосовується до персональних даних, які ми збираємо та обробляємо через використання вами https://autovibe.es, додатку AutoVibe, будь-яких інших онлайн-каналів, якими керує AutoVibe (разом — "Ресурси"), та будь-яких ваших взаємодій з нами. До вас будуть звертатися як "ви", "користувач" або "користувачі" протягом цієї Політики конфіденційності. Термін "Послуги" означає надання послуг підписки на транспортні засоби компанією AutoVibe користувачу. Будь ласка, уважно прочитайте цю Політику конфіденційності, яка визначає, які персональні дані ми збираємо, чому і як ми обробляємо ваші персональні дані та які ваші права щодо ваших персональних даних.',
      },
      section3: {
        title: '3. Обов\'язкове надання даних',
        content: 'Дані, запитувані AutoVibe через будь-які надані канали, є, як правило, обов\'язковими (якщо не зазначено інше в обов\'язковому полі) для виконання цілей, для яких вони збираються. Тому, якщо вони не надані або надані некоректно, ці запити не можуть бути виконані, і ви можете не мати змоги користуватися Послугами, хоча можете вільно переглядати вміст Веб-сайту.',
      },
      section4: {
        title: '4. З якою метою AutoVibe обробляє дані користувача?',
        purpose1: {
          title: '4.1 Надання замовлених вами Послуг',
          content: 'AutoVibe збирає та використовує вашу інформацію для управління використанням вами Послуг та відносинами між нами, включаючи: управління вашими замовленнями та підписками; доставку замовлених Послуг; зв\'язок з вами для допомоги у завершенні замовлення або використанні процесу оплати; зв\'язок для організації доставки замовленого транспортного засобу; призупинення надання Послуг та/або іммобілізацію транспортного засобу відповідно до Умов використання; зв\'язок для підтримки клієнтів та утримання клієнтів.',
        },
        purpose2: {
          title: '4.2 Аналіз ризиків',
          content: 'AutoVibe здійснює оцінку економічних ризиків договору, запитаного Користувачем, шляхом обробки наданих даних. З цією метою будуть проведені необхідні консультації з третіми сторонами, включаючи кредитні інформаційні системи, системи виявлення шахрайства та інформаційні системи, пов\'язані з відмиванням грошей. Ця оцінка ризиків базується на об\'єктивних критеріях, що дозволяють зробити висновок про здатність особи виконувати фінансові зобов\'язання.',
        },
        purpose3: {
          title: '4.3 Відповіді на запитання',
          content: 'Якщо ви зверненетеся з будь-яким запитанням, ваші дані будуть оброблені для управління, обробки та відповіді на ваші запити. Правова основа — наш законний інтерес забезпечити можливість використання вами Ресурсів, Веб-сайту та Послуг.',
        },
        purpose4: {
          title: '4.4 Опитування задоволеності та внутрішні звіти',
          content: 'З цією метою будуть проведені: опитування користувачів щодо якості та їхньої задоволеності товарами або Послугами, наданими AutoVibe; аналіз та підготовка внутрішньої статистики та звітів про ступінь задоволеності користувачів. Вся обробка базується на нашому законному інтересі.',
        },
        purpose5: {
          title: '4.5 Надсилання персоналізованих маркетингових повідомлень',
          content: 'AutoVibe надсилатиме комерційні та рекламні повідомлення через електронну пошту, текстові повідомлення та телефонні дзвінки, пов\'язані з Послугами. Ви можете відмовитися від маркетингових повідомлень у будь-який час, зв\'язавшись з ceo@autovibe.es.',
        },
      },
      section5: {
        title: '5. Категорії оброблюваних персональних даних',
        content: 'A. Дані, зібрані безпосередньо: ідентифікаційні дані (ім\'я, водійське посвідчення); контактні дані (електронна пошта, номер телефону); дані особистих характеристик (вік, дата народження, громадянство, адреса); дані транзакцій; дані геолокації; телематичні дані. B. Дані, зібрані через третіх осіб: кредитні довідкові та системи перевірки особи. C. Дані, зібрані автоматично: технічна інформація (IP-адреса, тип браузера, операційна система); інформація про взаємодію (URL, потік кліків, час відповіді). Ми використовуємо файли cookie та подібні технології.',
      },
      section6: {
        title: '6. Кому ми передаємо ваші персональні дані?',
        content: 'Дані користувача можуть бути передані: державним органам та правоохоронним органам; страховим компаніям; нашим постачальникам послуг; потенційним інвесторам або покупцям/продавцям бізнесу; нашим аудиторам та юридичним радникам; компаніям бізнес-групи AutoVibe; нашим партнерам (власникам орендованих транспортних засобів). AutoVibe має суворі процедури відбору постачальників.',
      },
      section7: {
        title: '7. Міжнародна передача даних',
        content: 'AutoVibe не планує передавати дані за межі Європейського економічного простору (ЄЕП). Однак, якщо ми вирішимо передати дані третім сторонам за межами ЄЕП, ми забезпечимо відповідність чинним нормам захисту даних, зокрема шляхом підписання стандартних договірних положень, затверджених Європейською Комісією.',
      },
      section8: {
        title: '8. Зберігання даних',
        content: 'Дані користувача зберігатимуться протягом наступних періодів: дані для завершення покупки — протягом договірних відносин та після їх завершення протягом строку позовної давності; дані з контактних форм — протягом необхідного періоду для обробки запиту; дані геолокації транспортного засобу — 6 місяців після закінчення підписки; дані для комерційних повідомлень — до відкликання згоди користувачем.',
      },
      section9: {
        title: '9. Відповідальність користувача',
        content: 'Користувач підтверджує, що йому/їй виповнилося вісімнадцять (18) років і що дані, надані AutoVibe, є правдивими, точними, повними та актуальними. Користувач несе відповідальність за точність усіх наданих даних та зобов\'язується підтримувати надану інформацію в актуальному стані.',
      },
      section10: {
        title: '10. Здійснення прав',
        content: 'Ви можете надіслати листа до AutoVibe за адресою, вказаною в заголовку цієї Політики конфіденційності, або надіслати нам електронного листа на адресу ceo@autovibe.es у будь-який час та безкоштовно, щоб: відкликати надані згоди; отримати підтвердження обробки персональних даних; отримати доступ до персональних даних; виправити неточні або неповні дані; запросити видалення даних; отримати обмеження обробки; запросити перенесення даних; заперечити проти автоматизованого прийняття рішень. Ви можете подати скаргу до Іспанського агентства захисту даних (AEPD) на www.aepd.es.',
      },
      section11: {
        title: '11. Заходи безпеки',
        content: 'AutoVibe обробляє дані користувача завжди абсолютно конфіденційно та зберігає обов\'язковий обов\'язок конфіденційності, вживаючи необхідні технічні та організаційні заходи для гарантування безпеки ваших даних та запобігання їх зміні, втраті, обробці або несанкціонованому доступу.',
      },
      section12: {
        title: '12. Зміни',
        content: 'AutoVibe залишає за собою право переглядати свою Політику конфіденційності в будь-який час, про що буде повідомлено користувачам. З цієї причини, будь ласка, регулярно перевіряйте цю заяву про конфіденційність.',
      },
      lastUpdate: 'Останнє оновлення',
    },
    termsConditions: {
      title: 'Загальні умови та положення',
      aboutUs: {
        title: 'Про нас',
        intro: 'Ми — AUTOVIBESPAIN S.L. .',
        addressLabel: 'Адреса',
        emailLabel: 'Електронна пошта',
      },
      overview: {
        title: 'Огляд нашого сервісу',
        content: 'AutoVibe надає послуги підписки на транспортні засоби через Плани підписки, деталі яких доступні на Платформі. Користувачі можуть орендувати Транспортний засіб, обравши План підписки та, за умови завершення AutoVibe певних перевірок, погодившись як з Угодою про оренду, так і з цими Загальними умовами (разом — "Договір підписки"). Тарифи, що підлягають сплаті, будуть ті, що повідомлені вам на момент укладення Договору підписки. Ми збираємо та обробляємо персональну інформацію відповідно до нашої Політики конфіденційності.',
      },
      structure: {
        title: 'Структура цього Договору підписки',
        content: 'Цей Договір підписки включає: (a) цю сторінку з резюме; (b) Угоду про оренду; та (c) Загальні умови. У разі невідповідності між Угодою про оренду та Загальними умовами пріоритет мають положення Угоди про оренду.',
      },
      section1: {
        title: '1. Глосарій',
        content: 'У цьому Договорі підписки: (a) множина включає однину і навпаки; (b) чоловічий рід включає жіночий. Ключові визначення: "Обліковий запис" — онлайн-акаунт Користувача на Порталі. "Водій" — особа(и), зазначена(і) в підписаній Угоді про оренду. "Тарифи" — плата Користувача AutoVibe. "План підписки" — обраний план оренди Транспортного засобу. "Мінімальний термін" — мінімальна тривалість Договору. "Платформа" — онлайн-портал AutoVibe за адресою https://autovibe.es. "Транспортний засіб" — автомобіль за цим Договором. "Територія" — материкова Іспанія, не включаючи острови.',
      },
      section2: {
        title: '2. Договірний процес',
        content: 'Користувач може відкрити Обліковий запис на Платформі. Після відкриття Облікового запису можна переглядати доступні Плани підписки. Для вибору Плану підписки необхідно завершити Процес реєстрації, надавши запитувану інформацію, включаючи копії водійського посвідчення та інформацію про спосіб оплати. AutoVibe може відхилити заявку, якщо вимоги не виконані. Після вибору Плану та завершення Реєстрації AutoVibe надішле копію Договору підписки. Після цифрового підписання Договір стає юридично обов\'язковим.',
      },
      section3: {
        title: '3. Початок та тривалість',
        content: 'Договір підписки починається з дати електронного підписання та діє протягом Мінімального терміну та будь-якого продовження. Мінімальний термін починається з дати доставки Транспортного засобу. Після закінчення Мінімального терміну Договір автоматично продовжується щомісяця. Період відмови: 14 календарних днів з дати укладення договору. Дострокове розірвання: Користувач сплачує відповідні штрафи згідно з договором. AutoVibe може розірвати Договір, якщо Користувач або Водій не дотримується умов.',
      },
      section4: {
        title: '4. Територія',
        content: 'Територія Договору підписки — материкова Іспанія, не включаючи острови. Транспортний засіб може використовуватися лише на материковій Іспанії без попереднього дозволу AutoVibe. AutoVibe та Користувач можуть домовитися про додавання країн у межах Європи до Території.',
      },
      section5: {
        title: '5. Водії',
        content: 'Право керувати Транспортним засобом обмежене виключно Водіями, зазначеними в Договорі. Усі Водії повинні: (i) бути віком не менше 25 років; та (ii) мати повне дійсне водійське посвідчення, видане не менше ніж два (2) роки тому. Користувач може призначити основного Водія та до чотирьох (4) додаткових Водіїв. Користувач несе повну відповідальність за дотримання кожним Водієм умов Договору.',
      },
      section6: {
        title: '6. Водійські посвідчення',
        content: 'AutoVibe приймає водійські посвідчення відповідно до наших FAQ. Деякі моделі можуть вимагати вищого віку або довшого стажу водіння.',
      },
      section7: {
        title: '7. Страхування',
        content: 'Якщо План підписки включає страхування та допомогу на дорозі, вони входять до Тарифу. Користувач повинен негайно повідомити AutoVibe про будь-які зміни у відповідях на Вимоги страхування. AutoVibe може негайно розірвати Договір, якщо Користувач або Водій більше не відповідає вимогам. Якщо План не включає страхування, Користувач повинен оформити власне страхування.',
      },
      section8: {
        title: '8. Тарифи та оплата',
        content: 'Тарифи розраховуються відповідно до Плану підписки. Оплата здійснюється щомісяця. Тариф включає: надання Транспортного засобу, дозволений місячний пробіг, технічне обслуговування, транспортний податок, технічний огляд та обслуговування клієнтів. Тарифи включають ПДВ. Користувач додатково відповідає за: паливо та енергію; дорожні збори; страхування (якщо не включено в План). У разі несплати транспортний засіб блокується мінімум на 48 годин. AutoVibe залишає за собою право оновлювати ціну з попередженням за 30 днів.',
      },
      section9: {
        title: '9. Деталі транспортного засобу',
        content: 'AutoVibe підтверджує, що Транспортний засіб матиме такі ж або подібні технічні характеристики та стан, як обраний Користувачем. Відповідно до Політики конфіденційності, AutoVibe встановлює пристрої геолокації в Транспортному засобі.',
      },
      section10: {
        title: '10. Доставка транспортного засобу',
        content: 'Вартість доставки зазначена в Угоді про оренду. Доставка здійснюється лише на материкову частину Території. AutoVibe залишає за собою право змінювати місце або час доставки через обставини поза контролем. При доставці Користувач повинен пред\'явити водійське посвідчення. Користувач повинен оглянути транспортний засіб та повідомити про пошкодження протягом 72 годин. AutoVibe не надає другий ключ.',
      },
      section11: {
        title: '11. Обмеження та обов\'язки користувача та водія',
        content: 'Користувач не повинен та повинен забезпечити, щоб Водії не: їздили на неавторизованих або ґрунтових дорогах; перевищували обмеження швидкості; перевозили більше пасажирів, ніж дозволено; передавали, здавали в суборенду або продавали Транспортний засіб; перевозили пасажирів з комерційною метою; перевозили наркотики або небезпечні речовини; керували під впливом алкоголю або наркотиків; маніпулювали одометром; використовували для перегонів; модифікували технічні характеристики; палили в Транспортному засобі. Користувач повинен дотримуватися законодавства, здійснювати необхідні платежі та захищати Транспортний засіб.',
      },
      section12: {
        title: '12. Інциденти та заміна транспортного засобу',
        content: 'Про будь-який Інцидент необхідно повідомити AutoVibe протягом 48 годин. Користувач також повинен повідомити поліцію. Якщо Користувач не повідомить своєчасно, страхування може бути недійсним. При 3 або більше Інцидентах AutoVibe може негайно розірвати Договір.',
      },
      section13: {
        title: '13. Загальні положення',
        content: 'Форс-мажор: AutoVibe не несе відповідальності за обставини поза розумним контролем. Відмова: невикористання прав не означає відмову від них. Подільність: недійсність одного положення не впливає на інші. Заборона цесії: Користувач не може передавати права без письмової згоди AutoVibe. Цей Договір регулюється іспанським законодавством. Спори вирішуються компетентними судами Валенсії, Іспанія. Зв\'яжіться з нами: ceo@autovibe.es.',
      },
      lastUpdate: 'Останнє оновлення',
    },
  },
  ru: {
    // Header
    header: {
      inicio: 'Главная',
      suscripcion: 'Подписка',
      compra: 'Продажа',
      empresas: 'Для Бизнеса',
      elClub: 'Клуб',
      llamaMe: 'Перезвоните мне!',
      miCuenta: 'Мой аккаунт',
    },
    callbackRequest: {
      title: 'Заказать звонок',
      name: 'Имя',
      message: 'Сообщение',
      phone: 'Ваш телефон',
      submit: 'Отправить заявку',
      sending: 'Отправляем...',
      successMessage: 'Отправлено! Мы перезвоним в ближайшее время.',
      close: 'Закрыть',
    },
    // Home page
    home: {
      hero: {
        title: 'Подписка на автомобиль без хлопот.',
        subtitle: 'Твой автомобиль, твои правила. Для тебя или твоего бизнеса.',
        verCoches: 'Посмотреть автомобили!',
      },
      featuredCars: {
        title: 'Самые востребованные, доступные сейчас',
        verMas: 'Еще >',
        noCars: 'Автомобили недоступны в данный момент.',
      },
      carsForSale: {
        title: 'Автомобили на продажу',
        verMas: 'Еще >',
      },
      shortTermRental: {
        title: 'Аренда на короткий срок',
        verMas: 'Еще >',
      },
      featureCardsMain: {
        card1: { title: 'Ты решаешь, как долго', description: 'От 1 месяца до 3 лет. Без обязательств, без лишнего.' },
        card2: { title: 'Твоя следующая тачка ждёт', description: 'Новые и с пробегом, мало км, много вариантов.' },
        card3: { title: 'Присоединяйся к Клубу!', description: 'Где ездить без ограничений — норма.' },
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Твой контракт заканчивается — у тебя есть 4 опции',
      options: {
        option1: {
          title: 'Возврат',
          description:
            'Ты привозишь, мы закрываем всё, и ты уходишь. Ноль комиссий, ноль осложнений.',
        },
        option2: {
          title: 'Смена или продление авто',
          description:
            'Возьми другой автомобиль из нашего парка или останься еще на несколько месяцев с тем, что есть. Ты решаешь.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Настрой свой план оплаты и купи автомобиль по остаточной стоимости, которую мы договорились с самого начала.',
        },
        option4: {
          title: 'Выкуп без процентов',
          description:
            'Воспользуйся специальной ценой своего контракта (без процентов), и автомобиль уже твой.',
        },
      },
    },
    // FAQ
    faq: {
      title: 'Есть вопросы?',
      questions: {
        q1: {
          question: 'Что такое подписка на автомобиль?',
          answer:
            'Подписка на автомобиль — это новый способ владения автомобилем. Покупка автомобиля — это прошлое, не в последнюю очередь из-за всех связанных расходов. С AutoVibe у тебя есть автомобиль, который ты хочешь, на то время, которое ты хочешь. Всё включено в твою ежемесячную подписку. Так что тебе нужно только заботиться о вождении. Мы заботимся обо всех твоих расходах, кроме топлива.',
        },
        q2: {
          question: 'Что включает моя ежемесячная плата?',
          answer:
            'С AutoVibe твоя подписка на автомобиль полностью покрыта, чтобы ты мог наслаждаться ею в полной мере. Всё включено в ту же плату: обслуживание, налоги и техосмотр. Тебе нужно только заботиться о топливе!',
        },
        q3: {
          question: 'Как долго я должен оставаться минимум?',
          answer:
            'Продолжительность твоего контракта с AutoVibe гибкая и зависит от автомобиля и типа подписки, которую ты выбрал. Минимальная продолжительность твоей подписки соответствует указанной в твоём контракте и указывает, как долго ты должен оставаться с нами.',
        },
        q4: {
          question: 'Чем это отличается от аренды?',
          answer:
            'Ключевое отличие — гибкость. Аренда обязывает тебя подписывать многолетние контракты с фиксированными условиями и без возможности изменений. Подписка работает помесячно, без долгих связей, и ты можешь адаптировать услугу к тому, что тебе нужно в любой момент (пробег, продолжительность, даже смена автомобиля).',
        },
      },
    },
    // How it works (Como funciona)
    howItWorks: {
      title: 'Как это работает',
      step1: { title: 'Закажи свой автомобиль', description: 'Выбери любой из нашего каталога или скажи, какую модель ищешь. Твой персональный менеджер перезвонит менее чем за 5 минут.' },
      step2: { title: 'Получи предложение', description: 'Отправляем тебе понятную смету с двумя опциями — Smart Leasing и Drivovo Subscription — и ты решаешь, что подходит лучше.' },
      step3: { title: 'Подпиши онлайн', description: 'Всё подписывается в интернете электронной подписью. Никакой бумажной волокиты, никаких сюрпризов с комиссиями, не выходя из дома.' },
      step4: { title: 'В путь', description: 'Твой автомобиль ждёт, когда он тебе понадобится. Уже с регистрацией, страховкой и готов к поездкам.' },
    },
    // Footer
    footer: {
      legal: {
        terminos: 'Условия и положения',
        privacidad: 'Политика конфиденциальности',
        cookies: 'Политика cookie',
        condiciones: 'Условия платформы',
      },
      ciudades: {
        title: 'Города',
        valencia: 'Валенсия',
        barcelona: 'Барселона',
        madrid: 'Мадрид',
        marbella: 'Марбелья',
      },
      conocenos: {
        title: 'Познакомьтесь с нами',
        sitemap: 'Карта сайта',
        trabaja: 'Работайте с нами',
        compramos: 'Мы покупаем твой автомобиль',
        opiniones: 'Отзывы клиентов',
      },
      contactanos: {
        title: 'Свяжитесь с нами',
        horario: 'Пн-Пт 9:00 – 18:00',
        atencion: 'Служба поддержки: 613 295 610',
        nuevos: 'Новые клиенты: 611 713 755',
        asistencia: 'Помощь при аварии',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 отзыва',
        title: 'Одна плата, всё включено, ноль первого взноса',
        subtitle: 'Твоя подписка покрывает полное страхование, обслуживание, помощь, техосмотр и налоги. Ты просто ездишь.',
        permanenciaLarga: 'Долгосрочная аренда',
        permanenciaLargaDesc: '12, 24, 36 месяцев',
        permanenciaCorta: 'Краткосрочная аренда',
        permanenciaCortaDesc: '1-24 мес.',
        comprarCoche: 'Купить автомобиль',
        comprarCocheDesc: 'Наши подержанные автомобили',
        vamos: 'Поехали!!!',
        cuotaMensual: 'Ежемесячная плата',
        ordenarPor: 'Сортировать по:',
        precio: 'Цене',
        nombre: 'Названию',
        noCoches: 'Нет автомобилей, доступных с выбранными фильтрами.',
      },
      compra: {
        reviews: '104 отзыва',
        title: 'Купи свой следующий автомобиль с гарантиями',
        subtitle: 'Подержанные автомобили готовы к покупке. Гарантия включена, доставка куда угодно и лучшие варианты финансирования.',
        permanenciaLarga: 'Долгосрочная аренда',
        permanenciaLargaDesc: '12, 24, 36 месяцев',
        permanenciaCorta: 'Краткосрочная аренда',
        permanenciaCortaDesc: '1-24 мес.',
        comprarCoche: 'Купить автомобиль',
        comprarCocheDesc: 'Наши подержанные автомобили',
        vamos: 'Поехали!!!',
        cuotaMensual: 'Ежемесячная плата',
        ordenarPor: 'Сортировать по:',
        precio: 'Цене',
        nombre: 'Названию',
        noCoches: 'Нет автомобилей, доступных с выбранными фильтрами.',
      },
      empresas: {
        reviews: '104 отзыва',
        title: 'Гибкая аренда для бизнеса',
        subtitle: 'Решение для бизнес-мобильности с контрактами от 1 до 12 месяцев. Без долгосрочных обязательств, адаптировано к твоим потребностям.',
        permanenciaLarga: 'Долгосрочная аренда',
        permanenciaLargaDesc: '12, 24, 36 месяцев',
        permanenciaCorta: 'Краткосрочная аренда',
        permanenciaCortaDesc: '1-24 мес.',
        comprarCoche: 'Купить автомобиль',
        comprarCocheDesc: 'Наши подержанные автомобили',
        vamos: 'Поехали!!!',
        cuotaMensual: 'Ежемесячная плата',
        ordenarPor: 'Сортировать по:',
        precio: 'Цене',
        nombre: 'Названию',
        noCoches: 'Нет автомобилей, доступных с выбранными фильтрами.',
      },
      elClub: {
        hero: {
          title: 'Клуб',
          subtitle: 'Мы делаем то, что нас объединяет: зарабатываем деньги, наслаждаемся вместе и живём жизнью на полную.',
          button: 'Присоединяйся к Клубу!',
        },
        returns: {
          title: 'Стабильная прибыльность с AutoVibe',
          items: {
            item1: 'Прибыльность 10-12% годовых в USD или EUR для инвестиций от 10 000 $.',
            item2: 'Максимальная прозрачность: доступ к периодическим отчётам о флоте и финансовым результатам.',
            item3: 'Ты финансируешь расширение: твой капитал направляется на развитие сервиса и автопарка.',
            item4: 'Периодические выплаты: дивиденды поступают ежемесячно на твой счёт.',
          },
        },
        benefits: {
          title: 'Клуб – Что ты получаешь кроме автомобиля',
          items: {
            item1: 'События только для членов: встречи, премьеры моделей и VIP-тесты, которые не открыты для всех.',
            item2: 'Крутые скидки: специальные цены в ресторанах, спортзалах, коучинге и дополнительных услугах AutoVibe.',
            item3: 'Приведи друзей и получи деньги: получай от 500 до 2000€ за каждого друга, который присоединится.',
          },
        },
      },
    },
    // Comparison Table
    comparison: {
      title: 'Почему мы лучше (во всём)',
      caracteristicas: 'Характеристики',
      leasing: 'Лизинг',
      alquiler: 'Аренда',
      suscripcion: 'Подписка',
      autovibe: 'AutoVibe',
      features: {
        eligeTiempo: 'Определи продолжительность подписки',
        ajustaKm: 'Выбери желаемый километраж',
        llevamosCasa: 'Доставка на дом',
        todoOnline: 'Всё онлайн, без бумаг',
        ayudamosAccidente: 'Помощь при аварийных ситуациях',
        cocheSustitucion: 'Бесплатная подмена авто',
        sinEntrada: 'Без первого взноса и депозита',
        mantenimiento: 'Включены все налоги, обслуживание и техосмотр',
        seguro: 'Полная страховка',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'месяцев минимальной аренды',
      cuotaMensualDe: 'ежемесячная плата',
      cuotaMensualDeShort: 'ежемесячно',
      desde: 'от',
      ivaIncl: 'с НДС',
      continuar: 'Продолжить',
      configuraSuscripcion: 'Настрой свою подписку',
      permanencia: 'Срок аренды',
      permanenciaMinimaLabel: 'минимальная аренда',
      mes: 'месяц',
      meses: 'месяцев',
      mesesDisponibles: 'месяцев доступно',
      noDisponible: 'Недоступно',
      personalizaKilometraje: 'Персонализируй свой пробег',
      kmMesIncluido: 'км/месяц включено',
      resumenSuscripcion: 'Резюме подписки',
      precioMes: 'Цена на месяц',
      descuentoOferta: 'Скидка по предложению',
      kmAdicionales: 'Дополнительные км',
      cuotaMensual: 'Ежемесячная плата',
      ivaIncluido: 'с НДС',
      masIva: '+21% НДС',
      iva21Percent: '21% НДС',
      sobreEsteCoche: 'Об этом автомобиле',
      caracteristicas: 'Характеристики',
      nombre: 'Имя',
      telefono: 'Телефон',
      email: 'Email',
      opcional: '(необязательно)',
      enviar: 'Отправить',
      enviando: 'Отправка...',
      contactoFormulario: 'Заполните свои данные',
      graciasEnvio: 'Спасибо! Мы с вами свяжемся в ближайшее время.',
      graciasTitle: 'Спасибо!',
      graciasSubtitle: 'Мы с вами свяжемся в ближайшее время.',
      mensajeEnvioExitoso: 'Мы с вами свяжемся в ближайшее время.',
      // Empresas (rental)
      configuraRenta: 'Настрой свою аренду',
      duracionRenta: 'Длительность аренды',
      resumenRenta: 'Резюме аренды',
      // Compra (purchase)
      configuraCompra: 'Настрой свою покупку',
      opcionCompra: 'Опция покупки',
      plazoFinanciacion: 'Срок финансирования',
      resumenCompra: 'Резюме покупки',
      pagoUnico: 'Единовременный платеж',
      financiacion: 'Рассрочка',
      precioTotal: 'Общая цена',
      duracion: 'Длительность',
      total: 'Итого',
    },
    cookies: {
      title: 'Мы используем cookies',
      description: 'Мы используем cookies для улучшения вашего опыта и анализа трафика сайта. Вы можете принять все или только необходимые.',
      showDetails: 'Подробнее',
      hideDetails: 'Скрыть детали',
      essential: 'Необходимые',
      essentialDesc: 'Нужны для работы сайта. Нельзя отключить.',
      nonEssential: 'Аналитика и маркетинг',
      nonEssentialDesc: 'Помогают нам понять, как вы используете сайт, и показывать релевантную рекламу.',
      optional: 'Опционально',
      acceptAll: 'Принять все',
      essentialOnly: 'Только необходимые',
      privacyLink: 'Политика конфиденциальности',
      termsLink: 'Условия и положения',
    },
    privacyPolicy: {
      title: 'Политика конфиденциальности',
      section1: {
        title: '1. Кто мы?',
        intro: 'Мы — AUTOVIBESPAIN S.L. .',
        addressLabel: 'Адрес',
        emailLabel: 'Электронная почта',
      },
      section2: {
        title: '2. Что делает эта политика конфиденциальности?',
        content: 'Эта Политика конфиденциальности применяется к персональным данным, которые мы собираем и обрабатываем при использовании вами https://autovibe.es, приложения AutoVibe, любых других онлайн-каналов, которыми управляет AutoVibe (совместно — "Ресурсы"), и любых ваших взаимодействий с нами. К вам будут обращаться как "вы", "пользователь" или "пользователи" на протяжении этой Политики конфиденциальности. Термин "Услуги" означает предоставление услуг подписки на транспортные средства компанией AutoVibe пользователю. Пожалуйста, внимательно прочитайте эту Политику конфиденциальности, которая устанавливает, какие персональные данные мы собираем, почему и как мы обрабатываем ваши персональные данные и каковы ваши права в отношении ваших персональных данных.',
      },
      section3: {
        title: '3. Обязательное предоставление данных',
        content: 'Данные, запрашиваемые AutoVibe через любые предоставленные каналы, являются, как правило, обязательными (если не указано иное в обязательном поле) для выполнения целей, для которых они собираются. Поэтому, если они не предоставлены или предоставлены некорректно, эти запросы не могут быть выполнены, и вы можете не иметь возможности пользоваться Услугами, хотя можете свободно просматривать содержание Веб-сайта.',
      },
      section4: {
        title: '4. В каких целях AutoVibe обрабатывает данные пользователя?',
        purpose1: {
          title: '4.1 Предоставление заказанных вами Услуг',
          content: 'AutoVibe собирает и использует вашу информацию для управления использованием вами Услуг и отношениями между нами, включая: управление вашими заказами и подписками; доставку заказанных Услуг; связь с вами для помощи в завершении заказа или использовании процесса оплаты; связь для организации доставки заказанного транспортного средства; приостановку предоставления Услуг и/или иммобилизацию транспортного средства в соответствии с Условиями использования; связь для поддержки клиентов и удержания клиентов.',
        },
        purpose2: {
          title: '4.2 Анализ рисков',
          content: 'AutoVibe осуществляет оценку экономических рисков договора, запрошенного Пользователем, путем обработки предоставленных данных. Для этого будут проведены необходимые консультации с третьими сторонами, включая кредитные информационные системы, системы обнаружения мошенничества и информационные системы, связанные с отмыванием денег. Эта оценка рисков основывается на объективных критериях, позволяющих сделать вывод о способности лица выполнять финансовые обязательства.',
        },
        purpose3: {
          title: '4.3 Ответы на вопросы',
          content: 'Если вы обратитесь с любым вопросом, ваши данные будут обработаны для управления, обработки и ответа на ваши запросы. Правовая основа — наш законный интерес обеспечить возможность использования вами Ресурсов, Веб-сайта и Услуг.',
        },
        purpose4: {
          title: '4.4 Опросы удовлетворенности и внутренние отчеты',
          content: 'Для этой цели будут проведены: опросы пользователей о качестве и их удовлетворенности товарами или Услугами, предоставленными AutoVibe; анализ и подготовка внутренней статистики и отчетов о степени удовлетворенности пользователей. Вся обработка основывается на нашем законном интересе.',
        },
        purpose5: {
          title: '4.5 Отправка персонализированных маркетинговых сообщений',
          content: 'AutoVibe будет отправлять коммерческие и рекламные сообщения по электронной почте, текстовым сообщениям и телефонным звонкам, связанным с Услугами. Вы можете отказаться от маркетинговых сообщений в любое время, связавшись с ceo@autovibe.es.',
        },
      },
      section5: {
        title: '5. Категории обрабатываемых персональных данных',
        content: 'A. Данные, собранные непосредственно: идентификационные данные (имя, водительское удостоверение); контактные данные (электронная почта, номер телефона); данные личных характеристик (возраст, дата рождения, гражданство, адрес); данные транзакций; данные геолокации; телематические данные. B. Данные, собранные через третьих лиц: кредитные справочные и системы проверки личности. C. Данные, собранные автоматически: техническая информация (IP-адрес, тип браузера, операционная система); информация о взаимодействии (URL, поток кликов, время ответа). Мы используем файлы cookie и аналогичные технологии.',
      },
      section6: {
        title: '6. Кому мы передаем ваши персональные данные?',
        content: 'Данные пользователя могут быть переданы: государственным органам и правоохранительным органам; страховым компаниям; нашим поставщикам услуг; потенциальным инвесторам или покупателям/продавцам бизнеса; нашим аудиторам и юридическим консультантам; компаниям бизнес-группы AutoVibe; нашим партнерам (владельцам арендованных транспортных средств). AutoVibe имеет строгие процедуры отбора поставщиков.',
      },
      section7: {
        title: '7. Международная передача данных',
        content: 'AutoVibe не планирует передавать данные за пределы Европейского экономического пространства (ЕЭП). Однако, если мы решим передать данные третьим сторонам за пределами ЕЭП, мы обеспечим соответствие действующим нормам защиты данных, в частности путем подписания стандартных договорных положений, утвержденных Европейской Комиссией.',
      },
      section8: {
        title: '8. Хранение данных',
        content: 'Данные пользователя будут храниться в течение следующих периодов: данные для завершения покупки — в течение договорных отношений и после их завершения в течение срока исковой давности; данные из контактных форм — в течение необходимого периода для обработки запроса; данные геолокации транспортного средства — 6 месяцев после окончания подписки; данные для коммерческих сообщений — до отзыва согласия пользователем.',
      },
      section9: {
        title: '9. Ответственность пользователя',
        content: 'Пользователь подтверждает, что ему/ей исполнилось восемнадцать (18) лет и что данные, предоставленные AutoVibe, являются правдивыми, точными, полными и актуальными. Пользователь несет ответственность за точность всех предоставленных данных и обязуется поддерживать предоставленную информацию в актуальном состоянии.',
      },
      section10: {
        title: '10. Осуществление прав',
        content: 'Вы можете отправить письмо в AutoVibe по адресу, указанному в заголовке этой Политики конфиденциальности, или отправить нам электронное письмо на адрес ceo@autovibe.es в любое время и бесплатно, чтобы: отозвать данные согласия; получить подтверждение обработки персональных данных; получить доступ к персональным данным; исправить неточные или неполные данные; запросить удаление данных; получить ограничение обработки; запросить перенос данных; возразить против автоматизированного принятия решений. Вы можете подать жалобу в Испанское агентство защиты данных (AEPD) на www.aepd.es.',
      },
      section11: {
        title: '11. Меры безопасности',
        content: 'AutoVibe обрабатывает данные пользователя всегда абсолютно конфиденциально и сохраняет обязательный долг конфиденциальности, принимая необходимые технические и организационные меры для гарантирования безопасности ваших данных и предотвращения их изменения, потери, обработки или несанкционированного доступа.',
      },
      section12: {
        title: '12. Изменения',
        content: 'AutoVibe оставляет за собой право пересматривать свою Политику конфиденциальности в любое время, о чем будет сообщено пользователям. По этой причине, пожалуйста, регулярно проверяйте это заявление о конфиденциальности.',
      },
      lastUpdate: 'Последнее обновление',
    },
    termsConditions: {
      title: 'Общие условия и положения',
      aboutUs: {
        title: 'О нас',
        intro: 'Мы — AUTOVIBESPAIN S.L. .',
        addressLabel: 'Адрес',
        emailLabel: 'Электронная почта',
      },
      overview: {
        title: 'Обзор нашего сервиса',
        content: 'AutoVibe предоставляет услуги подписки на транспортные средства через Планы подписки, детали которых доступны на Платформе. Пользователи могут арендовать Транспортное средство, выбрав План подписки и, при условии завершения AutoVibe определенных проверок, согласившись как с Соглашением об аренде, так и с этими Общими условиями (вместе — "Договор подписки"). Тарифы, подлежащие оплате, будут те, что сообщены вам на момент заключения Договора подписки. Мы собираем и обрабатываем персональную информацию в соответствии с нашей Политикой конфиденциальности.',
      },
      structure: {
        title: 'Структура этого Договора подписки',
        content: 'Этот Договор подписки включает: (a) эту страницу с резюме; (b) Соглашение об аренде; и (c) Общие условия. В случае несоответствия между Соглашением об аренде и Общими условиями приоритет имеют положения Соглашения об аренде.',
      },
      section1: {
        title: '1. Глоссарий',
        content: 'В этом Договоре подписки: (a) множественное число включает единственное и наоборот; (b) мужской род включает женский. Ключевые определения: "Учетная запись" — онлайн-аккаунт Пользователя на Портале. "Водитель" — лицо(а), указанное(ые) в подписанном Соглашении об аренде. "Тарифы" — плата Пользователя AutoVibe. "План подписки" — выбранный план аренды Транспортного средства. "Минимальный срок" — минимальная продолжительность Договора. "Платформа" — онлайн-портал AutoVibe по адресу https://autovibe.es. "Транспортное средство" — автомобиль по данному Договору. "Территория" — материковая Испания, не включая острова.',
      },
      section2: {
        title: '2. Договорный процесс',
        content: 'Пользователь может открыть Учетную запись на Платформе. После открытия Учетной записи можно просматривать доступные Планы подписки. Для выбора Плана подписки необходимо завершить Процесс регистрации, предоставив запрашиваемую информацию, включая копии водительского удостоверения и информацию о способе оплаты. AutoVibe может отклонить заявку, если требования не выполнены. После выбора Плана и завершения Регистрации AutoVibe отправит копию Договора подписки. После цифровой подписи Договор становится юридически обязательным.',
      },
      section3: {
        title: '3. Начало и продолжительность',
        content: 'Договор подписки начинается с даты электронного подписания и действует в течение Минимального срока и любого продления. Минимальный срок начинается с даты доставки Транспортного средства. После истечения Минимального срока Договор автоматически продлевается ежемесячно. Период отзыва: 14 календарных дней с даты заключения договора. Досрочное расторжение: Пользователь оплачивает соответствующие штрафы согласно договору. AutoVibe может расторгнуть Договор, если Пользователь или Водитель не соблюдает условия.',
      },
      section4: {
        title: '4. Территория',
        content: 'Территория Договора подписки — материковая Испания, не включая острова. Транспортное средство может использоваться только на материковой Испании без предварительного разрешения AutoVibe. AutoVibe и Пользователь могут договориться о добавлении стран в пределах Европы к Территории.',
      },
      section5: {
        title: '5. Водители',
        content: 'Право управлять Транспортным средством ограничено исключительно Водителями, указанными в Договоре. Все Водители должны: (i) быть не моложе 25 лет; и (ii) иметь полное действующее водительское удостоверение, выданное не менее чем два (2) года назад. Пользователь может назначить основного Водителя и до четырех (4) дополнительных Водителей. Пользователь несет полную ответственность за соблюдение каждым Водителем условий Договора.',
      },
      section6: {
        title: '6. Водительские удостоверения',
        content: 'AutoVibe принимает водительские удостоверения в соответствии с нашими FAQ. Некоторые модели могут требовать более высокого возраста или большего стажа вождения.',
      },
      section7: {
        title: '7. Страхование',
        content: 'Если План подписки включает страхование и помощь на дороге, они входят в Тариф. Пользователь должен немедленно уведомить AutoVibe о любых изменениях в ответах на Требования страхования. AutoVibe может немедленно расторгнуть Договор, если Пользователь или Водитель больше не соответствует требованиям. Если План не включает страхование, Пользователь должен оформить собственное страхование.',
      },
      section8: {
        title: '8. Тарифы и оплата',
        content: 'Тарифы рассчитываются в соответствии с Планом подписки. Оплата производится ежемесячно. Тариф включает: предоставление Транспортного средства, разрешенный месячный пробег, техническое обслуживание, транспортный налог, технический осмотр и обслуживание клиентов. Тарифы включают НДС. Пользователь дополнительно отвечает за: топливо и энергию; дорожные сборы; страхование (если не включено в План). В случае неоплаты транспортное средство блокируется минимум на 48 часов. AutoVibe оставляет за собой право обновлять цену с предупреждением за 30 дней.',
      },
      section9: {
        title: '9. Детали транспортного средства',
        content: 'AutoVibe подтверждает, что Транспортное средство будет иметь такие же или аналогичные технические характеристики и состояние, как выбранное Пользователем. В соответствии с Политикой конфиденциальности, AutoVibe устанавливает устройства геолокации в Транспортном средстве.',
      },
      section10: {
        title: '10. Доставка транспортного средства',
        content: 'Стоимость доставки указана в Соглашении об аренде. Доставка осуществляется только на материковую часть Территории. AutoVibe оставляет за собой право изменять место или время доставки по обстоятельствам вне контроля. При доставке Пользователь должен предъявить водительское удостоверение. Пользователь должен осмотреть транспортное средство и сообщить о повреждениях в течение 72 часов. AutoVibe не предоставляет второй ключ.',
      },
      section11: {
        title: '11. Ограничения и обязанности пользователя и водителя',
        content: 'Пользователь не должен и должен обеспечить, чтобы Водители не: ездили по неавторизованным или грунтовым дорогам; превышали ограничения скорости; перевозили больше пассажиров, чем разрешено; передавали, сдавали в субаренду или продавали Транспортное средство; перевозили пассажиров в коммерческих целях; перевозили наркотики или опасные вещества; управляли под воздействием алкоголя или наркотиков; манипулировали одометром; использовали для гонок; модифицировали технические характеристики; курили в Транспортном средстве. Пользователь должен соблюдать законодательство, производить необходимые платежи и защищать Транспортное средство.',
      },
      section12: {
        title: '12. Инциденты и замена транспортного средства',
        content: 'О любом Инциденте необходимо сообщить AutoVibe в течение 48 часов. Пользователь также должен сообщить в полицию. Если Пользователь не уведомит своевременно, страхование может быть недействительным. При 3 или более Инцидентах AutoVibe может немедленно расторгнуть Договор.',
      },
      section13: {
        title: '13. Общие положения',
        content: 'Форс-мажор: AutoVibe не несет ответственности за обстоятельства вне разумного контроля. Отказ: неиспользование прав не означает отказ от них. Делимость: недействительность одного положения не влияет на другие. Запрет цессии: Пользователь не может передавать права без письменного согласия AutoVibe. Этот Договор регулируется испанским законодательством. Споры решаются компетентными судами Валенсии, Испания. Свяжитесь с нами: ceo@autovibe.es.',
      },
      lastUpdate: 'Последнее обновление',
    },
  },
} as const;

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en', 'uk', 'ru'];

