export interface ServiceKB {
  id: string
  name: string
  shortDesc: string
  longDesc: string
  materials: string[]
  typicalSizes: string
  priceRangeIndicator: 'low' | 'medium' | 'high' | 'on-request'
  productionTime: string
  keywords: string[]
  faqs: Array<{ q: string; a: string; action?: { type: string; label: string; path: string } }>
}

export interface ChatAction {
  type: 'navigate'
  label: string
  path: string
}

export interface FAQ {
  q: string
  a: string
  action?: ChatAction
}

export const ATLAS_KNOWLEDGE = {
  company: {
    name: 'Atlas Reclame Bistrița',
    founded: 2014,
    address: 'Str. Dornei nr. 8, Bistrița, jud. Bistrița-Năsăud',
    phone: '+40 741 244 494',
    email: 'office@atlasreclame.ro',
    hours: {
      weekdays: '09:00 - 17:00',
      saturday: '09:00 - 13:00',
      sunday: 'Închis',
    },
    coverage: ['Bistrița', 'Bistrița-Năsăud', 'Cluj', 'Mureș', 'Maramureș', 'Sălaj'],
    deliveryTime: '3-7 zile lucrătoare pentru majoritatea proiectelor',
  },

  services: [
    {
      id: 'reclame-luminoase',
      name: 'Reclame Luminoase',
      shortDesc: 'Casete LED și neon cu bandă 12V',
      longDesc:
        'Producem casete luminoase cu LED SMD și neon flexibil pentru spații comerciale, restaurante și hoteluri. Profil aluminiu extrudat, fațetă plexiglas sau policarbonat difuz. Montaj și conexiune electrică incluse.',
      materials: ['aluminiu extrudat', 'plexiglas 3-5mm', 'bandă LED SMD 2835', 'driver LED IP65'],
      typicalSizes: '0.5m - 6m lățime',
      priceRangeIndicator: 'medium' as const,
      productionTime: '5-10 zile',
      keywords: [
        'led', 'neon', 'caseta', 'casetă', 'luminoasa', 'luminoasă', 'iluminat', 'noapte',
        'vitrina luminoasa', 'vitrină luminoasă', 'reclama luminoasa', 'reclamă luminoasă',
        'lightbox', 'backlit',
      ],
      faqs: [
        {
          q: 'Cât rezistă un LED?',
          a: 'LED-urile noastre au garanție 12 luni și durată estimată 50.000+ ore — echivalent 5-6 ani în funcționare continuă. Realimentarea cu noi LED-uri e o operație simplă după această perioadă.',
        },
        {
          q: 'Consumă mult curent o reclamă LED?',
          a: 'O casetă LED de 2m consumă ~30W, similar cu un bec normal. Față de un neon clasic cu același gabarit, consumul e de 4-5 ori mai mic. Investiția se amortizează rapid.',
        },
        {
          q: 'Se poate folosi outdoor o reclamă luminoasă?',
          a: 'Da, toate casetele noastre sunt minim IP65, rezistente la ploaie, îngheț și UV. Le montăm pe fațade, în parcări acoperite sau orice expunere exterioară.',
        },
        {
          q: 'Includeți montajul?',
          a: 'Da. Montaj și conexiune la tabloul electric existent sunt incluse în ofertă. Nu includem cablare extensivă în pereți.',
        },
      ],
    },
    {
      id: 'litere-volumetrice',
      name: 'Litere Volumetrice',
      shortDesc: 'Aluminiu și plexiglas — frontlit sau halo',
      longDesc:
        'Litere individuale 3D din aluminiu tăiat laser, cu adâncime 50-200mm. Iluminare frontală, halo sau mixtă. Fixare cu suporți invizibili. Cel mai premium format de semnalistică exterioară.',
      materials: ['aluminiu 1-2mm tăiat laser', 'plexiglas colorat 50+ culori', 'PVC expandat', 'bandă LED intern'],
      typicalSizes: '50mm - 600mm înălțime per literă',
      priceRangeIndicator: 'high' as const,
      productionTime: '7-14 zile',
      keywords: [
        'litere', 'litere volumetrice', 'litere 3d', '3d', 'volumetric', 'halo',
        'channel letters', 'litera', 'frontlit', 'logo 3d', 'litera aluminiu',
      ],
      faqs: [
        {
          q: 'Ce adâncime recomandați pentru litere exterioare?',
          a: 'Minim 80mm pentru exterior — adâncimea creează umbra care face litera vizibilă din unghi. Pentru efect halo vizibil, 100-120mm e optimul.',
        },
        {
          q: 'Puteți reproduce logoul exact?',
          a: 'Da, cu condiția să aveți logoul în format vectorial (AI, EPS, SVG sau PDF). Dacă aveți doar JPEG, reconstruim vectorul cu o taxă suplimentară mică.',
        },
        {
          q: 'Rezistă literele la ploaie și îngheț?',
          a: 'Aluminiul și plexiglasul sunt materiale outdoor by design. IP65. Am montat litere acum 8 ani care arată la fel și azi.',
        },
      ],
    },
    {
      id: 'inscriptionari-auto',
      name: 'Inscripționări Auto',
      shortDesc: 'Folie 3M și Oracal — wrap parțial sau complet',
      longDesc:
        'Inscripționăm vehicule individuale sau flote cu folii 3M Controltac și Oracal 970RA. De la logo și date contact până la wrap full-color. Garanție 24 luni, nu afectează vopseaua.',
      materials: ['3M Controltac 1080', 'Oracal 970RA', 'Oracal 651/751', 'laminat UV'],
      typicalSizes: 'Orice vehicul: autoturism, dubă, camion',
      priceRangeIndicator: 'medium' as const,
      productionTime: '1-5 zile (după design)',
      keywords: [
        'auto', 'masina', 'mașina', 'mașină', 'inscriptionare', 'inscripționare',
        'inscriptionari', 'inscripționări', 'folie', 'wrap', 'vehicul', 'duba', 'dubă',
        'camion', 'flota', 'flotă', 'logo masina', 'reclama auto', 'reclamă auto',
      ],
      faqs: [
        {
          q: 'Afectează folia vopseaua mașinii?',
          a: 'Nu, dacă vopseaua e în stare bună și folia e calitate 3M sau Oracal cast. Recomandăm dezlipire profesională după 3+ ani pentru orice risc de decolorare.',
        },
        {
          q: 'Cât durează o inscripționare simplă?',
          a: '2-4 ore pentru logo + telefon pe un vehicul standard. Programezi dimineața, ridici la prânz.',
        },
      ],
    },
    {
      id: 'inscriptionari-vitrine',
      name: 'Inscripționări Vitrine',
      shortDesc: 'Folie sablată, colorată sau perforată',
      longDesc:
        'Personalizăm vitrine cu folii adezive pentru branding comercial, intimitate selectivă și decorare. Ore program, logouri, grafică complexă full-color sau folie sablată.',
      materials: ['folie sablată Oracal', 'folie one-way perforată', 'folie colorată opacă', 'folie print digital'],
      typicalSizes: 'Orice dimensiune vitrină',
      priceRangeIndicator: 'low' as const,
      productionTime: '1-3 zile',
      keywords: [
        'vitrina', 'vitrină', 'geam', 'sablat', 'sablată', 'folie vitrina', 'folie geam',
        'perforat', 'one-way', 'program', 'ore program', 'magazin', 'inscriptionare vitrina',
      ],
      faqs: [
        {
          q: 'Puteți pune programul de lucru pe geam?',
          a: 'Absolut. Este unul dintre cele mai frecvente servicii — tăiem literele și cifrele individual și le aplicăm la înălțimea dorită pe vitrină.',
        },
        {
          q: 'Se dezlipește folia fără a deteriora geamul?',
          a: 'Da. Foliile de calitate (Oracal, 3M) se dezlipesc fără reziduuri. Recomandăm dezlipire profesională dacă folia e mai veche de 5 ani.',
        },
      ],
    },
    {
      id: 'bannere-printuri',
      name: 'Bannere & Printuri',
      shortDesc: 'Mesh, frontlit, PVC — până la 5m lățime',
      longDesc:
        'Printăm bannere pentru exterior și interior la orice dimensiune, fără cusătură verticală pe formate standard. PVC 440g frontlit, mesh 270g, blockout, textil. Ileti, sudare margini incluse.',
      materials: ['PVC frontlit 440g', 'Mesh 270g', 'Blockout 500g', 'textil poliester'],
      typicalSizes: 'Orice dimensiune, lățime max 5m',
      priceRangeIndicator: 'low' as const,
      productionTime: '1-3 zile',
      keywords: [
        'banner', 'bannere', 'print', 'pvc', 'mesh', 'frontlit', 'outdoor',
        'santier', 'șantier', 'eveniment', 'festival', 'roll-up', 'x-banner',
        'panou publicitar', 'afis', 'afiș',
      ],
      faqs: [
        {
          q: 'Care e rezoluția minimă pentru un banner mare?',
          a: '72 DPI la dimensiunea reală e suficient pentru vizionare de la 2-3m. Nu trimiteți JPEG comprimate.',
        },
        {
          q: 'Livrați bannere prin curier?',
          a: 'Da, livrăm în toată România. Bannerele se rulează compact. Termenul de livrare se adaugă la cel de producție.',
        },
      ],
    },
    {
      id: 'tablouri-personalizate',
      name: 'Tablouri Personalizate',
      shortDesc: 'Print canvas pe șasiu de lemn',
      longDesc:
        'Tablouri pe canvas, aluminiu dibond sau forex. Cerneală pigmentată UV-rezistentă 50+ ani. Gata de agățat, cu sistem de prindere. Ideal cadouri corporate sau decorare HORECA.',
      materials: ['canvas 380g bumbac-poliester', 'șasiu brad 18mm', 'aluminiu dibond 3mm', 'forex 5mm'],
      typicalSizes: '20x30cm până la 200x100cm',
      priceRangeIndicator: 'low' as const,
      productionTime: '3-5 zile',
      keywords: [
        'tablou', 'tablouri', 'canvas', 'foto', 'fotografie', 'print canvas',
        'cadou', 'personalizat', 'dibond', 'decorare', 'interior',
      ],
      faqs: [
        {
          q: 'Ce rezoluție trebuie să aibă fotografia?',
          a: 'Minim 1500px pe latura scurtă pentru tablouri până în 50cm. Trimiteți fișierul și vă spunem dacă e ok înainte de comandă.',
        },
      ],
    },
    {
      id: 'carti-de-vizita-flyere',
      name: 'Cărți de Vizită & Flyere',
      shortDesc: 'Tipar digital și offset, finisaje premium',
      longDesc:
        'Cărți de vizită, flyere, pliante. Laminare mat/lucios, soft-touch, UV selectiv. Digital de la 50 buc, offset de la 500 buc. Livrare 24-48h digital.',
      materials: ['hârtie coated 350g', 'hârtie soft-touch', 'hârtie offset 130g', 'carton kraft'],
      typicalSizes: 'Orice format — A6, A5, A4, personalizat',
      priceRangeIndicator: 'low' as const,
      productionTime: '1-7 zile (digital/offset)',
      keywords: [
        'carte de vizita', 'carte de vizită', 'carti de vizita', 'cărți de vizită',
        'flyer', 'flyere', 'pliant', 'pliante', 'tipar', 'tipografie', 'print mic',
        'meniu', 'meniuri', 'invitatie', 'invitație',
      ],
      faqs: [
        {
          q: 'Care e cantitatea minimă pentru cărți de vizită?',
          a: 'Digital: de la 50 buc. Sub 50 buc e posibil dar prețul per bucată e mai ridicat. Offset: de la 500 buc.',
        },
        {
          q: 'Faceți și design pentru cărți de vizită?',
          a: 'Da, putem prelua textul și logoul și crea un design simplu și funcțional. Design complex se cotează separat.',
        },
      ],
    },
    {
      id: 'panouri-stradale',
      name: 'Panouri Stradale',
      shortDesc: 'Structuri metalice cu print backlit sau frontlit',
      longDesc:
        'Panouri stradale pe structuri metalice oțel galvanizat, fundație betonată. Autorizare inclusă cu dosarul. Fețe schimbabile, backlit sau frontlit. Format standard 4x3m.',
      materials: ['oțel galvanizat S235', 'aluminiu dibond 3mm', 'PVC frontlit 440g', 'beton C20/25'],
      typicalSizes: 'Standard 4x3m, personalizat la cerere',
      priceRangeIndicator: 'high' as const,
      productionTime: '2-4 săptămâni (inclusiv avize)',
      keywords: [
        'panou stradal', 'panou publicitar', 'billboard', 'totem', 'outdoor',
        'structura', 'structură', 'stradal', 'billboard', 'autorizatie',
      ],
      faqs: [
        {
          q: 'Am nevoie de autorizație pentru un panou stradal?',
          a: 'Da, pentru orice panou vizibil din domeniul public. Vă ajutăm cu dosarul de autorizare — știm ce solicită fiecare primărie din județ.',
        },
      ],
    },
    {
      id: 'tricouri-personalizate',
      name: 'Tricouri Personalizate',
      shortDesc: 'Serigrafie, DTF, transfer termic',
      longDesc:
        'Personalizăm tricouri, hanorace, șepci prin DTF (de la 1 buc), serigrafie (de la 30 buc) sau transfer termic. Lucrăm pe material propriu sau al clientului.',
      materials: ['film DTF 75 microni', 'vinil transfer termic', 'cerneală serigrafică', 'textile AS Colour/Gildan'],
      typicalSizes: 'De la XS la 3XL',
      priceRangeIndicator: 'low' as const,
      productionTime: '2-5 zile',
      keywords: [
        'tricou', 'tricouri', 'hanorac', 'hanorace', 'textil', 'textile',
        'dtf', 'serigrafie', 'transfer', 'uniforma', 'uniformă', 'echipa', 'echipă',
        'personalizat', 'logo tricou',
      ],
      faqs: [
        {
          q: 'Care e cantitatea minimă pentru tricouri?',
          a: 'DTF: de la 1 bucată — ideal pentru comenzi mici sau individuale. Serigrafie: minim 30 buc pe același design.',
        },
      ],
    },
    {
      id: 'printuri-mari-dimensiuni',
      name: 'Printuri Mari Dimensiuni',
      shortDesc: 'Plotter ecosolvent — format până la 1.6m',
      longDesc:
        'Grafică la dimensiuni mari pe vinil autoadeziv, banner, canvas, hârtie foto. Cerneală UV rezistentă. Print+cut pentru forme complexe sub 90cm.',
      materials: ['vinil autoadeziv Oracal', 'laminat UV 75 microni', 'textil banner 260g', 'hârtie foto HP'],
      typicalSizes: 'Lățime max 1.6m, lungime nelimitată',
      priceRangeIndicator: 'low' as const,
      productionTime: '1-3 zile',
      keywords: [
        'print mare', 'print larg', 'vinil', 'autocolant', 'sticker', 'plotter',
        'ecosolvent', 'format mare', 'decorare pereti', 'decorare pereți',
        'window display', 'print uv',
      ],
      faqs: [
        {
          q: 'Printați și tăiați după contur?',
          a: 'Da, cu plotterul de tăiere Roland pentru materiale până la 90cm lățime. Tăierea e inclusă în preț.',
        },
      ],
    },
    {
      id: 'colantari-auto',
      name: 'Colantări Auto',
      shortDesc: 'Wrap complet sau parțial, folii premium',
      longDesc:
        'Schimbăm culoarea sau designul vehiculului cu folii 3M 1080 și Hexis — 150+ finisaje: mat, satinat, carbon, cromat. Nu afectează vopseaua originală. Garanție 12 luni.',
      materials: ['3M 1080 Series', 'Hexis Bodyfence PPF', 'Avery Dennison SW900', 'laminat protecție UV'],
      typicalSizes: 'Hatchback, sedan, SUV, van',
      priceRangeIndicator: 'high' as const,
      productionTime: '3-5 zile',
      keywords: [
        'colantare', 'colantări', 'wrap', 'car wrap', 'folie culoare', 'carbon',
        'mat', 'schimb culoare', 'wrap auto', 'wrap masina', 'wrap mașină',
        'folie 3m', 'ppf', 'protectie vopsea',
      ],
      faqs: [
        {
          q: 'Cât costă un wrap complet?',
          a: 'Un hatchback mic cu folie solidă: 800-1.200€. Un SUV mare cu folie carbon sau specială: 2.000-3.500€. Oferta exactă după inspecție.',
        },
        {
          q: 'Cât durează folia pe mașină?',
          a: '5-7 ani pentru folii premium. Evitați spălarea automată cu perii dure — spălare manuală sau fără contact e OK.',
        },
      ],
    },
    {
      id: 'print-textile',
      name: 'Print Textile',
      shortDesc: 'DTG, sublimare, transfer pe bumbac sau poliester',
      longDesc:
        'Print full-color direct pe textile prin DTG (bumbac, de la 1 buc) sau sublimare termică (poliester, culori permanente). Merchandise, colecții, articole promoționale.',
      materials: ['film sublimare', 'cerneală DTG Epson UltraChrome', 'articole poliester 100%', 'bumbac pretratat'],
      typicalSizes: 'De la XS la 3XL, suprafețe plane',
      priceRangeIndicator: 'low' as const,
      productionTime: '2-5 zile',
      keywords: [
        'sublimare', 'dtg', 'print textil', 'textil', 'merchandise',
        'sublimere', 'tricou sport', 'perna', 'pernă', 'articole promotionale',
      ],
      faqs: [
        {
          q: 'Care e diferența DTG vs sublimare?',
          a: 'Sublimarea dă culori mai vibrante dar merge doar pe poliester deschis. DTG merge pe orice bumbac, culori ușor mai puțin saturate dar fără restricție de material.',
        },
      ],
    },
    {
      id: 'print-canvas',
      name: 'Print Canvas',
      shortDesc: 'Canvas mat pe șasiu interior',
      longDesc:
        'Tablouri canvas interior pe șasiu brad 18mm. Cerneală pigmentată UV, rezistentă 50+ ani. Formate 20x30cm la 200x100cm. Gallery wrap sau float frame opțional.',
      materials: ['canvas 380g bumbac-poliester', 'șasiu brad 18mm', 'cerneală pigmentată UV', 'float frame aluminiu (opțional)'],
      typicalSizes: '20x30cm până la 200x100cm',
      priceRangeIndicator: 'low' as const,
      productionTime: '3-5 zile',
      keywords: [
        'canvas', 'print canvas', 'tablou canvas', 'foto canvas', 'arta', 'artă',
        'galerie', 'reproduc', 'reproducere', 'giclée', 'fine art',
      ],
      faqs: [
        {
          q: 'Cât rezistă cerneala pe canvas?',
          a: 'Cerneala pigmentată rezistă 50+ ani la interior fără decolorare vizibilă dacă tabloul nu e expus direct la soare intens.',
        },
      ],
    },
    {
      id: 'print-digital',
      name: 'Print Digital UV',
      shortDesc: 'UV direct pe materiale rigide: alu, plexi, lemn',
      longDesc:
        'Print UV direct pe aluminiu anodizat, plexiglas, forex, MDF, ceramică. Fără lipire de folie. Rezistent la zgârieturi, waterproof. Efect 3D în straturi multiple.',
      materials: ['cerneală UV Epson/Roland', 'aluminiu anodizat', 'plexiglas 3-10mm', 'MDF 3-18mm'],
      typicalSizes: 'Max 60x90cm per piesă flatbed',
      priceRangeIndicator: 'medium' as const,
      productionTime: '2-5 zile',
      keywords: [
        'print digital', 'print uv', 'uv', 'placheta', 'plăcuță', 'numerotare',
        'alu', 'dibond', 'aluminiu', 'cupa', 'cupă', 'ceramic', 'ceramică', 'flatbed',
      ],
      faqs: [
        {
          q: 'Puteți printa pe obiecte (căni, cupe)?',
          a: 'Da, pe articole plane sau ușor curbate până la 10cm înălțime. Cupe cilindrice — disponibil prin rotare.',
        },
      ],
    },
    {
      id: 'structuri-publicitare',
      name: 'Structuri Publicitare',
      shortDesc: 'Totemuri, panouri, suporturi metalice',
      longDesc:
        'Totemuri luminoase, panouri dublu față, suporturi direcționale. Oțel galvanizat, calcul structural pentru vânt, autorizare inclusă. Durată viață 15+ ani.',
      materials: ['oțel S235 galvanizat', 'vopsea electrostatică RAL', 'aluminiu extrudat', 'beton armat C20/25'],
      typicalSizes: '1m - 8m înălțime',
      priceRangeIndicator: 'on-request' as const,
      productionTime: '4-8 săptămâni (inclusiv avize)',
      keywords: [
        'structura', 'structură', 'totem', 'totemuri', 'pylon', 'structuri publicitare',
        'suport publicitar', 'stâlp', 'stalp', 'montaj', 'instalare',
      ],
      faqs: [
        {
          q: 'Oferiți garanție pentru structuri?',
          a: '5 ani garanție structurală, 2 ani pe componente electrice pentru totemuri. Durata de viață a structurii: 15+ ani.',
        },
      ],
    },
  ] as ServiceKB[],

  faqs_general: [
    {
      q: 'Câte zile durează o lucrare?',
      a: 'Depinde de proiect. O carte de vizită — 1-2 zile. O reclamă LED — 5-10 zile. Un wrap auto complet — 3-5 zile după aprobarea designului. O structură cu avize — 4-8 săptămâni. Pentru estimare exactă, trimite-ne detaliile la /contact.',
      action: { type: 'navigate' as const, label: 'Cere ofertă', path: '/contact' },
    },
    {
      q: 'Faceți și design?',
      a: 'Da, includem design în prețul producției. Pornim de la brief-ul tău sau o idee, facem 2-3 propuneri și iterăm până ești mulțumit. Design complex pentru proiecte mari se cotează separat.',
    },
    {
      q: 'Aveți portofoliu cu lucrări?',
      a: 'Da, poți vedea lucrările noastre pe pagina /portofoliu — restaurante, hoteluri, transport, magazine și parcuri industriale.',
      action: { type: 'navigate' as const, label: 'Vezi portofoliul', path: '/portofoliu' },
    },
    {
      q: 'Lucrați și în afara Bistriței?',
      a: 'Da, acoperim Bistrița-Năsăud, Cluj, Mureș, Maramureș și Sălaj. Pentru montaj în afara județului există un cost suplimentar de transport și deplasare.',
    },
    {
      q: 'Lucrați în Cluj?',
      a: 'Da, acoperim județul Cluj și toată zona de nord-vest a țării. Transport și montaj se adaugă în ofertă.',
    },
    {
      q: 'Cum dau o comandă?',
      a: 'Cel mai simplu: completează formularul de contact cu dimensiunile, materialul dorit și termenul. Răspundem în 24h cu ofertă personalizată.',
      action: { type: 'navigate' as const, label: 'Cere ofertă', path: '/contact' },
    },
    {
      q: 'Acceptați plata în rate?',
      a: 'Pentru proiecte peste 2.000€ putem discuta 2 tranșe: 50% avans, 50% la livrare. Pentru proiecte mai mari, discutăm individual.',
    },
    {
      q: 'Garanție?',
      a: 'Casete LED — 12 luni componente electronice. Folii wrap auto 3M/Oracal — 24 luni. Structuri metalice — 5 ani structural. Bannere outdoor — 1 an. Plus support tehnic pe durata garanției.',
    },
    {
      q: 'Aveți program de weekend?',
      a: 'Sâmbătă 09:00-13:00, duminică închis. Pentru urgențe ne poți contacta la +40 741 244 494.',
    },
    {
      q: 'Care sunt orele de program?',
      a: 'Luni-Vineri 09:00-17:00, Sâmbătă 09:00-13:00, duminică închis.',
    },
    {
      q: 'Unde sunteți localizați?',
      a: 'Str. Dornei nr. 8, Bistrița, jud. Bistrița-Năsăud. Puteți veni direct la atelier în program sau suna la +40 741 244 494 pentru o programare.',
    },
    {
      q: 'Ce email aveți?',
      a: 'office@atlasreclame.ro — pentru oferte și proiecte noi. Răspundem în 24h lucrătoare.',
    },
    {
      q: 'Produceți reclame luminoase LED?',
      a: 'Da, reclame luminoase LED sunt unul dintre serviciile noastre principale. Producem casete LED, litere volumetrice iluminate și totemuri. Timp producție 5-10 zile, garanție 12 luni.',
      action: { type: 'navigate' as const, label: 'Detalii reclame LED', path: '/servicii/reclame-luminoase' },
    },
    {
      q: 'Faceți wrap auto complet?',
      a: 'Da, facem wrap complet (schimbare culoare) și inscripționări cu folii 3M și Oracal premium. Hatchback mic 800-1.200€, SUV mare 2.000-3.500€. Garanție 12 luni.',
      action: { type: 'navigate' as const, label: 'Detalii wrap auto', path: '/servicii/colantari-auto' },
    },
    {
      q: 'Aveți experiență?',
      a: 'Suntem activi din 2014 — peste 10 ani de producție publicitară fizică în Bistrița. Am livrat 1.247 proiecte, aproximativ 125 pe an.',
    },
    {
      q: 'Câți ani aveți de activitate?',
      a: 'Am fondat Atlas Reclame în 2014 — peste 10 ani de producție publicitară continuă în Bistrița-Năsăud.',
    },
    {
      q: 'Câte proiecte ați făcut?',
      a: 'Peste 1.247 proiecte livrate din 2014, aproximativ 125 pe an. Clienți din Bistrița-Năsăud, Cluj, Mureș, Maramureș.',
    },
    {
      q: 'Printați bannere mari?',
      a: 'Da, printăm bannere la orice dimensiune pe plotterele ecosolvent — lățime până la 5m. PVC frontlit, mesh pentru vânt, blockout, textil pentru interior.',
      action: { type: 'navigate' as const, label: 'Detalii bannere', path: '/servicii/bannere-printuri' },
    },
    {
      q: 'Faceți inscripționări pe vitrine?',
      a: 'Da — folie sablată, colorată, perforată one-way sau print full-color. Ore program, logouri, grafică complexă. Durată aplicare: 2-4 ore pe vitrină standard.',
      action: { type: 'navigate' as const, label: 'Detalii vitrine', path: '/servicii/inscriptionari-vitrine' },
    },
    {
      q: 'Faceți tricouri personalizate?',
      a: 'Da, prin DTF de la 1 bucată sau serigrafie de la 30 buc. Lucrăm pe material propriu sau al clientului.',
      action: { type: 'navigate' as const, label: 'Detalii tricouri', path: '/servicii/tricouri-personalizate' },
    },
    {
      q: 'Faceți structuri metalice pentru publicitate?',
      a: 'Da — totemuri luminoase de la 1m la 8m, panouri dublu față, suporturi direcționale. Calcul structural, autorizare, montaj incluse.',
      action: { type: 'navigate' as const, label: 'Detalii structuri', path: '/servicii/structuri-publicitare' },
    },
    {
      q: 'Trimiteți în toată România?',
      a: 'Da, bannerele și printurile le livrăm prin curier în toată România. Montajul e disponibil în zona de nord-vest (BN, CJ, MS, MM, SJ). Pentru alte județe discutăm individual.',
    },
    {
      q: 'Puteți urgenta o comandă?',
      a: 'Da, pentru urgențe reale discutăm disponibilitatea — unele produse pot fi accelerate la 24-48h cu suprataxă de urgentare. Sunați la +40 741 244 494.',
    },
    {
      q: 'Cât costă o reclamă luminoasă de 3 metri?',
      a: 'Prețul depinde de materiale, complexitate grafică și tipul de iluminare. O casetă standard 3m × 0.6m cu LED și plexiglas difuz pornește de la ~400-600€ + montaj. Pentru ofertă exactă pe proiectul tău, trimite-ne dimensiunile la /contact.',
      action: { type: 'navigate' as const, label: 'Cere ofertă', path: '/contact' },
    },
    {
      q: 'Ce materiale folosiți pentru reclame?',
      a: 'Aluminiu extrudat pentru cadrele casetelor, plexiglas 3-5mm pentru fațetă, bandă LED SMD 2835 pentru iluminare, Oracal și 3M pentru folii, oțel galvanizat pentru structuri portante.',
    },
    {
      q: 'Faceți montaj?',
      a: 'Da, montaj la locație inclus pentru reclame luminoase, litere volumetrice, panouri stradale și structuri. Pentru inscripționări auto și bannere, predăm sau instalăm după caz.',
    },
    {
      q: 'Aveți showroom sau atelier?',
      a: 'Da, atelierul nostru e la Str. Dornei nr. 8, Bistrița. Puteți veni să vedeți mostrele de materiale și lucrările finalizate. Program: Luni-Vineri 09:00-17:00, Sâmbătă 09:00-13:00.',
    },
    {
      q: 'Faceți și litere pentru restaurante?',
      a: 'Da, litere volumetrice pentru restaurante și HORECA sunt printre cele mai frecvente proiecte ale noastre. Vedeți proiectul Restaurant Crâng din portofoliu ca exemplu.',
      action: { type: 'navigate' as const, label: 'Proiect restaurant', path: '/portofoliu/reclama-luminoasa-restaurant-crang' },
    },
    {
      q: 'Lucrați cu hoteluri?',
      a: 'Da, avem experiență cu hoteluri — litere fațadă, totemuri, semnalistică internă. A se vedea proiectul Hotel Coroana din portofoliu.',
      action: { type: 'navigate' as const, label: 'Proiect hotel', path: '/portofoliu/litere-volumetrice-hotel-coroana' },
    },
  ] as FAQ[],

  intents: {
    greeting: {
      patterns: ['salut', 'buna', 'bună', 'hey', 'hi', 'hello', 'ciao', 'neata', 'neatza', 'buna ziua', 'bună ziua', 'buna dimineata', 'buna seara'],
      responses: [
        'Salut! Sunt asistentul Atlas Reclame. Cu ce te pot ajuta?',
        'Bună! Te pot ajuta cu informații despre servicii, prețuri sau portofoliu. Ce te interesează?',
        'Hei! Întreabă-mă orice despre reclame luminoase, printuri, wrap-uri auto sau structuri publicitare.',
        'Bună ziua! Sunt asistentul Atlas Reclame. Cum te pot ajuta?',
      ],
    },
    pricing: {
      patterns: [
        'pret', 'preț', 'pretu', 'prețu', 'preturi', 'prețuri', 'cat costa', 'cât costă',
        'cat e', 'cât e', 'tarif', 'oferta', 'ofertă', 'estimare', 'buget', 'scump', 'ieftin',
        'cat platesc', 'cât plătesc', 'cost', 'costuri', 'pret aproximativ', 'preț aproximativ',
      ],
      fallback: 'Prețurile depind de dimensiuni, materiale și complexitate — fiecare proiect e unic. Cel mai rapid e să ne trimiți dimensiunile și termenul dorit la /contact. Răspundem cu ofertă în 24h.',
      action: { type: 'navigate' as const, label: 'Cere ofertă', path: '/contact' },
    },
    contact: {
      patterns: [
        'contact', 'telefon', 'email', 'adresa', 'adresă', 'unde sunteti', 'unde sunteți',
        'cum va gasesc', 'cum vă găsesc', 'program', 'deschis', 'inchis', 'închis',
        'ore', 'orar', 'luni', 'vineri', 'sambata', 'sâmbătă', 'duminica', 'duminică',
        'str ', 'strada', 'stradă', 'locatie', 'locație', 'vin la voi',
      ],
      response: 'Str. Dornei nr. 8, Bistrița — Luni-Vineri 09:00-17:00, Sâmbătă 09:00-13:00.\n\n+40 741 244 494\noffice@atlasreclame.ro',
      action: { type: 'navigate' as const, label: 'Pagina contact', path: '/contact' },
    },
    portfolio: {
      patterns: [
        'portofoliu', 'lucrari', 'lucrări', 'exemple', 'proiecte', 'ce ati facut',
        'ce ați făcut', 'referinte', 'referințe', 'clienti', 'clienți', 'am vazut',
      ],
      response: 'Avem proiecte pentru restaurante, hoteluri, transport, magazine și parcuri industriale în Bistrița-Năsăud. Poți vedea toate lucrările pe pagina de portofoliu:',
      action: { type: 'navigate' as const, label: 'Vezi portofoliu', path: '/portofoliu' },
    },
    services_list: {
      patterns: [
        'ce faceti', 'ce faceți', 'ce servicii', 'ce produceti', 'ce produceți',
        'ce oferiti', 'ce oferiți', 'ce lucrari', 'ce lucrări', 'lista servicii', 'servicii',
        'produse', 'ce mai faceti', 'ce mai faceți',
      ],
      response: 'Producem 15 categorii de reclame și materiale publicitare:\n\n● Reclame luminoase LED\n● Litere volumetrice 3D\n● Inscripționări și wrap-uri auto\n● Inscripționări vitrine\n● Bannere și printuri mari\n● Tablouri personalizate canvas\n● Cărți de vizită și flyere\n● Panouri stradale\n● Tricouri și textile personalizate\n● Colantări auto wrap complet\n● Print textile DTG/sublimare\n● Print canvas interior\n● Print digital UV pe rigide\n● Printuri mari dimensiuni\n● Structuri publicitare metalice',
      action: { type: 'navigate' as const, label: 'Toate serviciile', path: '/servicii' },
    },
    fallback: {
      response: 'Nu sunt sigur că am înțeles complet. Pot să te ajut cu:\n\n● Informații despre servicii\n● Estimări orientative de preț\n● Program și contact atelier\n● Portofoliu și exemple de lucrări\n\nPentru orice proiect specific, contactul direct e cel mai rapid:',
      action: { type: 'navigate' as const, label: 'Contact direct', path: '/contact' },
    },
  },
} as const
