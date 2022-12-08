import SliderCom from './../../component/HomeComp/ComSlider';
import HomeCate from '../../component/HomeComp/HomeCate';
import HomeProdCard from '../../product/HomeProdCard';
import DiscountSection from './../../component/HomeComp/DiscoundComp';
import BarndHome from './../../brand/BrandHome';
import StoreProductData from "../../hookAbbreviation/ProductHooks/StoreProductData";


let HomePage = () => {

    const [allProducts] = StoreProductData()
    if (allProducts)
        console.log(allProducts)

    return (
        <div className="">
            <SliderCom />
            <HomeCate />
            <HomeProdCard allProductData={allProducts} title='Top Silling' path='/ProductPage' text='More'/>
            <DiscountSection />
            <HomeProdCard allProductData={allProducts} title='Latest Fashion' path='/ProductPage' text='More'/>
            <BarndHome title='Famous Brands'/>
        </div>
    )
}
export default HomePage;