import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {BrandAction} from "../../Reducer/Actions/BrandActions";
import {CategoryAction} from "../../Reducer/Actions/CategoryAction";
import SearchProductHook from "../ProductHooks/SearchProductHooks";


const SideFilterSearchHook = ()=> {

    const [, , , , getProduct, ] = SearchProductHook()

    const dispatch = useDispatch()

    useEffect(() => {
        const get = async ()=> {
            await dispatch(BrandAction())
            await dispatch(CategoryAction())
        }
        get()
    }, [])

    const allBrand = useSelector(state => state.allBrandRed.brand)
    const allCategory = useSelector(state => state.allCategoryRed.category)

    let brand = []
    try {
        if (allBrand.data)
            brand = allBrand.data
    }catch (e) {}

    let category = []
    try {
        if (allCategory.data)
            category = allCategory.data
    }catch (e) {}

    var queryCate = '',
        queryBrand = '';

    const [cateId, setCateId] = useState([])
    const checkCateValue = (e)=> {
        let value = e.target.value,
            checked = e.target.checked;
        if (value === '0') {
            setCateId([])
        } else {
            if (checked === true) {
                setCateId([...cateId, value])
            } else if (checked ===  false) {
                const newArray = cateId.filter((e) => e !== value)
                setCateId(newArray)
            }
        }

    }
    useEffect( () => {
        queryCate = cateId.map(e => 'category[in][]=' + e).join('&')
        localStorage.setItem('chooseCate', queryCate)
        setTimeout(() => {
            getProduct()
        }, 1000)
    }, [cateId])

    const [brandId, setBrandId] = useState([])
    const checkBrandValue = (e)=> {
        let value = e.target.value,
            checked = e.target.checked;
        if (value === '0') {
            setBrandId([])
        } else {
            if (checked === true) {
                setBrandId([...brandId, value])
            } else if (checked ===  false) {
                const newArray = brandId.filter((e) => e !== value)
                setBrandId(newArray)
            }
        }
    }
    useEffect( () => {
        queryBrand = brandId.map(e => 'brand[in][]=' + e).join('&')
        localStorage.setItem('chooseBrand', queryBrand)
        setTimeout(() => {
            getProduct()
        }, 1000)
    }, [brandId])

    const [from, setFrom] = useState(0)
    const priceFrom = (e)=> {
        localStorage.setItem('valuePriceFrom', e.target.value)
        setFrom(e.target.value)
    }
    const [to, setTo] = useState(0)
    const priceTo = (e)=> {
        localStorage.setItem('valuePriceTo', e.target.value)
        setTo(e.target.value)
    }
    useEffect( () => {
        setTimeout(() => {
            getProduct()
        }, 1000)
    }, [from, to])


    let priceFromValue = '', priceToValue = '';
    if (localStorage.getItem('valuePriceFrom') !== null)
        priceFromValue = localStorage.getItem('valuePriceFrom')

    if (localStorage.getItem('valuePriceTo') !== null)
        priceToValue = localStorage.getItem('valuePriceTo')

    return [brand, category, checkCateValue, checkBrandValue, priceFrom, priceTo, priceFromValue, priceToValue]
}

export default SideFilterSearchHook;