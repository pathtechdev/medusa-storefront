import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const queryParams = {
    collection_id: [collection.id],
    fields: "*variants.calculated_price",
  } as HttpTypes.StoreProductParams

  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams,
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge text-floral-soya-bean">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          <span className="body-text-upper text-floral-cod-gray hover:text-floral-soya-bean transition-colors">
          View all
          </span>
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
