import SliderCom from './../../component/HomeComp/ComSlider';
import HomeCate from '../../component/HomeComp/HomeCate';
import HomeProdCard from '../../product/HomeProdCard';
import DiscountSection from './../../component/HomeComp/DiscoundComp';
import BarndHome from './../../brand/BrandHome';


let HomePage = () => {
    return (
        <div className="">
            <SliderCom />
            <HomeCate />
            <HomeProdCard title='Top Silling' path='/ProductPage' text='More'/>
            <DiscountSection />
            <HomeProdCard title='Latest Fashion' path='/ProductPage' text='More'/>
            <BarndHome title='Famous Brands'/>
        </div>
    )
}
export default HomePage;