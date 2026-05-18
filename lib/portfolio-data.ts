export interface PortfolioProject {
  slug: string
  number: string
  title: string
  client: string
  category: string
  categorySlug: string
  year: string
  location: string
  shortDescription: string
  leadParagraph: string
  challenge: string
  solution: string
  result: string
  tags: string[]
  materials: string[]
  dimensions?: string
  duration: string
  featured: boolean
  placeholderColor: string
  accentColor: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'reclama-luminoasa-restaurant-crang',
    number: '01',
    title: 'Reclamă luminoasă — Restaurant Crâng',
    client: 'Restaurant Crâng Bistrița',
    category: 'Reclame luminoase',
    categorySlug: 'reclame-luminoase',
    year: '2023',
    location: 'Bistrița, BN',
    shortDescription:
      'Totem luminos cu litere volumetrice LED montate pe structură inox, vizibil de la 200m pe DN17.',
    leadParagraph:
      'Restaurant Crâng căuta o prezență vizuală de noapte care să fie la fel de invitantă ca atmosfera interioară. Am livrat un ansamblu luminos compus din totem de 4m și fascia de intrare cu litere individuale din aluminiu vopsit și iluminat LED intern alb-cald.',
    challenge:
      'Restaurantul era amplasat pe un ax rutier cu concurență vizuală densă. Clientul solicita vizibilitate nocturnă la distanță mare, culori calde care să nu pară agresive, și rezistență la condițiile meteo din zona montană.',
    solution:
      'Am proiectat litere volumetrice cu fațetă din aluminiu 2mm vopsit în câmp electrostatic RAL 9010, iluminate intern cu strip LED 3000K IP67. Structura totemului este din profil pătrat inox 304 lustruit, ancorat în fundație de beton la 1.2m adâncime. Fascia de intrare repetă logoul complet la scară 1:1.',
    result:
      'Ansamblul a crescut vizibilitatea restaurantului pe tronsoanele rutiere adiacente și a contribuit la o creștere a traficului pietonal seara. Clientul a extins colaborarea cu un set de indicatoare de parcare în același sistem vizual.',
    tags: ['LED', 'Litere volumetrice', 'Totem', 'Outdoor', 'Inox'],
    materials: ['Aluminiu 2mm vopsit RAL 9010', 'Strip LED 3000K IP67', 'Profil inox 304', 'Plastic opal difuzor'],
    dimensions: 'Totem: H 4200 × W 600mm. Fascia intrare: W 3800 × H 450mm',
    duration: '3 săptămâni producție + 1 zi montaj',
    featured: true,
    placeholderColor: '#1C1C1E',
    accentColor: '#F0A500',
  },
  {
    slug: 'wrap-flota-bn-logistic',
    number: '02',
    title: 'Wrap flotă — BN Logistic Transport',
    client: 'BN Logistic SRL',
    category: 'Inscripționări auto',
    categorySlug: 'inscriptionari-auto',
    year: '2023',
    location: 'Bistrița-Năsăud, județ',
    shortDescription:
      'Identitate vizuală aplicată pe 12 autoutilitare și 3 semiremorci — wrap complet cu film laminat mat rezistent la UV.',
    leadParagraph:
      'O flotă de 15 vehicule cu design inconsistent nu transmite profesionalism. Am standarizat identitatea vizuală a BN Logistic pe întreaga flotă, de la dube 3.5t la semiremorci de 13.6m, cu un sistem grafic simplu, robust și ușor de replicat pe vehicule viitoare.',
    challenge:
      'Flota era eterogenă ca dimensiuni și stare a caroseriei. Unele vehicule aveau rugină sub folie veche, altele aveau geamuri de dimensiuni nestandard care interferau cu graficele. Deadline-ul era strâns — 4 săptămâni pentru toate vehiculele.',
    solution:
      'Am creat un sistem modular de grafice vectoriale parametrizate per tip de vehicul: gabarit dubă, camion box și semiremorcă. Fiecare șablon adapta elementele cheie (logo, contact, sloganul de flotă) la suprafața disponibilă fără tăieri vizuale. Am folosit film vinyl 3M IJ180Cv3 cu laminat mat 8519 pentru protecție UV și rezistență 7 ani.',
    result:
      'Flota a dobândit o identitate coerentă și profesionistă. Clientul a raportat că partenerii externi au observat schimbarea fără să fie informați. Replicarea pe vehicule noi se face acum în maxim 2 zile cu șabloanele standardizate.',
    tags: ['Wrap', 'Flotă', 'Film 3M', 'Auto', 'Identitate vizuală'],
    materials: ['Film vinyl 3M IJ180Cv3', 'Laminat mat 8519', 'Primer de activare suprafețe'],
    dimensions: 'Suprafață totală aplicată: ~680 mp',
    duration: '4 săptămâni (flotă completă)',
    featured: true,
    placeholderColor: '#1A2332',
    accentColor: '#4A9EFF',
  },
  {
    slug: 'litere-volumetrice-hotel-coroana',
    number: '03',
    title: 'Litere volumetrice — Hotel Coroana',
    client: 'Hotel Coroana Bistrița',
    category: 'Litere volumetrice',
    categorySlug: 'litere-volumetrice',
    year: '2022',
    location: 'Bistrița, centru',
    shortDescription:
      'Litere individuale din inox 316 satinat, backlit LED auriu-cald, montate pe fațada istorică a hotelului fără intervenții ireversibile.',
    leadParagraph:
      'Hotel Coroana ocupă o clădire cu valoare arhitecturală din centrul Bistriței. Reconditionarea semnajului trebuia să respecte caracterul clădirii și să obțină avizul autorității locale de protejare a patrimoniului. Am livrat un sistem de litere montate pe sistem de distanțiere reversibil, fără șuruburi vizibile în fațadă.',
    challenge:
      'Fațada era protejată — orice intervenție structurală necesita aviz special. Clientul dorea litere de 600mm înălțime cu iluminat LED, dar în culori calde care să nu stridente lângă ornamentele arhitecturale. Structura peretelui era din cărămidă veche cu rezistență neuniformă.',
    solution:
      'Am proiectat litere din inox 316 cu grosime laterală 80mm, vopsit interior negru mat pentru absorbția luminii parazite. Iluminatul back-light folosește LED 2700K (alb incandescent) montat pe canal continuu, creând halo uniform pe perete. Ancorarea s-a făcut prin dibluri chimice injectate în rosturi de mortar, fără perforarea cărămizilor.',
    result:
      'Semnajul a primit avizul patrimoniului și a fost instalat fără incidente. Hotelul a publicat rezultatul pe rețelele sociale, generând over 200 de distribuiri locale. Efectul de halo pe fațadă a devenit un element distinctiv al centrului vechi în fotografiile turistice.',
    tags: ['Inox', 'Backlit', 'Patrimoniu', 'Hotel', 'LED 2700K'],
    materials: ['Inox 316 satinat 1.5mm', 'LED 2700K back-light', 'Dibluri chimice Fischer', 'Vopsea neagră mat interior'],
    dimensions: 'H 600mm per literă, lungime totală: 4200mm',
    duration: '5 săptămâni producție + 2 zile montaj',
    featured: true,
    placeholderColor: '#1C1A16',
    accentColor: '#C9A84C',
  },
  {
    slug: 'inscriptionare-vitrine-farmacia-centrala',
    number: '04',
    title: 'Inscripționare vitrine — Farmacia Centrală',
    client: 'Farmacia Centrală Bistrița',
    category: 'Inscripționări vitrine',
    categorySlug: 'inscriptionari-vitrine',
    year: '2024',
    location: 'Bistrița, 3 locații',
    shortDescription:
      'Sistem unitar de inscripționare pentru 3 farmacii — film alb mat perforat 50/50, grafice cu horarul și serviciile, logo standard pe toate locațiile.',
    leadParagraph:
      'Farmacia Centrală gestiona 3 puncte de lucru cu vitrine de dimensiuni diferite și grafice aplicate ad-hoc de-a lungul anilor. Am unificat vizualul printr-un sistem de inscripționare modular care se adaptează la orice dimensiune de vitrină menținând coerența brandului.',
    challenge:
      'Dimensiunile vitrinelor variau semnificativ între locații. Clientul dorea să mențină transparența vizuală (clienții să vadă interiorul din stradă) dar și să comunice serviciile și horarul. Un sistem consistent pentru actualizări rapide de sezon era esențial.',
    solution:
      'Am ales film perforat 50/50 alb mat care permite vizibilitate din interior și opacitate grafică din exterior. Un șablon modular cu 3 zone (logo sus, servicii centru, orar jos) se scalează automat la orice lățime de vitrină. Actualizările se fac prin înlocuirea zonei centrale cu noi grafice sezoniere fără a muta logo-ul sau orarul.',
    result:
      'Toate 3 locațiile prezintă acum o identitate unitară recunoscută de clienți. Actualizarea sezonieră pentru campania de iarnă a durat 2 ore pe locație față de 2 zile anterior. Clientul a extins contractul cu aplicarea sistemului pe 2 locații noi în 2024.',
    tags: ['Film perforat', 'Vitrine', 'Farmacie', 'Modular', 'Multi-locație'],
    materials: ['Film perforat 50/50 alb mat', 'Film de acoperire pentru interior', 'Primer suprafețe non-poroase'],
    dimensions: 'Suprafață totală: ~85mp pe 3 locații',
    duration: '1 săptămână producție + 3 zile aplicare',
    featured: false,
    placeholderColor: '#1A1F2E',
    accentColor: '#3B8CF7',
  },
  {
    slug: 'panou-stradal-parc-industrial-bistrita',
    number: '05',
    title: 'Panou stradal — Parc Industrial Bistrița',
    client: 'Parc Industrial Bistrița SA',
    category: 'Panouri stradale',
    categorySlug: 'panouri-stradale',
    year: '2023',
    location: 'Bistrița, zona industrială',
    shortDescription:
      'Rețea de 8 panouri de direcționare pentru parcul industrial, structuri zincate dublu față, rezistente la condiții extreme.',
    leadParagraph:
      'Parcul industrial cu 40+ de firme rezidente nu dispunea de un sistem clar de orientare internă. Vizitatorii și livrările ratau frecvent intrările. Am proiectat și instalat o rețea de 8 panouri de direcționare cu un sistem grafic de wayfinding clar, adaptat la gabaritul vehiculelor de marfă.',
    challenge:
      'Traficul parcului include TIR-uri cu lungime de 16m — indicatoarele trebuiau montate la înălțime minimă de 4.5m și să fie lizibile din cabina unui camion în mișcare. Condițiile meteo din zonă includ vânt puternic și îngheț. Terenul de fundație era parțial pietriș compactat, parțial beton.',
    solution:
      'Am ales structuri tubulare din oțel zincat la cald, dim. 100×100×4mm, încastrate în fundații de beton 60×60×80cm. Panourile față-verso sunt din dibond aluminiu 3mm cu grafice imprimate UV acoperite cu laminat anti-graffiti. Simbolurile de direcționare respectă standardele europene de signalizare rutieră adaptate la spații private.',
    result:
      'Fluxul intern al parcului s-a îmbunătățit semnificativ — administratorul parcului a raportat reducerea cu 70% a apelurilor de la livratori pierduți. Sistemul grafic a servit ca bază pentru harta digitală a parcului publicată pe website-ul acestuia.',
    tags: ['Outdoor', 'Wayfinding', 'Zincat', 'Dibond', 'Structuri metalice'],
    materials: ['Oțel zincat la cald 100×100×4mm', 'Dibond aluminiu 3mm', 'Laminat anti-graffiti', 'Fundație beton'],
    dimensions: '8 panouri, fiecare H 500 × W 1200mm, montate la H 4500mm',
    duration: '2 săptămâni producție + 3 zile montaj',
    featured: false,
    placeholderColor: '#1E1E1E',
    accentColor: '#F0A500',
  },
  {
    slug: 'banner-outdoor-festival-bistrita',
    number: '06',
    title: 'Banner outdoor — Festival Bistrița',
    client: 'Primăria Municipiului Bistrița',
    category: 'Bannere și printuri',
    categorySlug: 'bannere-printuri',
    year: '2023',
    location: 'Bistrița, centru și zone adiacente',
    shortDescription:
      'Tiraj de 120 bannere pentru ediția anuală a festivalului municipal — print UV pe polyester 300g, montaj bannere stradale și mesh pe fațade.',
    leadParagraph:
      'Festivalul anual al municipiului Bistrița necesita o prezență vizuală coerentă în tot orașul în 72 de ore de la comanda finală. Am livrat un set complet de materiale outdoor — de la bannere de 1×2m pe stâlpi la mesh-uri de fațadă de 6×4m — în termenul solicitat.',
    challenge:
      'Termenul de execuție era critic: 72 de ore de la aprobarea finală a designului. Tirajul de 120 bucăți implica managementul atent al producției în paralel. Unele locații de montaj erau fațade de clădiri cu restricții de acces care necesitau platformă elevatoare.',
    solution:
      'Am optimizat fluxul de producție pentru imprimare UV în două ture, folosind echipamentul Mimaki în ciclu continuu. Fiecare banner a ieșit din producție gata de montaj cu ochi metalici sudați și margini sudate. Echipa de montaj a lucrat în 3 echipe simultane cu platforme elevatoare pentru a acoperi tot orașul în o zi.',
    result:
      'Toate materialele au fost montate cu 12 ore înainte de deschiderea oficială a festivalului. Zero reclamații de calitate. Primăria a reînnoit contractul pentru ediția următoare cu un tiraj extins la 160 bucăți.',
    tags: ['Festival', 'Outdoor', 'UV print', 'Mesh', 'Tiraj mare'],
    materials: ['Polyester 300g/mp cu tratament UV', 'Mesh PVC 280g/mp perforat 35%', 'Ochi metalici inox', 'Cordelină elastică'],
    dimensions: 'Bannere: 1000×2000mm (×80 buc). Mesh fațadă: 6000×4000mm (×10 buc). Alte formate: ×30 buc',
    duration: '72 ore producție + 1 zi montaj',
    featured: false,
    placeholderColor: '#1A1A2E',
    accentColor: '#E84393',
  },
  {
    slug: 'print-canvas-galerie-sinagoga',
    number: '07',
    title: 'Print canvas — Galerie Sinagogă',
    client: 'Galeria de Artă Sinagogă Bistrița',
    category: 'Bannere și printuri',
    categorySlug: 'bannere-printuri',
    year: '2024',
    location: 'Bistrița, Sinagogă',
    shortDescription:
      'Tiraj limitat de reproduceri pe canvas pentru expoziția permanentă — print pigment giclée pe canvas 380g cu bordură oglindă, 22 lucrări.',
    leadParagraph:
      'Galeria de Artă Sinagogă din Bistrița căuta un partener tehnic pentru reproducerile de înaltă fidelitate ale colecției permanente. Am executat un tiraj de 22 reproduceri giclée pe canvas, cu management atent al culorilor calibrate la profilele ICC originale ale artiștilor.',
    challenge:
      'Reproducerile trebuiau să satisfacă standardele muzeale de fidelitate cromatică — fiecare lucrare a venit cu un profil ICC specific al artistului sau al fotografului de artă. Canvasul trebuia să reziste 50+ de ani fără decolorare în condiții de lumină naturală difuză specifice galeriei.',
    solution:
      'Am folosit imprimanta Epson SureColor SC-P9000 cu cerneți pigment UltraChrome HDX — gama cromatică acoperă 99% din spațiul Adobe RGB. Canvasul Breathing Color Pura 380g este certificat pentru 75 de ani longevitate în condiții standard. Softproofing pe monitor calibrat X-Rite i1Display Pro a asigurat apropierea maximă față de originale.',
    result:
      'Toate 22 de reproduceri au primit acceptul comisiei galeriei fără corecții. Directorul galeriei a declarat că acestea sunt „cele mai fidele reproduceri pe care le-am văzut în România". Colaborarea s-a extins cu 15 lucrări suplimentare pentru magazinul de suveniruri.',
    tags: ['Canvas', 'Giclée', 'Muzeal', 'ICC', 'Fine art print'],
    materials: ['Canvas Breathing Color Pura 380g', 'Cerneți pigment Epson UltraChrome HDX', 'Șasiu lemn brad 4cm', 'Lac protector UV mat'],
    dimensions: '22 lucrări, formate între 400×400mm și 1200×800mm',
    duration: '2 săptămâni (calibrare + producție + întindere)',
    featured: false,
    placeholderColor: '#1C1810',
    accentColor: '#C9A84C',
  },
  {
    slug: 'totem-publicitar-showroom-auto',
    number: '08',
    title: 'Totem publicitar — Showroom Auto',
    client: 'Showroom Auto Bistrița',
    category: 'Structuri publicitare',
    categorySlug: 'structuri-publicitare',
    year: '2024',
    location: 'Bistrița, E58',
    shortDescription:
      'Totem dublu față 5.5m cu casete luminoase interschimbabile, structură inox 316, vizibil de pe ambele sensuri ale drumului european.',
    leadParagraph:
      'Showroom-ul auto de pe E58 necesita o prezență vizuală care să capteze atenția conducătorilor auto la viteză. Am livrat un totem de 5.5m cu sistem de casete luminoase interschimbabile — clientul poate actualiza promoțiile lunar fără a apela la o firmă de publicitate.',
    challenge:
      'Locația era pe un drum european cu restricții clare privind publicitatea aeriană. Totemul trebuia să fie autorizat de DRDP Transilvania — un proces care necesita documentație tehnică completă cu calcule de rezistență. Vântul din zonă poate atinge 100 km/h, factorul de siguranță trebuia calculat la 150%.',
    solution:
      'Am realizat proiectul tehnic complet cu calcule de rezistență la vânt conform NP 082-04, care a obținut avizul DRDP. Structura este din profil rectangular inox 316 cu suduri certificate. Casetele luminoase sunt din acril 10mm cu LED-uri matrix uniform pentru uniformitate luminoasă garantată. Sistemul de fixare a casetelor permite înlocuire în 15 minute fără scule speciale.',
    result:
      'Totemul a primit autorizația DRDP și a fost instalat fără incidente. Clientul a raportat că 3 dintre primii 5 clienți noi din prima lună au menționat că l-au observat de pe E58. Actualizarea casetelor se face acum intern, fără costuri suplimentare de montaj.',
    tags: ['Totem', 'Auto', 'Inox 316', 'LED matrix', 'Autorizat DRDP'],
    materials: ['Inox 316 profil 150×150×5mm', 'Acril opal 10mm Plexiglas', 'LED matrix 5000K uniform', 'Sistem quick-release casete'],
    dimensions: 'H total 5500mm, corp totem 800×4000mm, fundație beton 100×100×120cm',
    duration: '6 săptămâni (proiect tehnic + autorizare + producție + montaj)',
    featured: true,
    placeholderColor: '#1C1C1E',
    accentColor: '#F0A500',
  },
]

export const portfolioCategories = [
  { slug: 'toate', label: 'Toate proiectele' },
  { slug: 'reclame-luminoase', label: 'Reclame luminoase' },
  { slug: 'inscriptionari-auto', label: 'Inscripționări auto' },
  { slug: 'litere-volumetrice', label: 'Litere volumetrice' },
  { slug: 'inscriptionari-vitrine', label: 'Inscripționări vitrine' },
  { slug: 'panouri-stradale', label: 'Panouri stradale' },
  { slug: 'bannere-printuri', label: 'Bannere și printuri' },
  { slug: 'structuri-publicitare', label: 'Structuri publicitare' },
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug)
}

export function getProjectsByCategory(categorySlug: string): PortfolioProject[] {
  if (categorySlug === 'toate') return portfolioProjects
  return portfolioProjects.filter((p) => p.categorySlug === categorySlug)
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured)
}
