// Importamos todos los tipos usados.
import type { LevelData, PcProps, ServerProps } from './types';

// Creamos los datos de juego.
export const LEVEL_DATA: LevelData[] = [
  {
    name: 'Conexión entre pares.',
    intro: 'En el vasto mundo de las redes, múltiples dispositivos se entrelazan para crear conexiones. En este nivel inicial, tu misión es establecer una red simple entre dos PCs. Conecta estos dos dispositivos utilizando el cable que se encuentra disponible en la parte inferior.',
    key: ['conectar-dispositivos'],
    description: 'En el mundo de las redes, todo comienza con la conexión entre dos PCs, ¿podrás establecer esa conexión inicial?',
    apipa: 1,
    missions: ['Conecta los dos PCs.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
    ],
    materials: [{ amount: 1, name: 'cable' }],
    check(level) {
      if (level.elements[0].connections.length === 1) return true;
      return false;
    },
  },
  {
    name: 'Cuantos más, mejor.',
    intro: 'Las redes van más allá de solo dos PCs; se trata de interconectar múltiples dispositivos. En este nivel, enfrentarás el desafío de conectar tres PCs utilizando cables. Pero ten cuidado, ¡asegúrate de conectarlos entre sí para que la red funcione correctamente!',
    key: ['conectar-dispositivos'],
    description: 'Conectar dos PCs es sencillo, pero ¿qué sucede cuando son tres?',
    apipa: 1,
    missions: ['Conecta los tres PCs.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
    ],
    materials: [{ amount: 3, name: 'cable' }],
    check(level) {
      if (level.elements[0].connections.length === 2 && level.elements[1].connections.length === 2) return true;
      return false;
    },
  },
  {
    name: 'Un pequeño obstáculo.',
    intro: 'En el mundo de las redes, un dispositivo clave es el switch, que facilita la conexión de dispositivos de manera organizada y eficiente. En este nivel, aprenderás a utilizar un switch para conectar dos PCs. ¡Haz las conexiones correctas utilizando los cables disponibles!',
    key: ['conectar-dispositivos'],
    description: 'Las redes son mucho más que simplemente conectar PCs; a menudo involucran una variedad de dispositivos.',
    apipa: 1,
    missions: ['Conecta los dos PCs a través del switch.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'switch', connections: [] },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
    ],
    materials: [{ amount: 2, name: 'cable' }],
    check(level) {
      if (level.elements[1].connections.length === 2) return true;
      return false;
    },
  },
  {
    name: 'En una misma red.',
    intro: 'Después de conectar los dispositivos, es crucial asignarles un identificador único en la red: la dirección IP. En este juego, todos los niveles se encuentran en la red 192.168.1.1/24, lo que significa que cada IP debe comenzar con 192.168.1. Entra en la configuración de los dos PCs pulsando sobre ellos y asegúrate de que las IPs no se repitan. ¡Es hora de poner en práctica tus habilidades de configuración!',
    key: ['configurar-dispositivos', 'configurar-ip'],
    description: 'Cuando varios dispositivos están conectados entre sí, forman parte de una misma red que requiere una configuración especial.',
    apipa: 1,
    missions: ['Conecta los dos PCs.', 'Configura los dispositivos en la red.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
    ],
    materials: [{ amount: 1, name: 'cable' }],
    check(level) {
      if (level.elements[0].connections.length === 1) {
        if ((level.elements[0] as PcProps).ip.startsWith('192.168.1') && (level.elements[1] as PcProps).ip.startsWith('192.168.1')) {
          if ((level.elements[0] as PcProps).ip !== (level.elements[1] as PcProps).ip) return true;
        }
      }
      return false;
    },
  },
  {
    name: 'Envio de paquetes.',
    intro: 'En una red, los dispositivos no están simplemente presentes como decoración; constantemente están enviando y recibiendo paquetes de datos. Una forma común de verificar esta comunicación es mediante el comando "ping" en la consola del PC. En este nivel, prueba a utilizar "ping" para establecer la conexión entre los dos dispositivos y verificar su comunicación.',
    key: ['enviar-paquetes'],
    description: 'Los dispositivos están en constante comunicación, enviando y recibiendo paquetes de datos.',
    apipa: 1,
    missions: ['Conecta los dos PCs', 'Configura los dispositivos en la red.', 'Envía un paquete exitoso entre los PCs.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
      { name: 'pc', ip: '0.0.0.0', connections: [], pings: [], https: [], dhcps: false },
    ],
    materials: [{ name: 'cable', amount: 1 }],
    check(level) {
      return (level.elements[0] as PcProps).pings.some(index => index === 1);
    },
  },
  {
    name: 'Visualizando páginas web.',
    intro: 'En las redes, los servidores desempeñan un papel crucial al ofrecer servicios a otros dispositivos. En este nivel, tu misión es configurar el servidor para proporcionar servicio HTTP y luego visualizar la página web resultante desde el PC. ¡Es hora de aprender sobre el funcionamiento de los servidores y sus servicios en la red!',
    key: ['configurar-http', 'usar-navegador'],
    description: 'Los servicios en los servidores permiten que otros dispositivos accedan a páginas web y otros recursos.',
    apipa: 1,
    missions: ['Conecta los dispositivos.', 'Configura los dispositivos.', 'Configura el servicio HTTP.', 'Visualiza la web desde el PC.'],
    elements: [
      { name: 'pc', ip: '0.0.0.0', connections: [], https: [], dhcps: false, pings: [] },
      { name: 'servidor', connections: [], http: { content: '<h1>Gracias por jugar a Game.pkt</h1>', enabled: false }, https: [], dhcps: false, ip: '0.0.0.0', pings: [], dhcp: { enabled: false, startIp: 1, currentIp: 1 }, dns: { enabled: false, dictionary: {} }, dnss: false },
    ],
    materials: [{ amount: 1, name: 'cable' }],
    check(level) {
      return (level.elements[0] as PcProps).https.length === 1;
    },
  },
  {
    name: 'Automatizando la red.',
    intro: 'Las redes cuentan con un servicio llamado DHCP, el cual permite la configuración automática de todos los dispositivos. En este nivel, prueba a asignar configuraciones automáticas a los dos PCs utilizando DHCP.',
    key: ['configurar-dhcp', 'configuracion-dinamica'],
    description: 'Configurar los dispositivos repetidamente puede ser agotador, ¿verdad?',
    apipa: 1,
    missions: ['Conecta los dispositivos.', 'Configura el servicio DHCP.', 'Configura los PCs de manera dinámica.'],
    elements: [
      { name: 'pc', connections: [], https: [], dhcps: false, ip: '0.0.0.0', pings: [] },
      { name: 'pc', connections: [], https: [], dhcps: false, ip: '0.0.0.0', pings: [] },
      { name: 'switch', connections: [] },
      { name: 'servidor', connections: [], https: [], dhcps: false, ip: '0.0.0.0', pings: [], http: { content: '<h1>Gracias por jugar a Game.pkt</h1>', enabled: false }, dhcp: { enabled: false, startIp: 1, currentIp: 1 }, dns: { enabled: false, dictionary: {} }, dnss: false },
    ],
    materials: [{ amount: 3, name: 'cable' }],
    check(level) {
      return (level.elements[0] as PcProps).dhcps && (level.elements[1] as PcProps).dhcps;
    },
  },
  {
    name: 'Nombres de dominio.',
    intro: 'Gracias al servicio DNS, se crean diccionarios que traducen los nombres de dominio a direcciones IP de servidores web, facilitando la visualización de páginas sin la necesidad de memorizar números de IP.',
    key: ['usar-navegador', 'configurar-dns'],
    description: 'Para acceder a una página web, es más común usar su nombre de dominio en lugar de su dirección IP.',
    apipa: 1,
    missions: ['Conecta los dispositivos.', 'Configura los dispositivos.', 'Configura el servicio DNS.', 'Configura el servicio HTTP.', 'Visualiza la página web desde el PC usando el nombre de dominio.'],
    elements: [
      { name: 'pc', connections: [], https: [], dhcps: false, ip: '0.0.0.0', pings: [] },
      { name: 'switch', connections: [] },
      { name: 'servidor', connections: [], https: [], dhcps: false, ip: '0.0.0.0', pings: [], http: { content: '<h1>Gracias por jugar a Game.pkt</h1>', enabled: false }, dhcp: { enabled: false, startIp: 1, currentIp: 1 }, dns: { enabled: false, dictionary: {} }, dnss: false },
    ],
    materials: [{ amount: 2, name: 'cable' }],
    check(level) {
      return (level.elements[2] as ServerProps).dnss;
    },
  },
];
