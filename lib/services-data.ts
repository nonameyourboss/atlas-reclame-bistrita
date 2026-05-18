export interface ServiceMaterial {
  name: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  number: string
  name: string
  shortDescription: string
  leadParagraph: string
  fullDescription: string[]
  materials: ServiceMaterial[]
  applications: string[]
  ctaText: string
  tag: string
  category: 'Iluminat' | 'Inscripționări' | 'Print' | 'Textile' | 'Outdoor' | 'Structuri'
  faq: ServiceFAQ[]
}

export const SERVICES: Service[] = [
  {
    slug: 'reclame-luminoase',
    number: '01',
    name: 'Reclame Luminoase',
    shortDescription: 'Casete LED și neon cu bandă 12V.',
    leadParagraph:
      'Producem reclame luminoase cu LED sau neon pe bandă pentru spații comerciale, restaurante, hoteluri și zone industriale din Bistrița și județul Bistrița-Năsăud.',
    fullDescription: [
      'O reclamă luminoasă bună nu atrage atenția prin intensitate — o atrage prin claritate. Producem casete luminoase cu LED SMD, bandă 12V și transformatoare de calitate, cu profil aluminiu extrudat și fațetă plexiglas sau policarbonat difuz.',
      'Fiecare lucrare pleacă de la macheta aprobată de client. Lucrăm cu tipografii de la Arial până la fonturi personalizate, cu imagini full-color, logouri și combinații mixte. Puterea de iluminare se ajustează la comanda clientului — mai mult sau mai puțin, în funcție de amplasament.',
      'Montăm direct la locație. Includem conexiunea la tablou, testarea și predarea cu bon de garanție. Dacă ați mai avut o reclamă la același amplasament, înlocuim fara costuri suplimentare de structură — dacă suportul e bun.',
    ],
    materials: [
      { name: 'LED SMD 2835/5050', description: 'Bandă LED de calitate premium, minim 50.000 ore de viață.' },
      { name: 'Plexiglas 3-5mm', description: 'Fațetă difuză sau transparentă, rezistentă la UV și intemperii.' },
      { name: 'Profil aluminiu extrudat', description: 'Caseta-cadru rezistentă la coroziune, finisaj natural sau anodizat.' },
      { name: 'Driver LED', description: 'Alimentator de calitate, montat intern, protejat la umiditate.' },
    ],
    applications: [
      'Reclame fațadă pentru magazine și restaurante',
      'Indicatoare luminoase pentru parcări sau intrări',
      'Casete luminoase interioare (recepții, showroom)',
      'Reclame cu temporizator noapte / zi',
      'Backlit banere și lightbox-uri de interior',
    ],
    ctaText: 'Cere ofertă pentru reclamă luminoasă',
    tag: 'LED / Neon',
    category: 'Iluminat',
    faq: [
      {
        question: 'Cât durează producția unei reclame luminoase?',
        answer:
          'De obicei între 5 și 10 zile lucrătoare de la aprobarea machetei. Proiectele urgente se pot accelera la 3-4 zile, cu discuție prealabilă.',
      },
      {
        question: 'Includeți montajul și conexiunea electrică?',
        answer:
          'Da. Includem montajul și conexiunea la tabloul electric existent. Nu includem lucrările de electricitate în perete (cablare extinsă) — dar vă indicăm un electrician autorizat.',
      },
      {
        question: 'Există garanție pentru reclamele luminoase?',
        answer:
          'Oferim 12 luni garanție pe componentele electronice (driver + LED). Structura aluminiu nu are restricții de garanție în condiții normale de utilizare.',
      },
    ],
  },
  {
    slug: 'litere-volumetrice',
    number: '02',
    name: 'Litere Volumetrice',
    shortDescription: 'Aluminiu și plexiglas. Frontlit sau halo.',
    leadParagraph:
      'Literele volumetrice individuale (channel letters) dau identitate vizuală fațadelor comerciale. Le producem din aluminiu, plexiglas sau PVC expandat, iluminate sau neilluminate.',
    fullDescription: [
      'Literele volumetrice sunt cea mai premium formă de signalistică exterioară. Spre deosebire de o casetă luminoasă plată, fiecare literă e un obiect tridimensional cu adâncime, umbre și prezență fizică.',
      'Producem litere individuale cu adâncime de la 50mm la 200mm, din aluminiu tăiat laser și îndoit la CNC, sau din PVC expandat pentru interior. Iluminarea poate fi frontală (LED vizibil prin fațetă), halo (lumina iese prin spatele literei pe perete), sau mixtă.',
      'Fixarea se face cu suporți invizibili (racletă sau distanțieri) sau cu șabloane de montaj livrate odată cu literele. Predăm complet cu instrucțiuni de montaj sau cu echipa noastră la locație.',
    ],
    materials: [
      { name: 'Aluminiu 1-2mm', description: 'Corp lateral și spate, tăiat laser și îndoit CNC.' },
      { name: 'Plexiglas colorat sau difuz', description: 'Fațetă frontală, disponibil în 50+ culori RAL și Pantone.' },
      { name: 'PVC expandat 10-20mm', description: 'Alternativă pentru interior sau bugete mai mici.' },
      { name: 'Bandă LED frontlit / halo', description: 'Iluminare internă uniformă, fără zone moarte.' },
    ],
    applications: [
      'Logouri pe fațade de clădiri',
      'Denumiri magazine și restaurante',
      'Indicatoare hotel — recepție, etaje',
      'Branding interior showroom și recepție',
      'Litere monumentale de interior (60cm+)',
    ],
    ctaText: 'Cere ofertă pentru litere volumetrice',
    tag: '3D',
    category: 'Iluminat',
    faq: [
      {
        question: 'Ce adâncime recomandați pentru exterior?',
        answer:
          'Minim 80mm pentru exterior — adâncimea creează umbra care face litera vizibilă din unghi. Pentru efectul halo, 100-120mm e optimul.',
      },
      {
        question: 'Puteți reproduce logoul exact din grafică?',
        answer:
          'Da, cu condiția să aveți logoul în format vectorial (AI, EPS, SVG sau PDF). Dacă aveți doar un JPEG, reconstruim vectorul cu taxă suplimentară mică.',
      },
      {
        question: 'Rezistă la ploaie și îngheț?',
        answer:
          'Aluminiul și plexiglasul sunt materiale outdoor by design. Componentele electronice sunt protejate IP65. Am montat litere acum 8 ani care arată la fel și azi.',
      },
    ],
  },
  {
    slug: 'inscriptionari-auto',
    number: '03',
    name: 'Inscripționări Auto',
    shortDescription: 'Folie 3M și Oracal. Wrap parțial sau complet.',
    leadParagraph:
      'Inscripționăm vehicule individuale sau flote întregi cu folii adezive 3M și Oracal. De la logo și date de contact până la wrap complet full-color.',
    fullDescription: [
      'Un vehicul inscripționat profesional e reclamă mobilă 24/7. Lucrăm cu folii 3M Controltac și Oracal 970RA — materiale care se aplică fără bule, rezistă minimum 5-7 ani la exterior și nu afectează vopseaua originală la dezlipire.',
      'Aplicăm pe mașini de turism, dube, camioane, microbuze și vehicule speciale. Serviciul include curățare profesională a suprafeței, aplicare în mediu controlat (atelier acoperit), și predare cu bon de garanție.',
      'Inscripționarea parțială (logo + date contact) se face în 1 zi lucrătoare. Wrapul complet cu design full-color durează 2-5 zile în funcție de mărimea vehiculului.',
    ],
    materials: [
      { name: '3M Controltac 1080', description: 'Folie premium pentru wrap complet. Canal de aer, repoziționabilă.' },
      { name: 'Oracal 970RA', description: 'Folie cast ultra-conformabilă pentru suprafețe curbe.' },
      { name: 'Oracal 651/751', description: 'Folie calendered pentru inscripționări simple și date contact.' },
      { name: 'Laminat 3M 1080 overlaminate', description: 'Protecție UV și rezistență la zgârieturi.' },
    ],
    applications: [
      'Flotă de livrare cu branding complet',
      'Date contact pe dube și camioane',
      'Wrap complet cu design personalizat',
      'Inscripționare ambulanțe și vehicule speciale',
      'Branding temporar pentru evenimente',
    ],
    ctaText: 'Cere ofertă pentru inscripționare auto',
    tag: 'Vehicule',
    category: 'Inscripționări',
    faq: [
      {
        question: 'Afectează folia vopseaua mașinii?',
        answer:
          'Nu, dacă vopseaua e în stare bună și folia e calitate 3M sau Oracal cast. Recomandăm dezlipire profesională după 3+ ani pentru a evita orice risc de decolorare.',
      },
      {
        question: 'Cât durează o inscripționare simplă (logo + telefon)?',
        answer:
          '2-4 ore pentru un vehicul standard. Programați dimineața, ridicați la prânz.',
      },
      {
        question: 'Dați factură și garanție?',
        answer:
          'Da. Emitem factură cu TVA și oferim 24 luni garanție pe lipire și calitatea materialului în condiții normale de utilizare.',
      },
    ],
  },
  {
    slug: 'inscriptionari-vitrine',
    number: '04',
    name: 'Inscripționări Vitrine',
    shortDescription: 'Folie sablată, colorată sau perforată.',
    leadParagraph:
      'Personalizăm vitrine de sticlă cu folii adezive pentru branding comercial, intimitate selectivă și decorare spații interioare.',
    fullDescription: [
      'Vitrina unui magazin e primul contact al clientului cu brandul. O inscripționare bine gândită comunică oferta, orele de program, prețurile sau pur și simplu identitatea vizuală a firmei — fără a bloca lumina sau vizibilitatea.',
      'Lucrăm cu folii sablate (efect geam mat), folii colorate opace, folii perforate one-way (vedere din interior, publicitate din exterior) și folii full-color imprimate digital pentru grafică complexă.',
      'Măsurăm, proiectăm, printăm și aplicăm. Durata de lucru la o vitrină standard: 2-4 ore. Meseria se vede în detalii: margini drepte, fără bule, colțuri netăiate.',
    ],
    materials: [
      { name: 'Folie sablată Oracal', description: 'Efect geam mat, diverse grade de opacitate.' },
      { name: 'Folie one-way perforată', description: 'Publicitate pe geam cu vizibilitate dinspre interior.' },
      { name: 'Folie colorată opacă', description: 'Branding complet, disponibil în 100+ culori RAL.' },
      { name: 'Folie print digital', description: 'Grafică full-color printată UV pe folie transparentă.' },
    ],
    applications: [
      'Ore de program și informații comerciale',
      'Branding și logouri pe vitrine',
      'Partiționare spații cu folie sablată',
      'Publicitate sezonieră pe geamuri',
      'Decorare birouri și spații de lucru',
    ],
    ctaText: 'Cere ofertă pentru vitrine',
    tag: 'Comercial',
    category: 'Inscripționări',
    faq: [
      {
        question: 'Se poate dezlipi folia fără a deteriora geamul?',
        answer:
          'Da. Foliile adezive de calitate (Oracal, 3M) se dezlipesc fără reziduuri, cu condiția să nu fi stat prea mulți ani pe soare intens. Recomandăm dezlipire profesională.',
      },
      {
        question: 'Puteți pune program și date contact pe geam?',
        answer:
          'Absolut. Este unul dintre cele mai frecvente servicii — tăiem literele și cifrele individual, le aplicăm pe vitrină la înălțimea dorită.',
      },
      {
        question: 'Funcționează folia perforată one-way pe toate tipurile de geam?',
        answer:
          'Da, pe orice geam plan. Pe geamuri termopan funcționează mai bine pe foaia exterioară. Nu funcționează pe sticlă colorată sau mată.',
      },
    ],
  },
  {
    slug: 'bannere-printuri',
    number: '05',
    name: 'Bannere & Printuri',
    shortDescription: 'Mesh, frontlit, PVC. Până la 5m lățime.',
    leadParagraph:
      'Printăm bannere pentru exterior și interior la orice dimensiune, pe materialele potrivite pentru fiecare aplicație — de la mesh pentru garduri la frontlit pentru fațade.',
    fullDescription: [
      'Bannerele sunt cel mai rapid și rentabil instrument publicitar pentru evenimente, șantiere, magazine și locații temporare. Le printăm pe plotterele noastre ecosolvent cu lățime de până la 5m, fără cusătură verticală pe formate standard.',
      'Alegem materialul în funcție de aplicație: PVC 440g frontlit pentru interior și exterior protejat, mesh 270g pentru garduri și spații cu vânt, blockout pentru zone cu lumină din spate, textil pentru expoziții interioare.',
      'Includem finisare: tăiere, sudare margini, ileti (ocheți de prindere) la distanțe personalizate. Livrare la locație sau ridicare din atelier. Putem plia și ambala pentru transport sau depozitare.',
    ],
    materials: [
      { name: 'PVC frontlit 440g', description: 'Material standard outdoor/indoor. Durabil, rezistent la UV.' },
      { name: 'Mesh 270g', description: 'Permite trecerea vântului. Ideal pentru garduri și fațade.' },
      { name: 'Blockout 500g', description: 'Opac complet, pentru zone backlit sau cu lumină din spate.' },
      { name: 'Textil poliester', description: 'Aspect premium pentru expoziții și standuri interioare.' },
    ],
    applications: [
      'Bannere șantier și construcții',
      'Bannere eveniment și festival',
      'Reclame fațadă temporare',
      'Bannere interioare expo și showroom',
      'Roll-up și X-banner pentru prezentări',
    ],
    ctaText: 'Cere ofertă pentru bannere',
    tag: 'Bannere',
    category: 'Print',
    faq: [
      {
        question: 'Care e rezoluția minimă pentru un banner de mari dimensiuni?',
        answer:
          '72 DPI la dimensiunea reală e suficient pentru vizionare de la 2-3 metri. La 1:1 (vizionare apropiată), recomandăm 100-150 DPI. Nu trimiteți fișiere JPEG comprimate.',
      },
      {
        question: 'Oferiți și montaj pentru bannere?',
        answer:
          'Da, pentru bannere fixe pe structuri metalice sau fațade. Pentru bannere temporare pe sârmă sau garduri, predăm cu instrucțiunile de montaj.',
      },
      {
        question: 'Puteți livra în afara Bistriței?',
        answer:
          'Livrăm prin curier în toată România. Bannerele se rulează sau pliază compact. Termenul de livrare se adaugă la cel de producție (1-3 zile).',
      },
    ],
  },
  {
    slug: 'tablouri-personalizate',
    number: '06',
    name: 'Tablouri Personalizate',
    shortDescription: 'Print canvas pe șasiu de lemn.',
    leadParagraph:
      'Printăm tablouri personalizate pe canvas, aluminiu dibond sau forex pentru decorare interioară, cadouri corporative și expoziții de artă.',
    fullDescription: [
      'Un tablou personalizat poate fi orice: fotografia preferată a clientului, reproducea unui tablou de artă, un print inspirațional pentru birou sau un cadou unic pentru un eveniment. Lucrăm cu orice fișier digital de calitate ridicată.',
      'Printăm pe canvas mat cu cerneală pigmentată UV (rezistentă 50+ ani la interior), montăm pe șasiu de lemn brad tratat la 2cm adâncime. Predăm gata de agățat, cu sistem de prindere pe spate.',
      'Disponibil și pe aluminiu dibond (aspect foto metalic) sau forex 5mm pentru prezentări și expoziții ușoare.',
    ],
    materials: [
      { name: 'Canvas poliester-bumbac', description: '380g/m², textură fină, cerneală pigmentată UV.' },
      { name: 'Șasiu brad 18mm', description: 'Lemn uscat, fără noduri mari, imbricat la colțuri.' },
      { name: 'Aluminiu dibond 3mm', description: 'Panou compozit, aspect foto premium, ușor.' },
      { name: 'Forex 5mm', description: 'Spumă PVC rigidă, ușoară, pentru expoziții.' },
    ],
    applications: [
      'Tablouri foto pentru dormitor și living',
      'Artă corporativă pentru birouri',
      'Cadouri personalizate pentru evenimente',
      'Expoziții foto și artistice',
      'Decorare spații hoteliere și restaurante',
    ],
    ctaText: 'Cere ofertă pentru tablouri',
    tag: 'Canvas',
    category: 'Print',
    faq: [
      {
        question: 'Ce rezoluție trebuie să aibă fotografia?',
        answer:
          'Minim 1500px pe latura scurtă pentru tablouri până în 50cm. Pentru tablouri mari (100cm+), minim 3000px. Trimiteți fișierul înainte de comandă și vă spunem dacă e ok.',
      },
      {
        question: 'Se pot face tablouri în mai multe panouri (diptice, triptice)?',
        answer:
          'Da. Tăiem imaginea matematic și montăm cu distanțe egale. Cele mai frecvente: 2 panouri, 3 panouri și format panoramic 3:1.',
      },
      {
        question: 'Cât durează livrarea unui tablou?',
        answer:
          '3-5 zile lucrătoare. Dimensiunile mari (150cm+) pot necesita 7-10 zile pentru uscare optimă a cernelii.',
      },
    ],
  },
  {
    slug: 'carti-de-vizita-flyere',
    number: '07',
    name: 'Cărți de Vizită & Flyere',
    shortDescription: 'Tipar digital și offset. Cantități mici sau mari.',
    leadParagraph:
      'Printăm cărți de vizită, flyere, pliante și materiale promoționale tipografice cu finisaje profesionale: laminare mat sau lucios, soft-touch, UV selectiv.',
    fullDescription: [
      'O carte de vizită bine tipărită face diferența în prima secundă a unui contact de afaceri. Lucrăm cu tipar digital (Xerox toner HD) pentru cantități de la 50 buc și offset pentru tiraje de 500+.',
      'Finisajele disponibile: laminare mată (aspect premium, antifingerprin), laminare lucios, soft-touch (catifeat), UV selectiv pe logo sau elemente grafice, embosare. Hârtii speciale: kraft, transparency, metalizat, recycled.',
      'Flyerele și pliantele le tipărim pe orice format A5, A4, A6 sau personalizat, pliate simplu, în Z sau triptic. Predăm în cutii sau vrac, puse la număr.',
    ],
    materials: [
      { name: 'Hârtie coated 350g', description: 'Standard pentru cărți de vizită, lucios sau mat.' },
      { name: 'Hârtie soft-touch 350g', description: 'Laminare specială cu aspect mat catifeat.' },
      { name: 'Hârtie offset 130g', description: 'Flyere și pliante, tipar față-verso.' },
      { name: 'Carton kraft netratat', description: 'Aspect eco/artizanal, cerneală neagră sau Pantone.' },
    ],
    applications: [
      'Cărți de vizită clasice sau duble',
      'Flyere A5 promoționale',
      'Pliante triptic pentru prezentare',
      'Meniuri restaurant',
      'Invitații personalizate',
    ],
    ctaText: 'Cere ofertă pentru tipografie',
    tag: 'Print mic',
    category: 'Print',
    faq: [
      {
        question: 'Care e cantitatea minimă de comandă?',
        answer:
          'Digital: de la 50 buc cărți de vizită. Offset: de la 500 buc pentru prețuri optime. Sub 50 buc e disponibil, dar prețul pe bucată e mai ridicat.',
      },
      {
        question: 'Îmi dați fișiere de tipar gata dacă nu am designer?',
        answer:
          'Putem prelua textul și logoul și crea un design simplu, funcțional. Design complex cu elemente grafice multiple se cotează separat.',
      },
      {
        question: 'Cât durează tipărirea?',
        answer:
          'Digital: 24-48 ore. Offset cu finisaje speciale: 5-7 zile lucrătoare. Urgent se poate face în 24h cu suprataxă de urgentare.',
      },
    ],
  },
  {
    slug: 'panouri-stradale',
    number: '08',
    name: 'Panouri Stradale',
    shortDescription: 'Structuri metalice cu print backlit sau frontlit.',
    leadParagraph:
      'Proiectăm și instalăm panouri stradale cu structuri metalice pe teren propriu sau teren concesionat, cu autorizație conform legii.',
    fullDescription: [
      'Un panou stradal bine amplasat generează mii de contacte vizuale pe zi. Construim structuri din oțel galvanizat sau vopsit la cuptor, fundație betonată, cu fețe de panou din aluminiu dibond sau profil aluminiu.',
      'Fețele se schimbă periodic — printăm și înlocuim fânciurile la termenul dorit de client. Întreținerea structurii o asigurăm la cerere sau în baza unui contract anual.',
      'Lucrăm în limitele autorizațiilor legale pentru publicitate stradală. Vă ajutăm cu dosarul de autorizare la primăria localității, dacă e necesar.',
    ],
    materials: [
      { name: 'Oțel galvanizat S235', description: 'Structură portantă, vopsit la electrostatic RAL.' },
      { name: 'Aluminiu dibond 3mm', description: 'Față panou, ușoară, rigidă, rezistentă la UV.' },
      { name: 'PVC frontlit 440g', description: 'Grafică printată pentru fețe de panou schimbabile.' },
      { name: 'Beton C20/25', description: 'Fundație monolitică conform calculului de rezistență.' },
    ],
    applications: [
      'Panouri direcționale la intrarea în localitate',
      'Reclame stradale outdoor format 4x3m',
      'Totemuri față dublu sau față simplă',
      'Panouri de șantier obligatorii legal',
      'Indicatoare rutiere private',
    ],
    ctaText: 'Cere ofertă pentru panouri stradale',
    tag: 'Outdoor',
    category: 'Outdoor',
    faq: [
      {
        question: 'Aveți nevoie de autorizație pentru un panou stradal?',
        answer:
          'Da, pentru orice panou vizibil din domeniul public. Vă ajutăm cu documentația necesară și știm ce primărie din județ solicită ce documente.',
      },
      {
        question: 'Câte fețe poate avea un panou?',
        answer:
          'Standard: 1 sau 2 fețe. Panouri scroll-back (3+ fețe rotative) se execută la cerere, cu motor electric și comandă automată.',
      },
      {
        question: 'Puteți închiria spații de panou publicitare?',
        answer:
          'Nu. Producem și montăm panouri pe terenul clientului. Nu administrăm spații de publicitate în concesiune.',
      },
    ],
  },
  {
    slug: 'tricouri-personalizate',
    number: '09',
    name: 'Tricouri Personalizate',
    shortDescription: 'Serigrafie, DTF, transfer termic.',
    leadParagraph:
      'Personalizăm tricouri, hanorace, șepci și orice articol textil prin serigrafie, DTF (Direct-to-Film) sau transfer termic — pentru echipe, evenimente sau colecții proprii.',
    fullDescription: [
      'Uniforma echipei sau tricoul de eveniment spun ceva despre organizație. Lucrăm cu articole textile din stoc propriu sau pe material adus de client, cu 3 tehnici de personalizare în funcție de cantitate și design.',
      'DTF (Direct-to-Film) e soluția ideală pentru tiraje mici cu design color complex — printăm pe film și transferăm la presă termică. Rezistă la 50+ spălări dacă se respectă instrucțiunile de îngrijire.',
      'Serigrafia e economică de la 30+ buc pe același design, cu culori Pantone exacte. Transferul termic prin vinil plotterat e perfect pentru text și logouri simple pe cantități de la 1 buc.',
    ],
    materials: [
      { name: 'Film DTF 75 microni', description: 'Print full-color cu alb de bază, transfer termic pe bumbac.' },
      { name: 'Vinil transfer termic', description: 'Oracal 3950 sau Siser EasyWeed pentru text și forme.' },
      { name: 'Cerneală serigrafică Plastigol', description: 'Serigrafie pe textile, Pantone exact, durabilitate maximă.' },
      { name: 'Hanorace/tricouri AS Colour/Gildan', description: 'Textile din stoc, bumbac 180-220g, disponibile în 40+ culori.' },
    ],
    applications: [
      'Uniforme echipe sport și corporative',
      'Tricouri eveniment și festival',
      'Hanorace cu logo firmă',
      'Tricouri personalizate cadou',
      'Colecții mici de clothing',
    ],
    ctaText: 'Cere ofertă pentru textile',
    tag: 'Textile',
    category: 'Textile',
    faq: [
      {
        question: 'Care e cantitatea minimă pentru DTF?',
        answer:
          'De la 1 bucată — nu există minim de tiraj pentru DTF. Pentru serigrafie, minimul rentabil e 30 buc pe același design și culoare.',
      },
      {
        question: 'Puteți brodera logo-uri?',
        answer:
          'Nu avem echipament de broderie propriu. Putem referi un partener de broderie din Bistrița cu care colaborăm.',
      },
      {
        question: 'Pot aduce eu tricourile și să le printați?',
        answer:
          'Da, lucrăm și pe material al clientului. Testăm un exemplar înainte de tot tirajul pentru a confirma aderența cernelii pe tipul de material.',
      },
    ],
  },
  {
    slug: 'printuri-mari-dimensiuni',
    number: '10',
    name: 'Printuri Mari Dimensiuni',
    shortDescription: 'Plotter ecosolvent. Format până la 1.6m.',
    leadParagraph:
      'Printăm orice grafică la dimensiuni mari cu plotter ecosolvent pe o gamă largă de materiale autoadezive, rigide sau textile — rezistente la exterior sau calitative pentru interior.',
    fullDescription: [
      'Plotterul ecosolvent e mașina de bază a atelierului. Printăm la lățimi de până la 1.6m și lungimi nestrânse, cu cerneală rezistentă la UV, umiditate și abraziune.',
      'Materiale disponibile: vinil autoadeziv (mat, lucios sau satinat), folie pentru geam, textil de banner, vinyl perforat pentru auto, canvas pentru tablouri, hârtie foto HP premium. Toate compatibile cu aplicații outdoor dacă se aplică laminat UV.',
      'Predăm tăiat la dimensiune, laminat sau nu, rulat sau pliat, cu sau fără tăieturi personalizate de contur (print+cut pe materiale sub 1m).',
    ],
    materials: [
      { name: 'Vinil autoadeziv Oracal', description: 'Lucios, mat sau satinat, 80+ culori, rezistent la UV.' },
      { name: 'Laminat UV 75 microni', description: 'Protecție suplimentară pentru outdoor, anti-zgâriere.' },
      { name: 'Textil banner 260g', description: 'Lightweight pentru interior, aspect mat elegant.' },
      { name: 'Hârtie foto HP', description: 'Lucios sau satinat, pentru interior și decorare.' },
    ],
    applications: [
      'Decorare pereți cu grafică mare',
      'Autocolante personalizate și stickere',
      'Print pentru window display',
      'Grafică vehicule fără laminare',
      'Materiale expoziții indoor',
    ],
    ctaText: 'Cere ofertă pentru print mare',
    tag: 'Large format',
    category: 'Print',
    faq: [
      {
        question: 'Printați și pe materiale aduse de client?',
        answer:
          'Da, pe materiale compatibile cu capetele ecosolvent (solvent-tolerante). Testăm un exemplar înainte de confirmare.',
      },
      {
        question: 'Care e rezoluția maximă de print?',
        answer:
          '1440 DPI pe materiale fine (hârtie foto). Pe banner PVC și vinil, 720 DPI e standard — mai mult nu se observă la distanță de 1m+.',
      },
      {
        question: 'Oferiți și tăiere după contur?',
        answer:
          'Da, cu plotterul de tăiere Roland, pentru materiale până la 90cm lățime. Pentru forme complexe, tăierea e inclusă în preț.',
      },
    ],
  },
  {
    slug: 'colantari-auto',
    number: '11',
    name: 'Colantări Auto',
    shortDescription: 'Wrap complet sau jumătate, folii premium.',
    leadParagraph:
      'Efectuăm colantări auto complete sau parțiale pentru vehicule individuale sau flote, cu folii 3M și Hexis de culori solide, metalizate, mate sau cu efect special.',
    fullDescription: [
      'Colantarea auto (car wrapping) schimbă culoarea sau designul unui vehicul fără a afecta vopseaua originală. Folii 3M 1080 Series și Hexis Bodyfence oferă o gamă de 150+ finisaje: mat, satinat, lucios, carbon, cromat, cameleon.',
      'Procesul: inspecție vehicul, curățare completă, dezasamblare elemente (oglinzi, mânere, ornamente), aplicare folie în mediu controlat termic, finisare manuală cu racletă și heat gun. Predare cu instrucțiuni de întreținere și garanție 12 luni.',
      'Wrapul de culoare solidă durează 3-5 zile. Wrapul cu grafică custom printată se adaugă la 2-3 zile producție grafică.',
    ],
    materials: [
      { name: '3M 1080 Series', description: '150+ finisaje: mat, satinat, gloss, carbon. Canal de aer.' },
      { name: 'Hexis Bodyfence PPF', description: 'Folie protecție vopsea transparentă, auto-healing.' },
      { name: 'Avery Dennison SW900', description: 'Alternativă premium, 200+ finisaje disponibile.' },
      { name: 'Laminat protecție UV', description: 'Pentru grafică printată, anti-zgâriere.' },
    ],
    applications: [
      'Schimbare culoare vehicul',
      'Wrap parțial capotă sau acoperis',
      'Grafică personalizată full-wrap',
      'Protecție vopsea cu folie transparentă PPF',
      'Wrap flote comerciale cu branding',
    ],
    ctaText: 'Cere ofertă pentru colantare auto',
    tag: 'Wrap',
    category: 'Inscripționări',
    faq: [
      {
        question: 'Cât costă un wrap complet?',
        answer:
          'Depinde de mașină și material. Un hatchback mic, folie solidă: 800-1200€. Un SUV mare, folie carbon sau specială: 2000-3500€. Oferta exactă după inspecție.',
      },
      {
        question: 'Cât durează folia pe mașină?',
        answer:
          '5-7 ani pentru folii premium în condiții normale. Spălare automată cu perii dure e contraindicată. Spălare manuală sau fără contact — OK.',
      },
      {
        question: 'Se poate aplica folie pe o mașină cu vopsea deteriorată?',
        answer:
          'Nu recomandăm. Folia nu acoperă denivelările — le evidențiază. Rugăm inspecție pre-wrap pentru orice vehicul.',
      },
    ],
  },
  {
    slug: 'print-textile',
    number: '12',
    name: 'Print Textile',
    shortDescription: 'DTG, sublimare, transfer. Bumbac sau poliester.',
    leadParagraph:
      'Printăm grafică full-color direct pe textile (DTG) sau prin sublimare pe poliester — pentru colecții, merchandise și produse promoționale.',
    fullDescription: [
      'Print-ul textil DTG (Direct-to-Garment) produce imagini foto-realiste pe bumbac 100%, fără limitare de culori. Ideal pentru tiraje mici și personalizare individuală.',
      'Sublimarea termică produce culori vibrante permanente pe poliester 100% sau mixturi poliester/bumbac min 65% poliester. Textele și grafica devin parte din fibra materialului — nu se cojesc, nu se dezlipesc.',
      'Acceptăm orice fișier digital de înaltă calitate (AI, PSD, PNG cu transparență, SVG). Recomandăm pentru sublimere un minim de 300 DPI la dimensiunea reală.',
    ],
    materials: [
      { name: 'Hârtie de sublimare 100g', description: 'Transfer termic pe poliester la 200°C.' },
      { name: 'Cerneală DTG Epson UltraChrome', description: 'Print direct pe bumbac, CMYK + alb.' },
      { name: 'Articole poliester 100%', description: 'Tricouri sport, geamantane, perne, articole promoționale.' },
      { name: 'Articole bumbac 100% pretratate', description: 'Pentru DTG, pretreatment pentru aderenta optimă.' },
    ],
    applications: [
      'Tricouri sport cu grafică full-color',
      'Articole promoționale personalizate',
      'Sublimere perne și articole casnice',
      'Merchandise pentru trupe și artiști',
      'Sublimere cupe și accesorii',
    ],
    ctaText: 'Cere ofertă pentru print textil',
    tag: 'Textile',
    category: 'Textile',
    faq: [
      {
        question: 'Există diferență de calitate între DTG și sublimare?',
        answer:
          'Da. Sublimarea oferă culori mai vibrante și durabilitate mai mare — dar funcționează doar pe poliester deschis la culoare. DTG merge pe bumbac orice culoare, dar culorile sunt ușor mai puțin saturate.',
      },
      {
        question: 'Puteți printa pe articole aduse de client?',
        answer:
          'Da, pe articole compatibile (bumbac pretratat pentru DTG, poliester pentru sublimare). Testăm un exemplar înainte de tot tirajul.',
      },
      {
        question: 'Există cantitate minimă?',
        answer:
          'DTG: de la 1 bucată. Sublimare: de la 1 bucată pentru articole cu suprafețe plane. Costul per bucată scade semnificativ de la 20+ buc.',
      },
    ],
  },
  {
    slug: 'print-canvas',
    number: '13',
    name: 'Print Canvas',
    shortDescription: 'Canvas mat sau lucios pe șasiu interior.',
    leadParagraph:
      'Tablouri canvas de interior pe șasiu de lemn, de la format 20x30cm până la 200x100cm. Print UV sau ecosolvent pe canvas bumbac-poliester.',
    fullDescription: [
      'Canvas-ul de interior e un produs clasic care nu iese niciodată din trend. Un print bun pe un canvas bun arată mai bine decât o fotografie înrămată — pentru că textura materialului adaugă profunzime și căldură.',
      'Printăm pe canvas 380g bumbac-poliester cu cerneală pigmentată UV-rezistentă, calibrată Pantone. Montam pe șasiu de brad 18mm imbricat, cu tensionare manuală și prindere la colțuri cu clipsuri invizibile.',
      'Predăm gata de agățat, cu sistem de sârmă fixat pe spate sau cu suport tip float frame dacă doriți marginile expuse.',
    ],
    materials: [
      { name: 'Canvas 380g bumbac-poliester', description: 'Textură fină, suport ideal pentru print foto și artă.' },
      { name: 'Șasiu brad 18mm', description: 'Lemn uscat fără nod, îmbinare la 45°, stabilitate maximă.' },
      { name: 'Cerneală pigmentată UV', description: 'Rezistentă 50+ ani la interior, culori reproductibile Pantone.' },
      { name: 'Float frame aluminiu (opțional)', description: 'Cadru separat de tablou, margine float 2cm negru sau alb.' },
    ],
    applications: [
      'Tablouri foto de familie sau artă',
      'Decorare spații HORECA (hoteluri, restaurante)',
      'Arta corporativă pentru birouri',
      'Reproduceri tablouri în stiluri clasice',
      'Cadouri personalizate la comenzi mari',
    ],
    ctaText: 'Cere ofertă pentru canvas',
    tag: 'Artă',
    category: 'Print',
    faq: [
      {
        question: 'Care e diferența dintre canvas mat și lucios?',
        answer:
          'Canvas-ul standard e mat — mai fidel artei și fotografiei cu tonuri calde. Varianta cu laminare lucios are culori mai saturate și e mai ușor de curățat.',
      },
      {
        question: 'Puteți face tablouri cu margini imprimate (gallery wrap)?',
        answer:
          'Da. La gallery wrap, imaginea se continuă pe margini sau adăugăm o culoare de fundal pe margini. Trimiteți fișierul cu 5cm extra pe fiecare latură pentru a evita tăierea imaginii.',
      },
      {
        question: 'Cât rezistă un tablou canvas interior?',
        answer:
          'Cerneala pigmentată rezistă 50+ ani la interior fără decolorare vizibilă, dacă tabloul nu e expus direct la soare intens. Canvasul în sine nu se deteriorează în condiții normale.',
      },
    ],
  },
  {
    slug: 'print-digital',
    number: '14',
    name: 'Print Digital',
    shortDescription: 'UV direct pe materiale rigide: alu, plexi, lemn.',
    leadParagraph:
      'Printăm UV direct pe materiale rigide și textile — aluminiu, plexiglas, lemn, sticlă, ceramică, PVC — fără lipire de folie sau transfer.',
    fullDescription: [
      'Print-ul UV direct (flatbed UV) este tehnologia care elimină intermediarul dintre cerneală și material. Capetele de print se mișcă deasupra piesei fixe și depun cerneala direct pe suprafață, polimerizând instantaneu cu lumină UV.',
      'Rezultatul: imagini ultra-clare, cu relief tactic (efect 3D dacă se printează în straturi multiple), rezistente la zgâriere și umiditate. Ideal pentru semnalistică indoor premium, numerotare camere hotel, plăcuțe personalizate.',
      'Materiale compatibile: aluminiu anodizat, plexiglas, forex, lemn, MDF, sticlă plată, ceramică, piele, bord auto, cupe și articole promoționale rigide.',
    ],
    materials: [
      { name: 'Cerneală UV Epson/Roland', description: 'Polimerizare imediată, rezistentă la zgâriere, waterproof.' },
      { name: 'Aluminiu anodizat 1-3mm', description: 'Suprafată dură, print UV cu aderență permanentă.' },
      { name: 'Plexiglas 3-10mm', description: 'Transparent, colorat sau opal. Print cu alb de bază.' },
      { name: 'MDF 3-18mm', description: 'Lemn presat, suprafatat sau brut. Print cu primer sau direct.' },
    ],
    applications: [
      'Plăcuțe numerotare camere hotel',
      'Semnalistică interioară premium',
      'Cadouri corporate pe materiale nobile',
      'Publicitate pe articole rigide',
      'Print foto pe aluminiu pentru galerii',
    ],
    ctaText: 'Cere ofertă pentru print UV',
    tag: 'Digital',
    category: 'Print',
    faq: [
      {
        question: 'Care e dimensiunea maximă pentru print UV flatbed?',
        answer:
          '60x90cm pe echipamentul nostru flatbed standard. Piese mai mari se execută în benzi cu îmbinare vizibilă sau se trimit la partener cu echipament format A0+.',
      },
      {
        question: 'Puteți printa pe obiectele mele (cupe, telefoane, căni)?',
        answer:
          'Da, pe articole plane sau ușor curbate până la 10cm înălțime. Cercuri și cilindri se imprimă prin rotație — disponibil pentru cupe standard.',
      },
      {
        question: 'Este rezistentă cerneala UV la exterior?',
        answer:
          'Cerneala UV are rezistență bună la umiditate, dar recomandăm laminat UV pentru exterior pe termen lung. Fără laminare, decolorarea ușoară poate apărea în 1-2 ani la expunere directă.',
      },
    ],
  },
  {
    slug: 'structuri-publicitare',
    number: '15',
    name: 'Structuri Publicitare',
    shortDescription: 'Totem-uri, panouri, suporturi metalice.',
    leadParagraph:
      'Proiectăm și construim structuri metalice publicitare de orice dimensiune: totemuri, panouri duble fețe, suporturi direcționale, vitrine metalice exterioare.',
    fullDescription: [
      'O structură publicitară solidă e o investiție pe 10-15 ani. Construim din oțel S235 galvanizat sau vopsit electrostatic la cuptor, cu protecție împotriva coroziunii și rezistență la vânturi de 100-140 km/h conform calculului structural.',
      'Fiecare proiect include: consultare și schiță 3D preliminară, calcul structural pentru înălțimi > 3m, fabricare CNC și sudură certificată, transport și montaj inclusiv fundație betonată, aviz de recepție.',
      'Integrăm reclame luminoase, panouri de print schimbabile sau elemente din inox și aluminiu anodizat pentru aspect premium. Totemurile iluminate sunt specialitatea noastră — de la 1m la 8m înălțime.',
    ],
    materials: [
      { name: 'Oțel S235 galvanizat', description: 'Structura portantă, protecție anti-coroziune minimum 20 ani.' },
      { name: 'Vopsea electrostatică RAL', description: 'Orice culoare RAL, rezistentă la UV și intemperii.' },
      { name: 'Aluminiu extrudat', description: 'Profile decorative și cadre pentru fețe de panou.' },
      { name: 'Beton armat C20/25', description: 'Fundație dimensionată conform înălțimii structurii.' },
    ],
    applications: [
      'Totemuri luminoase la intrarea în firmă',
      'Panouri stradale dublu față',
      'Suporturi direcționale multi-față',
      'Vitrine exterioare pentru afișaj',
      'Structuri portante pentru bannere',
    ],
    ctaText: 'Cere ofertă pentru structuri',
    tag: 'Montaj',
    category: 'Structuri',
    faq: [
      {
        question: 'Aveți nevoie de autorizație de construire pentru o structură mare?',
        answer:
          'Structurile cu fundație și înălțime > 3m necesită autorizație de construire în cele mai multe localități. Vă ajutăm cu dosarul tehnic — calculul structural și planurile sunt incluse în ofertă.',
      },
      {
        question: 'Oferiți garanție pentru structuri?',
        answer:
          'Oferim 5 ani garanție structurală și 2 ani pe componente electrice pentru totemuri iluminate. Structura fizică are durată de viață 15+ ani cu întreținere minimă (vopsire la 7-10 ani).',
      },
      {
        question: 'Puteți reproduce o structură existentă pentru un alt amplasament?',
        answer:
          'Da. Dacă aveți planuri sau măsurătorile exacte ale structurii dorite, reproducem identic sau cu modificări minore de amplasament.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}

export const services = SERVICES
