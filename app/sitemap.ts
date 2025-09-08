import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.youandmesemenyih.com'

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
  }))

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/products` },
    { url: `${baseUrl}/contact` },
    ...productUrls,
  ]
}
