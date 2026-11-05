export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.googleAnalytics

  // Universal Analytics (UA-*) was shut down by Google; only load gtag for
  // Measurement IDs (G-*) and Google Ads conversion IDs (AW-*/GT-*).
  if (!id || id.startsWith('UA-')) return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
        async: true
      },
      {
        innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`,
        type: 'text/javascript'
      }
    ]
  })
})
