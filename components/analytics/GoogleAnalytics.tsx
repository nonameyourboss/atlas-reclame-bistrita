'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        id="ga-script"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  )
}

// Called by CookieBanner when analytics consent is granted
export function enableGA() {
  if (typeof window === 'undefined' || !GA_ID) return
  // @ts-expect-error gtag is injected via script
  if (typeof window.gtag === 'function') {
    // @ts-expect-error gtag is injected via script
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    })
  }
}

// Called by CookieBanner when analytics consent is denied
export function disableGA() {
  if (typeof window === 'undefined' || !GA_ID) return
  // @ts-expect-error gtag is injected via script
  if (typeof window.gtag === 'function') {
    // @ts-expect-error gtag is injected via script
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    })
  }
}
