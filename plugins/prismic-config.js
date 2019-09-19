import PrismicDOM from 'prismic-dom'

const Elements = PrismicDOM.RichText.Elements

// Fetch the link resolver
export const linkResolver = doc => {
  if (doc.type === 'blog_posts') return `/blog/${doc.uid}`
  return `/${doc.uid}`
}

// Fetch, Create, and Send the html serializer
export const htmlSerializer = (type, element, content, children) => {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === Elements.hyperlink) {
    let result = ''
    const url = PrismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<nuxt-link to="${url}">${content}</nuxt-link>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a style="font-weight: bold" target="_blank" rel="noopener" href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img style="border-radius: 6px; box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.3)" src="${
      element.url
    }" alt="${element.alt || ''}" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = PrismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<nuxt-link to="${url}">${result}</nuxt-link>`
      } else {
        const target = element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p> <br>`
    return result
  }
  // Return null to stick with the default behavior for everything else
  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join('')}</h1>`

    case Elements.heading2:
      return `<h2>${children.join('')}</h2>`

    case Elements.heading3:
      return `<h3 style="margin-bottom: 1.5rem; font-size: 22px; letter-spacing: 1px; font-weight: bold">${children.join(
        ''
      )}</h3>`

    case Elements.heading4:
      return `<h4>${children.join('')}</h4>`

    case Elements.heading5:
      return `<h5>${children.join('')}</h5>`

    case Elements.heading6:
      return `<h6>${children.join('')}</h6>`

    case Elements.paragraph:
      return `<p style="margin-bottom: 1.5rem">${children.join('')}</p>`

    case Elements.preformatted:
      return `<pre style="margin-bottom: 1.5rem">${children.join('')}</pre>`

    case Elements.strong:
      return `<strong>${children.join('')}</strong>`

    case Elements.em:
      return `<em>${children.join('')}</em>`

    case Elements.listItem:
      return `<li>${children.join('')}</li>`

    case Elements.oListItem:
      return `<li>${children.join('')}</li>`

    // In Bulma.io, add "content" class to style <ol> and <ul>
    case Elements.list:
      return `<div class="content"><ul>${children.join('')}</ul></div>`

    case Elements.oList:
      return `<div class="content"><ol type="1">${children.join('')}</ol></div>`

    case Elements.embed:
      return `
        <div
          class="youtube-embed"
					style="margin-bottom: 1.5rem; text-align: center"
					data-oembed="${element.oembed.embed_url}"
					data-oembed-type="${element.oembed.type}"
					data-oembed-provider="${element.oembed.provider_name}"
				>
					${element.oembed.html}
				</div>
	  		`

    case Elements.label:
      const label = element.data.label ? ` class="${element.data.label}"` : ''
      return `<span ${label}>${children.join('')}</span>`

    case Elements.span:
      return content ? content.replace(/\n/g, '<br />') : ''

    default:
      return null
  }
}
