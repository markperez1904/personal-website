export default defineNuxtPlugin(() => {
  if (!import.meta.client) return

  const publisher = useRuntimeConfig().public.googleAdsensePublisher
  if (!publisher) return

  if (document.querySelector('script[data-adsense]')) return

  const script = document.createElement('script')
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisher}`
  script.async = true
  script.setAttribute('crossorigin', 'anonymous')
  script.setAttribute('data-adsense', 'true')
  document.head.appendChild(script)
})
