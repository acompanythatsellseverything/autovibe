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
        atencion: 'Atención al cliente: 613 259 610',
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
        permanenciaCortaDesc: '1-30 días',
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
        permanenciaCortaDesc: '1-30 días',
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
        permanenciaCortaDesc: '1-30 días',
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
      desde: 'desde',
      ivaIncl: 'IVA incl.',
      continuar: 'Continuar',
      configuraSuscripcion: 'Configura tu suscripción',
      permanencia: 'Permanencia',
      mes: 'mes',
      meses: 'meses',
      noDisponible: 'No disponible',
      personalizaKilometraje: 'Personaliza tu kilometraje',
      kmMesIncluido: 'km/mes incluido',
      resumenSuscripcion: 'Resumen de tu suscripción',
      precioMes: 'Precio al mes',
      descuentoOferta: 'Descuento por oferta',
      kmAdicionales: 'Km adicionales',
      cuotaMensual: 'Cuota mensual',
      ivaIncluido: 'IVA incluido',
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
  },
  en: {
    // Header
    header: {
      inicio: 'Home',
      suscripcion: 'Subscription',
      compra: 'Purchase',
      empresas: 'Business',
      elClub: 'The Club',
      llamaMe: 'Call me!',
      miCuenta: 'My Account',
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
        verMas: 'view 5 more models >',
        noCars: 'No cars available at this time.',
      },
      carsForSale: {
        title: 'Cars for sale',
        verMas: 'view more >',
      },
      shortTermRental: {
        title: 'Short-term rental',
        verMas: 'view more >',
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
          title: 'Buy now without interest',
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
        atencion: 'Customer service: 613 259 610',
        nuevos: 'New clients: 611 713 755',
        asistencia: 'Immediate assistance for accidents',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 reviews',
        title: 'One fee, everything included, zero down payment',
        subtitle: 'Your subscription covers full insurance, maintenance, assistance, MOT and taxes. You just drive.',
        permanenciaLarga: 'Long permanence',
        permanenciaLargaDesc: '12, 24, 36 months permanence',
        permanenciaCorta: 'Short permanence',
        permanenciaCortaDesc: '1-30 days',
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
        permanenciaLarga: 'Long permanence',
        permanenciaLargaDesc: '12, 24, 36 months permanence',
        permanenciaCorta: 'Short permanence',
        permanenciaCortaDesc: '1-30 days',
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
        permanenciaLarga: 'Long permanence',
        permanenciaLargaDesc: '12, 24, 36 months permanence',
        permanenciaCorta: 'Short permanence',
        permanenciaCortaDesc: '1-30 days',
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
        eligeTiempo: 'Choose how long you want it',
        ajustaKm: 'Adjust km each month',
        llevamosCasa: 'We bring it to your home',
        todoOnline: 'Everything online, no paperwork',
        ayudamosAccidente: 'We help you if you have an accident',
        cocheSustitucion: 'Free replacement car',
        sinEntrada: 'No down payment or large deposit',
        mantenimiento: 'Maintenance, MOT, taxes and assistance',
        seguro: 'Full coverage insurance included',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'months minimum permanence',
      cuotaMensualDe: 'monthly fee of',
      desde: 'from',
      ivaIncl: 'VAT incl.',
      continuar: 'Continue',
      configuraSuscripcion: 'Configure your subscription',
      permanencia: 'Permanence',
      mes: 'month',
      meses: 'months',
      noDisponible: 'Not available',
      personalizaKilometraje: 'Personalize your mileage',
      kmMesIncluido: 'km/month included',
      resumenSuscripcion: 'Subscription summary',
      precioMes: 'Price per month',
      descuentoOferta: 'Discount by offer',
      kmAdicionales: 'Additional km',
      cuotaMensual: 'Monthly fee',
      ivaIncluido: 'VAT included',
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
      financiacion: 'Financing',
      precioTotal: 'Total price',
      duracion: 'Duration',
      total: 'Total',
    },
  },
  uk: {
    // Header
    header: {
      inicio: 'Головна',
      suscripcion: 'Підписка',
      compra: 'Купівля',
      empresas: 'Бізнес',
      elClub: 'Клуб',
      llamaMe: 'Зателефонуй!',
      miCuenta: 'Мій акаунт',
    },
    // Home page
    home: {
      hero: {
        title: 'Підписка на автомобіль без клопоту.',
        subtitle: 'Твій автомобіль, твої правила. Для тебе або твого бізнесу.',
        verCoches: 'Переглянути автомобілі!',
      },
      featuredCars: {
        title: 'Найбільш затребувані, доступні зараз',
        verMas: 'переглянути ще 5 моделей >',
        noCars: 'Наразі автомобілі недоступні.',
      },
      carsForSale: {
        title: 'Автомобілі на продаж',
        verMas: 'переглянути ще >',
      },
      shortTermRental: {
        title: 'Оренда на короткий термін',
        verMas: 'переглянути ще >',
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Твій контракт закінчується — у тебе є 4 опції',
      options: {
        option1: {
          title: 'Поверни без клопоту',
          description:
            'Ти привозиш, ми закриваємо все, і ти йдеш. Нуль комісій, нуль ускладнень.',
        },
        option2: {
          title: 'Зміни або продовж',
          description:
            'Візьми інший автомобіль з нашого парку або залишся ще на кілька місяців з тим, що маєш. Ти вирішуєш.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Налаштуй свій план оплати та купи автомобіль за залишковою вартістю, яку ми домовилися з самого початку.',
        },
        option4: {
          title: 'Купи зараз без відсотків',
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
        atencion: 'Служба підтримки: 613 259 610',
        nuevos: 'Нові клієнти: 611 713 755',
        asistencia: 'Негайна допомога при аварії',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 відгуки',
        title: 'Одна плата, все включено, нуль першого внеску',
        subtitle: 'Твоя підписка покриває повне страхування, обслуговування, допомогу, техогляд та податки. Ти просто їздиш.',
        permanenciaLarga: 'Довга постійність',
        permanenciaLargaDesc: '12, 24, 36 місяців постійності',
        permanenciaCorta: 'Коротка постійність',
        permanenciaCortaDesc: '1-30 днів',
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
        permanenciaLarga: 'Довга постійність',
        permanenciaLargaDesc: '12, 24, 36 місяців постійності',
        permanenciaCorta: 'Коротка постійність',
        permanenciaCortaDesc: '1-30 днів',
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
        permanenciaLarga: 'Довга постійність',
        permanenciaLargaDesc: '12, 24, 36 місяців постійності',
        permanenciaCorta: 'Коротка постійність',
        permanenciaCortaDesc: '1-30 днів',
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
        eligeTiempo: 'Обери, скільки часу ти хочеш',
        ajustaKm: 'Налаштуй км щомісяця',
        llevamosCasa: 'Ми привеземо до твого дому',
        todoOnline: 'Все онлайн, без паперів',
        ayudamosAccidente: 'Ми допоможемо, якщо у тебе аварія',
        cocheSustitucion: 'Безкоштовний замінювальний автомобіль',
        sinEntrada: 'Без першого внеску та великого депозиту',
        mantenimiento: 'Обслуговування, техогляд, податки та допомога',
        seguro: 'Страхування на весь ризик включено',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'місяців мінімальної постійності',
      cuotaMensualDe: 'щомісячна плата',
      desde: 'від',
      ivaIncl: 'з ПДВ',
      continuar: 'Продовжити',
      configuraSuscripcion: 'Налаштуй свою підписку',
      permanencia: 'Постійність',
      mes: 'місяць',
      meses: 'місяців',
      noDisponible: 'Недоступно',
      personalizaKilometraje: 'Персоналізуй свій пробіг',
      kmMesIncluido: 'км/місяць включено',
      resumenSuscripcion: 'Резюме підписки',
      precioMes: 'Ціна на місяць',
      descuentoOferta: 'Знижка за пропозицією',
      kmAdicionales: 'Додаткові км',
      cuotaMensual: 'Щомісячна плата',
      ivaIncluido: 'з ПДВ',
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
      financiacion: 'Фінансування',
      precioTotal: 'Загальна ціна',
      duracion: 'Тривалість',
      total: 'Всього',
    },
  },
  ru: {
    // Header
    header: {
      inicio: 'Главная',
      suscripcion: 'Подписка',
      compra: 'Покупка',
      empresas: 'Бизнес',
      elClub: 'Клуб',
      llamaMe: 'Позвони мне!',
      miCuenta: 'Мой аккаунт',
    },
    // Home page
    home: {
      hero: {
        title: 'Подписка на автомобиль без хлопот.',
        subtitle: 'Твой автомобиль, твои правила. Для тебя или твоего бизнеса.',
        verCoches: 'Посмотреть автомобили!',
      },
      featuredCars: {
        title: 'Самые востребованные, доступны сейчас',
        verMas: 'посмотреть еще 5 моделей >',
        noCars: 'Автомобили недоступны в данный момент.',
      },
      carsForSale: {
        title: 'Автомобили на продажу',
        verMas: 'посмотреть еще >',
      },
      shortTermRental: {
        title: 'Аренда на короткий срок',
        verMas: 'посмотреть еще >',
      },
    },
    // Contract Options
    contractOptions: {
      title: 'Твой контракт заканчивается — у тебя есть 4 опции',
      options: {
        option1: {
          title: 'Верни без хлопот',
          description:
            'Ты привозишь, мы закрываем всё, и ты уходишь. Ноль комиссий, ноль осложнений.',
        },
        option2: {
          title: 'Смени или продли',
          description:
            'Возьми другой автомобиль из нашего парка или останься еще на несколько месяцев с тем, что есть. Ты решаешь.',
        },
        option3: {
          title: 'Vibe Leasing',
          description:
            'Настрой свой план оплаты и купи автомобиль по остаточной стоимости, которую мы договорились с самого начала.',
        },
        option4: {
          title: 'Купи сейчас без процентов',
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
        atencion: 'Служба поддержки: 613 259 610',
        nuevos: 'Новые клиенты: 611 713 755',
        asistencia: 'Немедленная помощь при аварии',
      },
      copyright: '© Copyright AutoVibe 2026',
    },
    // Pages
    pages: {
      suscripcion: {
        reviews: '104 отзыва',
        title: 'Одна плата, всё включено, ноль первого взноса',
        subtitle: 'Твоя подписка покрывает полное страхование, обслуживание, помощь, техосмотр и налоги. Ты просто ездишь.',
        permanenciaLarga: 'Долгая постоянность',
        permanenciaLargaDesc: '12, 24, 36 месяцев постоянности',
        permanenciaCorta: 'Короткая постоянность',
        permanenciaCortaDesc: '1-30 дней',
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
        permanenciaLarga: 'Долгая постоянность',
        permanenciaLargaDesc: '12, 24, 36 месяцев постоянности',
        permanenciaCorta: 'Короткая постоянность',
        permanenciaCortaDesc: '1-30 дней',
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
        permanenciaLarga: 'Долгая постоянность',
        permanenciaLargaDesc: '12, 24, 36 месяцев постоянности',
        permanenciaCorta: 'Короткая постоянность',
        permanenciaCortaDesc: '1-30 дней',
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
        eligeTiempo: 'Выбери, сколько времени ты хочешь',
        ajustaKm: 'Настрой км ежемесячно',
        llevamosCasa: 'Мы привезем к твоему дому',
        todoOnline: 'Всё онлайн, без бумаг',
        ayudamosAccidente: 'Мы поможем, если у тебя авария',
        cocheSustitucion: 'Бесплатная замена автомобиля',
        sinEntrada: 'Без первого взноса и большого депозита',
        mantenimiento: 'Обслуживание, техосмотр, налоги и помощь',
        seguro: 'Страхование на весь риск включено',
      },
    },
    // Car Detail Page
    carPage: {
      mesesPermanenciaMinima: 'месяцев минимальной постоянности',
      cuotaMensualDe: 'ежемесячная плата',
      desde: 'от',
      ivaIncl: 'с НДС',
      continuar: 'Продолжить',
      configuraSuscripcion: 'Настрой свою подписку',
      permanencia: 'Постоянность',
      mes: 'месяц',
      meses: 'месяцев',
      noDisponible: 'Недоступно',
      personalizaKilometraje: 'Персонализируй свой пробег',
      kmMesIncluido: 'км/месяц включено',
      resumenSuscripcion: 'Резюме подписки',
      precioMes: 'Цена на месяц',
      descuentoOferta: 'Скидка по предложению',
      kmAdicionales: 'Дополнительные км',
      cuotaMensual: 'Ежемесячная плата',
      ivaIncluido: 'с НДС',
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
      financiacion: 'Финансирование',
      precioTotal: 'Общая цена',
      duracion: 'Длительность',
      total: 'Итого',
    },
  },
} as const;

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en', 'uk', 'ru'];

