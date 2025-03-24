'use client'
import {
  HeaderWidget, HomeBannerWidget,
  ProductList, PageCover, CategoriesWidget
} from "@/components/general";




export default function Home() {
  return (
    <PageCover>
      <HomeBannerWidget />
      <div className="flex flex-col lg:flex-row lg:gap-8 p-4">
        <aside className="w-full lg:w-2/12 lg:sticky top-20 h-fit p-4">
          <CategoriesWidget />
        </aside>
        <div className="w-full px-4 pt-3.5 pb-16 lg:p-6 xl:p-8">
          <div className="hidden">
            <CategoriesWidget />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            <ProductList />
          </div>
        </div>
      </div>
    </PageCover>

  )

    ;
}
