'use client'

import { useEffect } from 'react'
import type { CookieConsentConfig } from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export function CookieBanner() {
  useEffect(() => {
    async function init() {
      const cc = await import('vanilla-cookieconsent')

      const config: CookieConsentConfig = {
        guiOptions: {
          consentModal: {
            layout: 'bar inline',
            position: 'bottom',
            equalWeightButtons: false,
            flipButtons: false,
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
          },
        },

        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            autoClear: {
              cookies: [{ name: /^(_ga|_gid)/ }],
            },
            services: {
              ga4: {
                label: 'Google Analytics 4',
                onAccept() {
                  if (typeof window !== 'undefined') {
                    import('./GoogleAnalytics').then(({ enableGA }) => enableGA())
                  }
                },
                onReject() {
                  if (typeof window !== 'undefined') {
                    import('./GoogleAnalytics').then(({ disableGA }) => disableGA())
                  }
                },
              },
            },
          },
          marketing: {
            autoClear: {
              cookies: [{ name: /^_gcl/ }],
            },
          },
        },

        language: {
          default: 'ro',
          translations: {
            ro: {
              consentModal: {
                title: 'Utilizăm cookie-uri',
                description:
                  'Folosim cookie-uri pentru a îmbunătăți experiența de navigare și a analiza traficul website-ului. Poți accepta toate cookie-urile sau personaliza preferințele tale.',
                acceptAllBtn: 'Acceptă toate',
                acceptNecessaryBtn: 'Numai necesare',
                showPreferencesBtn: 'Personalizează',
                footer: `<a href="/politica-confidentialitate" target="_blank">Politică de confidențialitate</a>
                         <a href="/politica-cookies" target="_blank">Politică cookies</a>`,
              },
              preferencesModal: {
                title: 'Preferințe cookie-uri',
                acceptAllBtn: 'Acceptă toate',
                acceptNecessaryBtn: 'Numai necesare',
                savePreferencesBtn: 'Salvează preferințele',
                closeIconLabel: 'Închide',
                serviceCounterLabel: 'Serviciu|Servicii',
                sections: [
                  {
                    title: 'Utilizarea cookie-urilor',
                    description:
                      'Folosim cookie-uri pentru a asigura funcționalitățile de bază ale website-ului și pentru a îmbunătăți experiența online. Poți alege pentru fiecare categorie să optezi sau să renunți oricând.',
                  },
                  {
                    title: 'Cookie-uri strict necesare',
                    description:
                      'Aceste cookie-uri sunt esențiale pentru funcționarea corectă a website-ului. Fără aceste cookie-uri, website-ul nu ar funcționa corect.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Cookie-uri analitice',
                    description:
                      'Aceste cookie-uri colectează informații despre modul în care utilizezi website-ul nostru. Toate datele sunt anonimizate și nu pot fi folosite pentru a te identifica.',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      caption: 'Tabel cookie-uri',
                      headers: {
                        name: 'Nume',
                        domain: 'Serviciu',
                        duration: 'Durată',
                        desc: 'Descriere',
                      },
                      body: [
                        {
                          name: '_ga',
                          domain: 'Google Analytics',
                          duration: '2 ani',
                          desc: 'Distinge utilizatori unici.',
                        },
                        {
                          name: '_gid',
                          domain: 'Google Analytics',
                          duration: '24 ore',
                          desc: 'Identificator de sesiune.',
                        },
                      ],
                    },
                  },
                  {
                    title: 'Cookie-uri de marketing',
                    description:
                      'Aceste cookie-uri urmăresc vizitatorii pe diferite website-uri. Scopul este de a afișa reclame relevante și atractive pentru utilizatorul individual.',
                    linkedCategory: 'marketing',
                  },
                  {
                    title: 'Informații suplimentare',
                    description:
                      'Pentru orice întrebări legate de politica noastră privind cookie-urile, te rugăm să <a href="/contact" class="cc__link">ne contactezi</a>.',
                  },
                ],
              },
            },
          },
        },
      }

      await cc.run(config)
    }

    init()
  }, [])

  return null
}
