import { getRegion } from "@lib/data/regions"
import { getMockProducts } from "@lib/data/mock-products"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Use mock products data
  const { products, count } = getMockProducts({
    collection: collectionId,
    category: categoryId,
    limit: PRODUCT_LIMIT,
    page,
  })

  // Transform mock products to match Medusa product format
  const transformedProducts = products.map((p) => ({
    ...p,
    variants: [
      {
        id: `${p.id}_variant`,
        calculated_price: {
          calculated_amount: p.price,
          currency_code: p.currency_code,
          original_amount: p.price,
          price_list_type: "default",
        },
      },
    ],
  }))

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {transformedProducts.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p as any} region={region} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
