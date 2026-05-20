export interface Deposit {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
}

export interface Mineral {
  name: string;
  color: string;
  regionLabel: string;
  deposits: Deposit[];
}

export const MINERALS: Mineral[] = [
  {
    name: 'Gold',
    color: '#FFD700',
    regionLabel: 'Bolívar & Amazonas',
    deposits: [
      { id: 'g1', name: 'El Callao', coordinates: [-61.8153, 7.3411], description: 'Historic gold mining district, one of the richest in South America.' },
      { id: 'g2', name: 'Las Cristinas', coordinates: [-61.2167, 6.8833], description: 'Major gold deposit with estimated reserves of 17M oz.' },
      { id: 'g3', name: 'Km 88', coordinates: [-61.5, 6.0], description: 'Active alluvial gold mining area in southern Bolívar.' },
      { id: 'g4', name: 'Tumeremo', coordinates: [-61.4595, 7.2964], description: 'Regional gold mining hub in Bolívar state.' },
    ],
  },
  {
    name: 'Coltan',
    color: '#A855F7',
    regionLabel: 'Amazonas state',
    deposits: [
      { id: 'co1', name: 'Parguaza Block', coordinates: [-67.5, 6.8], description: 'One of the largest coltan deposits in the world.' },
      { id: 'co2', name: 'Manapiare Valley', coordinates: [-65.7, 5.3], description: 'Coltan and rare-metal mineralization in Amazonas.' },
      { id: 'co3', name: 'Atabapo District', coordinates: [-67.7, 4.1], description: 'Coltan-bearing pegmatites near Colombian border.' },
    ],
  },
  {
    name: 'Copper',
    color: '#F97316',
    regionLabel: 'Lara & Bolívar states',
    deposits: [
      { id: 'cu1', name: 'Aroa Mines', coordinates: [-68.9, 10.4], description: 'Historic copper mines, active since the 18th century.' },
      { id: 'cu2', name: 'El Chino', coordinates: [-70.2, 9.5], description: 'Copper-porphyry deposit in Lara state.' },
      { id: 'cu3', name: 'El Manteco', coordinates: [-63.5, 7.8], description: 'Copper mineralization in northern Bolívar.' },
    ],
  },
  {
    name: 'Rare Earths',
    color: '#10B981',
    regionLabel: 'Imataca complex',
    deposits: [
      { id: 're1', name: 'Imataca Complex', coordinates: [-61.0, 7.5], description: 'REE in Precambrian igneous and metamorphic rocks.' },
      { id: 're2', name: 'Roraima Formation', coordinates: [-61.5, 5.5], description: 'Rare earth elements associated with tepui geology.' },
      { id: 're3', name: 'Guayana Shield REE', coordinates: [-63.8, 6.5], description: 'Disseminated REE mineralization across the shield.' },
    ],
  },
  {
    name: 'Diamonds',
    color: '#60A5FA',
    regionLabel: 'Gran Sabana, Bolívar',
    deposits: [
      { id: 'd1', name: 'Gran Sabana', coordinates: [-61.5, 5.2], description: 'Diamond kimberlite pipes discovered in the 1990s.' },
      { id: 'd2', name: 'Icabarú', coordinates: [-61.7, 4.8], description: 'Primary alluvial diamond mining area.' },
      { id: 'd3', name: 'Quebrada Grande', coordinates: [-60.8, 6.2], description: 'Diamond-bearing river placers near the Guyanese border.' },
    ],
  },
  {
    name: 'Lithium',
    color: '#EC4899',
    regionLabel: 'Andean & plains regions',
    deposits: [
      { id: 'l1', name: 'Mérida Andes', coordinates: [-71.0, 8.5], description: 'Lithium brine potential in Andean salt flats.' },
      { id: 'l2', name: 'Falcón Basin', coordinates: [-69.5, 11.0], description: 'Emerging lithium deposit in Falcón state.' },
      { id: 'l3', name: 'Llanos Brine', coordinates: [-67.5, 8.0], description: 'Lithium-bearing brines beneath the Orinoco plains.' },
    ],
  },
];

export const ALL_MINERAL_NAMES = MINERALS.map((m) => m.name);
