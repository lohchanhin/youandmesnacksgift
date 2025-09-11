import type { MetadataRoute } from 'next'
import { products } from '../data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const routes: MetadataRoute.Sitemap = ['', 'contact', 'products'].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }))

  products.forEach((p) => {
    routes.push({
      url: `${baseUrl}/products/${p.id}`,
      lastModified: new Date().toISOString(),
    })
  })

  return routes
}
