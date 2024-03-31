// Tipado de los datos del nivel.
export type LevelData = {
  name: string;
  description: string;
  intro: string;
  key: string[];
  apipa: number;
  missions: string[];
  elements: (PcProps | SwitchProps | ServerProps)[];
  materials: { name: 'cable'; amount: number }[];
  check: (level: LevelData) => boolean;
};

// Tipado de cada elemento.
export type PcProps = { name: 'pc'; ip: string; connections: number[]; pings: number[]; https: number[]; dhcps: boolean };
export type SwitchProps = { name: 'switch'; connections: number[] };
export type ServerProps = { name: 'servidor'; ip: string; connections: number[]; pings: number[]; http: HttpServer; https: number[]; dhcp: DhcpServer; dhcps: boolean; dns: DnsServer; dnss: boolean };

// Tipado de cada servicio del servidor.
type HttpServer = { enabled: boolean; content: string };
type DhcpServer = { enabled: boolean; startIp: number; currentIp: number };
type DnsServer = { enabled: boolean; dictionary: { [key: string]: string } };
