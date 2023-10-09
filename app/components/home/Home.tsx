import Products from "./Products";
import CategoryNav from "./categories/category-nav";


export default function HomePage(){

    return(
        <div className=" w-[90%] mx-auto">
            <CategoryNav/>
            <div className=" h-[50%]">
                
            </div>
            <Products></Products>        

        </div>
    )
}