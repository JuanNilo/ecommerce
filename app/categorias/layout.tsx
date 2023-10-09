import CategoryNav from "../components/home/categories/category-nav"

export default function CategoriasLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className=" w-[90%] mx-auto">
        <CategoryNav/>
        {children}
      </div>
    )
  }