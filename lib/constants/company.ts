import { IMAGES } from '@/lib/constants/paths'

export const COMPANY = {
  NIT: '05050505',
  NAME: 'The Choice 더 초이스',
  COMMERCIAL_NAME: 'The Choice',
  DESCRIPTION:
    'Restaurante y panadería coreana en Guatemala, ofreciendo una experiencia gastronómica auténtica con platillos tradicionales y repostería artesanal.',

  EMAIL_ADDRESSES: {
    VERIFIED_SENDING: 'updates',
    VERIFIED_RECEIVING: 'web',
    INFO: 'info',
    SALES: 'ventas',
    RESERVATIONS: 'reservaciones',
  },
  SOCIAL_MEDIA: {
    INSTAGRAM: {
      LABEL: 'Instagram',
      USER: '@thechoicegt',
      URL: 'https://www.instagram.com/thechoice.gt',
    },
    FACEBOOK: {
      LABEL: 'Facebook',
      USER: '@thechoicegt',
      URL: 'https://www.facebook.com/p/The-Choice-Guatemala-100075998806315/?locale=es_LA',
    },
    THREADS: {
      LABEL: 'Threads',
      USER: '@thechoice.gt',
      URL: 'https://www.threads.com/@thechoice.gt',
    },
  },
  PHONE_NUMBERS: {
    MAIN: '30455525',
    COUNTRY_CODE: '+502',
  },
  ADDRESSES: {
    MAIN: {
      LOCALITY: 'Santa Lucía Milpas Altas',
      ADDRESS: 'km 25.5 Carretera a Masagua',
      COUNTRY: 'Guatemala',
      MAP_URL: 'https://maps.app.goo.gl/xBJBQ1jMpaqQKSAp6',
      COUNTRY_CODE: 'GT',
      DESCRIPTION: [
        'Nuestro rincón original, donde la montaña es nuestro principal acompañante.',
        'Reservamos cabañitas que incluye un sauna estilo coreano (seco y húmedo) y un área de masajes.',
      ],
      REGION: 'Departamento de Sacatepéquez',
      POSTAL_CODE: '03006',
      IMAGE: IMAGES.LOCATIONS.QUETZALTENANGO.URL,
      IMAGE_ALT: IMAGES.LOCATIONS.QUETZALTENANGO.ALT,
      PEDIDOS_YA_URL: null,
      SCHEDULE: [
        { day: 'Lunes', schedule: '8:30 AM - 6:00 PM' },
        { day: 'Martes', schedule: 'Cerrado' },
        { day: 'Miércoles', schedule: '8:30 AM - 6:00 PM' },
        { day: 'Jueves', schedule: '8:30 AM - 6:00 PM' },
        { day: 'Viernes', schedule: '8:30 AM - 6:00 PM' },
        { day: 'Sábado', schedule: '8:00 AM - 6:00 PM' },
        { day: 'Domingo', schedule: '8:00 AM - 6:00 PM' },
      ],
    },
    EON_PLAZA: {
      LOCALITY: 'EON Plaza',
      ADDRESS: '4ta. Avenida, 03-48 zona 10',
      COUNTRY: 'Guatemala',
      COUNTRY_CODE: 'GT',
      DESCRIPTION: [
        'Nuestra apertura más reciente en el centro de la ciudad.',
        'Un espacio moderno diseñado para disfrutar de nuestra propuesta de cocina fusión a la carta.',
      ],
      MAP_URL: 'https://maps.app.goo.gl/H1B8PcFidAF3soAH8',
      REGION: 'Ciudad de Guatemala',
      POSTAL_CODE: '01010',
      IMAGE: IMAGES.LOCATIONS.Z10.URL,
      IMAGE_ALT: IMAGES.LOCATIONS.Z10.ALT,
      PEDIDOS_YA_URL: null,
      SCHEDULE: [
        { day: 'Lunes', schedule: '9:00 AM - 6:00 PM' },
        { day: 'Martes', schedule: 'Cerrado' },
        { day: 'Miércoles', schedule: '9:00 AM - 6:00 PM' },
        { day: 'Jueves', schedule: '9:00 AM - 6:00 PM' },
        { day: 'Viernes', schedule: '9:00 AM - 6:00 PM' },
        { day: 'Sábado', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Domingo', schedule: '9:00 AM - 4:00 PM' },
      ],
    },
    MATEO_EXPRESS: {
      LOCALITY: 'Mateo Express',
      ADDRESS: 'Calzada Mateo Flores 1-74, Zona 7',
      COUNTRY: 'Guatemala',
      COUNTRY_CODE: 'GT',
      DESCRIPTION: [
        'Un rincón acogedor donde el aroma a pan recién horneado te da la bienvenida.',
        'Especialistas en panadería artesanal y delicias coreanas dulces, ideales para llevar o compartir un momento rápido en la zona.',
      ],
      MAP_URL: 'https://maps.app.goo.gl/YTpcbD1oPPPeoXdP7',
      PEDIDOS_YA_URL:
        'https://www.pedidosya.com.gt/restaurantes/ciudad-de-guatemala/the-choice-bakery-9ff838da-3b84-4f48-bd93-8cdd65e68e70-menu',
      REGION: 'Ciudad de Guatemala',
      POSTAL_CODE: '01007',
      IMAGE: IMAGES.LOCATIONS.Z7.URL,
      IMAGE_ALT: IMAGES.LOCATIONS.Z7.ALT,
      SCHEDULE: [
        { day: 'Lunes', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Martes', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Miércoles', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Jueves', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Viernes', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Sábado', schedule: '9:00 AM - 4:00 PM' },
        { day: 'Domingo', schedule: '9:00 AM - 4:00 PM' },
      ],
    },
  },
  HISTORY: [
    {
      year: 2018,
      title: 'Formación culinaria global',
      description:
        'La Chef Choi perfecciona su técnica en Daejeon, Corea, y en el Basque Culinary Center, España, adquiriendo una visión vanguardista de la cocina.',
    },
    {
      year: 2019,
      title: 'Experiencia en alta hotelería',
      description:
        'Trabaja en el Hotel Hyatt en Seattle, Estados Unidos, consolidando su experiencia en estándares internacionales y servicio premium.',
    },
    {
      year: 2021,
      title: 'Retorno a una nueva Guatemala',
      description:
        'Tras dos años fuera, la Chef regresa y observa el auge de la cultura coreana en el país, identificando una oportunidad para la innovación.',
    },
    {
      year: 2021,
      title: 'Nacimiento de The Choice',
      description:
        'En diciembre, abre sus puertas en Santa Lucía Milpas Altas con un concepto de fusión que une platos internacionales con sabores coreanos.',
    },
    {
      year: 2022,
      title: 'Consolidación de la fusión cultural',
      description:
        'El restaurante se convierte en un referente para quienes buscan probar la cultura coreana a través de formatos familiares como pastas y carnes.',
    },
    {
      year: 2026,
      title: 'Referente de cocina de autor',
      description:
        'The Choice se posiciona como un destino gastronómico único, rodeado de naturaleza, donde la hospitalidad coreana y guatemalteca se unen.',
    },
  ],
  HOURS_OF_RESERVATION: [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ],
  FAQ: [
    {
      categoria: 'Restaurante',
      pregunta: '¿Cuál es el concepto de cocina de The Choice?',
      respuesta:
        'Ofrecemos una propuesta de cocina fusión donde platos internacionales familiares (como pastas o cortes de carne) se encuentran con técnicas y sabores auténticos de Corea, creando una experiencia innovadora y accesible.',
    },
    {
      categoria: 'Ubicación',
      pregunta: '¿Dónde están ubicados y qué ambiente ofrecen?',
      respuesta:
        'Estamos en Santa Lucía Milpas Altas, rodeados de naturaleza y con una vista espectacular al volcán. Es un ambiente acogedor diseñado para disfrutar de la tranquilidad y el aire libre.',
    },
    {
      categoria: 'Comida',
      pregunta: 'Nunca he probado la comida coreana, ¿es muy picante?',
      respuesta:
        '¡No te preocupes! Al ser una cocina de fusión, equilibramos los sabores para todos los paladares. Muchos de nuestros platos resaltan el umami y el dulzor coreano sin necesidad de ser picantes.',
    },
    {
      categoria: 'Servicio',
      pregunta: '¿Es necesario realizar una reservación?',
      respuesta:
        'Aunque aceptamos clientes sin reserva según disponibilidad, recomendamos reservar con anticipación, especialmente los fines de semana, para asegurarles la mejor vista y atención.',
    },
    {
      categoria: 'Menú',
      pregunta: '¿Cuentan con opciones vegetarianas o restricciones alimentarias?',
      respuesta:
        'Sí, al trabajar con un menú a la carta y platos preparados al momento, podemos adaptar varias de nuestras opciones para vegetarianos o consultar ingredientes para personas con alergias.',
    },
    {
      categoria: 'Procesos',
      pregunta: "¿Qué significa el nombre 'The Choice'?",
      respuesta:
        "Tiene un doble sentido: significa 'La Elección' en inglés, y fonéticamente suena como 'Lo de los Choi' (The Choi's), haciendo honor a nuestro apellido familiar y origen coreano.",
    },
    {
      categoria: 'Atención al Cliente',
      pregunta: '¿El restaurante es pet-friendly?',
      respuesta:
        'Sí, al estar rodeados de naturaleza y contar con áreas abiertas, tus mascotas son bienvenidas siempre que se mantengan con correa y bajo supervisión.',
    },
    {
      categoria: 'Comida',
      pregunta: '¿Utilizan ingredientes importados de Corea?',
      respuesta:
        'Combinamos ingredientes frescos locales de Guatemala con salsas, especias y productos base importados directamente de Corea para garantizar la autenticidad del sabor.',
    },
    {
      categoria: 'Servicio',
      pregunta: '¿Tienen menú para niños?',
      respuesta:
        'Nuestros platos de fusión, como las pastas con toques coreanos, suelen ser muy populares entre los niños debido a sus sabores equilibrados y presentaciones familiares.',
    },
    {
      categoria: 'Atención al Cliente',
      pregunta: '¿Aceptan eventos especiales o celebraciones?',
      respuesta:
        '¡Claro que sí! Somos el lugar ideal para celebraciones familiares o de pareja. Si deseas algo especial, puedes contactarnos para coordinar detalles personalizados.',
    },
  ],
} as const
