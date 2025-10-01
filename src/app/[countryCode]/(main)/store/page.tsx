import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Cửa Hàng Hoa - Ying Floral by Hiểu Anh",
  description: "Khám phá bộ sưu tập hoa tươi cao cấp của Ying Floral. Hoa cưới, hoa sinh nhật, hoa trang trí sự kiện - Thiết kế độc quyền bởi nghệ sĩ hoa Hiểu Anh.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { sortBy, page } = searchParams

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
