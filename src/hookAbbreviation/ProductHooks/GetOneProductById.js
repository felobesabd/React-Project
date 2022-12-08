import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetOneProductAction, GetOneProductByCatAction} from "../../Reducer/Actions/ProductActions";
import {GetOneCategoryAction} from "../../Reducer/Actions/CategoryAction"
import {GetOneBrandAction} from "../../Reducer/Actions/BrandActions";

const GetOneProductByIdHook = (id)=> {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(GetOneProductAction(id))
    }, [dispatch])

    const oneProduct = useSelector(state => state.allProductRed.oneProduct)
    const oneCategory = useSelector(state => state.allCategoryRed.oneCategory)
    const oneBrand = useSelector(state => state.allBrandRed.oneBrand)


    let item = []
    try {
        if (oneProduct.data) {
            item = oneProduct.data
        } else {
            item = []
        }
    } catch (e) {}


    useEffect(()=> {
        if (item.brand)
        dispatch(GetOneBrandAction(item.brand))
    }, [item])

    useEffect(()=> {
        if (item.category)
            dispatch(GetOneCategoryAction(item.category))
    }, [item])

    //to show category item
    let brand = [];

    try {
        if (oneBrand.data) {
            brand = oneBrand.data
        } else {
            brand = []
        }
    } catch (e) {}

    // if (brand)
    //     console.log(brand)


    //to show category item
    let cat = [];
    try {
        if (oneCategory.data)
            cat = oneCategory.data;
        else
            cat = []
    } catch (e) {}


    // if (cat.name)
    //     console.log(cat.name)



    useEffect(()=> {
        if (item.category)
            dispatch(GetOneProductByCatAction(item.category))
    }, [item])

    const oneProductCat = useSelector(state => state.allProductRed.oneProductCat)

    let prod = []
    try {
        if (oneProductCat)
            prod = oneProductCat.data
        else
            prod = []


        if (prod)
            var products = prod.slice(0, 4)
    } catch (e) {}


    return [item, cat, brand, products]
}
export default GetOneProductByIdHook;