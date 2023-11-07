import Products from "./Products";
import Slider from "./Slider/Slider";
import CategoryNav from "./categories/category-nav";


export default function HomePage(){

    return(
        <div className=" w-[90%] mx-auto">
            <div className="h-[10%]">
                <CategoryNav/>
            </div>
            <div className=" h-[25%]">
                <Slider/>
            </div>
            <Products></Products>        

        </div>
    )
}