import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetAllProductAction} from "../../Reducer/Actions/ProductActions";


const StoreProductData = ()=> {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(GetAllProductAction())
    }, [])

    const products = useSelector(state => state.allProductRed.allProducts)
    if (products)
        console.log(products)

    let allProduct = []

    try {
        if (products.data)
            allProduct = products.data
        else
            allProduct = []

        if (allProduct)
            var allProducts = allProduct.slice(0, 4)
    } catch (e) {}


    return [allProducts]
}
export default StoreProductData;