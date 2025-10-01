import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/layout/components/logo"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "id,handle,title",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t-2 border-floral-soya-bean/10 w-full bg-gradient-to-b from-floral-spring-wood to-floral-pearl-bush">
      <div className="content-container flex flex-col w-full py-16">
                      <div className="flex flex-col gap-y-8 md:flex-row items-start justify-between mb-12">
              <div className="flex flex-col gap-6 max-w-sm">
                {/* ENLARGED LOGO */}
                <Logo size="xl" variant="dark" />
            <Text className="txt-compact-small text-floral-cod-gray/90 leading-relaxed">
              <span className="font-fraunces italic text-floral-soya-bean">Whispers of Blooms</span> - 
              Lời thì thầm từ trái tim. Nghệ thuật cắm hoa cao cấp, 
              thiết kế độc quyền cho những khoảnh khắc đáng nhớ nhất của bạn.
            </Text>
            
            {/* Contact Info - Clean text format */}
            <div className="flex flex-col gap-3 text-sm text-floral-cod-gray/80">
              <div className="flex flex-col gap-1">
                <span className="text-floral-soya-bean font-medium text-xs uppercase tracking-wider">Điện thoại</span>
                <span>+84 xxx xxx xxx</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-floral-soya-bean font-medium text-xs uppercase tracking-wider">Email</span>
                <span>hello@yingfloral.vn</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-floral-soya-bean font-medium text-xs uppercase tracking-wider">Địa chỉ</span>
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>

            {/* Social Media - Clean text links */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-floral-soya-bean font-medium text-xs uppercase tracking-wider">Kết nối</span>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-floral-cod-gray/70 hover:text-floral-soya-bean transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="text-floral-cod-gray/70 hover:text-floral-soya-bean transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="text-floral-cod-gray/70 hover:text-floral-soya-bean transition-colors duration-300">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-small-regular grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-y-3">
              <span className="txt-ui-fg-base font-semibold text-floral-soya-bean font-fraunces">
                Danh Mục
                </span>
              <ul className="grid grid-cols-1 gap-2">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                    return null
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                          "hover:text-floral-soya-bean transition-colors duration-300",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                  className="hover:text-floral-soya-bean transition-colors duration-300"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            <div className="flex flex-col gap-y-3">
              <span className="txt-ui-fg-base font-semibold text-floral-soya-bean font-fraunces">
                Bộ Sưu Tập
                </span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                      className="hover:text-floral-soya-bean transition-colors duration-300"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            <div className="flex flex-col gap-y-3">
              <span className="txt-ui-fg-base font-semibold text-floral-soya-bean font-fraunces">
                Hỗ Trợ
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-floral-soya-bean transition-colors duration-300"
                  >
                    Cửa Hàng
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="hover:text-floral-soya-bean transition-colors duration-300"
                  >
                    Tài Khoản
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/cart"
                    className="hover:text-floral-soya-bean transition-colors duration-300"
                  >
                    Giỏ Hàng
                  </LocalizedClientLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-floral-soya-bean transition-colors duration-300"
                  >
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-y-4 items-center w-full justify-between text-ui-fg-muted border-t-2 border-floral-soya-bean/10 pt-8">
          <Text className="txt-compact-small text-floral-cod-gray/70">
            © {new Date().getFullYear()} Ying Floral by Hiểu Anh | Bloom your heart, touch your soul
          </Text>
          <div className="flex gap-4 text-xs text-floral-cod-gray/60">
            <a href="#" className="hover:text-floral-soya-bean transition-colors duration-300">
              Chính Sách Bảo Mật
            </a>
            <span className="text-floral-soya-bean/30">•</span>
            <a href="#" className="hover:text-floral-soya-bean transition-colors duration-300">
              Điều Khoản Dịch Vụ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
