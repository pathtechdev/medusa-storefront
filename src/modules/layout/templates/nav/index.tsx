import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "@modules/layout/components/logo"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto duration-200 bg-floral-spring-wood/95 backdrop-blur-sm border-b-2 border-floral-soya-bean/10">
        <nav className="content-container flex items-center justify-between w-full h-20 text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Logo size="lg" variant="dark" />
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-8 h-full font-medium">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-floral-soya-bean transition-colors duration-300 relative group/link"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Tìm Kiếm
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-floral-soya-bean group-hover/link:w-full transition-all duration-300 rounded-full" />
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-floral-soya-bean transition-colors duration-300 relative group/link"
                href="/store"
                data-testid="nav-store-link"
              >
                Cửa Hàng
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-floral-soya-bean group-hover/link:w-full transition-all duration-300 rounded-full" />
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-floral-soya-bean transition-colors duration-300 relative group/link"
                href="/account"
                data-testid="nav-account-link"
              >
                Tài Khoản
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-floral-soya-bean group-hover/link:w-full transition-all duration-300 rounded-full" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-floral-soya-bean flex gap-2 transition-colors duration-300 font-medium"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Giỏ (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
