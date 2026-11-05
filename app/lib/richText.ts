import { asHTML, asText, Element } from '@prismicio/client'
import type { LinkResolverFunction, RichTextField } from '@prismicio/client'

export const linkResolver: LinkResolverFunction = doc => {
  if (doc.type === 'blog_posts' && doc.uid) return `/blog/${doc.uid}/`
  if (doc.uid) return `/${doc.uid}/`
  return '/'
}

function resolveLink(link: any): string {
  if (!link) return ''
  if (link.link_type === 'Document') {
    return linkResolver({ type: link.type, uid: link.uid } as any)
  }
  return link.url || ''
}

// The Prismic v7 HTML serializer receives the already-joined children string.
const serializer = (
  type: string,
  node: any,
  text: string | undefined,
  children: string
): string | null => {
  switch (type) {
    case Element.heading1:
      return `<h1>${children}</h1>`

    case Element.heading2:
      return `<h2>${children}</h2>`

    case Element.heading3:
      return `<h3 style="margin-bottom: 1.5rem; font-size: 22px; letter-spacing: 1px; font-weight: bold">${children}</h3>`

    case Element.heading4:
      return `<h4>${children}</h4>`

    case Element.heading5:
      return `<h5>${children}</h5>`

    case Element.heading6:
      return `<h6>${children}</h6>`

    case Element.paragraph:
      return `<p style="margin-bottom: 1.5rem">${children}</p>`

    case Element.preformatted:
      return `<pre style="margin-bottom: 1.5rem">${children}</pre>`

    case Element.strong:
      return `<strong>${children}</strong>`

    case Element.em:
      return `<em>${children}</em>`

    case Element.listItem:
    case Element.oListItem:
      return `<li>${children}</li>`

    case Element.list:
      return `<div class="content"><ul>${children}</ul></div>`

    case Element.oList:
      return `<div class="content"><ol type="1">${children}</ol></div>`

    case Element.hyperlink: {
      const url = resolveLink(node.data)
      const target = node.data && node.data.target
        ? ` target="${node.data.target}" rel="noopener"`
        : ''

      return `<a style="font-weight: bold" href="${url}"${target}>${children}</a>`
    }

    case Element.image: {
      let result = `<img loading="lazy" style="border-radius: 6px; box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3)" src="${node.url}" alt="${node.alt || ''}" copyright="${node.copyright || ''}">`

      if (node.linkTo) {
        const url = resolveLink(node.linkTo)
        const target = node.linkTo.target
          ? ` target="${node.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}"${target}>${result}</a>`
      }

      const wrapperClassList = [node.label || '', 'block-img']
      return `<p class="${wrapperClassList.join(' ')}">${result}</p> <br>`
    }

    case Element.embed: {
      if (!node.oembed) return ''

      return `
        <div
          class="youtube-embed"
          style="margin-bottom: 1.5rem; text-align: center"
          data-oembed="${node.oembed.embed_url}"
          data-oembed-type="${node.oembed.type}"
          data-oembed-provider="${node.oembed.provider_name}"
        >
          ${node.oembed.html}
        </div>
      `
    }

    case Element.label: {
      const label = node.data && node.data.label
        ? ` class="${node.data.label}"`
        : ''
      return `<span${label}>${children}</span>`
    }

    case Element.span:
      return text ? text.replace(/\n/g, '<br />') : ''

    default:
      return null
  }
}

export function toHtml(field?: RichTextField | null): string {
  if (!field) return ''
  return asHTML(field, { linkResolver, serializer }) || ''
}

export function toText(field?: RichTextField | null): string {
  if (!field) return ''
  return asText(field) || ''
}

export function formatDate(value?: string | null): string {
  if (!value) return ''

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC'
  }).format(date)
}
