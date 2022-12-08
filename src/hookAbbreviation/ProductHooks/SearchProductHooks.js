import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    GetAllProductAction,
    GetAllProductPagesAction,
    GetAllProductSearchAction
} from "../../Reducer/Actions/ProductActions";


const SearchProductHook = ()=> {

    let limit = 6;

    const dispatch = useDispatch()

    let word = '', queryStringCate = '', queryStringBrand = '', priceFrom = 0, priceTo = 0;
    let priceFromString= '', priceToString= '';

    const funcStorage = ()=> {
        if (localStorage.getItem('SearchWord') !== null)
            word = localStorage.getItem('SearchWord')
        if (localStorage.getItem('chooseCate') !== null)
            queryStringCate = localStorage.getItem('chooseCate')
        if (localStorage.getItem('chooseBrand') !== null)
            queryStringBrand = localStorage.getItem('chooseBrand')
        if (localStorage.getItem('valuePriceFrom') !== null)
            priceFrom = localStorage.getItem('valuePriceFrom')
        if (localStorage.getItem('valuePriceTo') !== null)
            priceTo = localStorage.getItem('valuePriceTo')

        if (priceFrom === '' || priceFrom <= 0) {
            priceFromString = '';
        } else {
            priceFromString = `&price[gte]=${priceFrom}`
        }
        if (priceTo === '' || priceTo <= 0) {
            priceToString = '';
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }
    }

    const getProduct = async ()=> {
        funcStorage()
        sortTypeSearch()

        await dispatch(GetAllProductSearchAction(`sort=${sort}&limit=${limit}&keyword=${word}&${queryStringCate}&${queryStringBrand}${priceFromString}${priceToString}`))
    }

    useEffect(()=> {
        getProduct()
    }, [])

    const getPage = async (page)=> {
        funcStorage()
        sortTypeSearch()

        await dispatch(GetAllProductSearchAction(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryStringCate}&${queryStringBrand}${priceFromString}${priceToString}`))
    }

    let sortType = '',
        sort;
    const sortTypeSearch = () => {
        if (localStorage.getItem('sortSearch') !== null) {
            sortType = localStorage.getItem('sortSearch')
        } else {
            sortType = ''
        }
        if (sortType === 'PRICE: LOW TO HIGH')
            sort = '+price';
        else if (sortType === 'PRICE: HIGH TO LOW')
            sort = '-price';
        else if (sortType === 'Normal')
            sort = '';
        else if (sortType === 'Top Selling')
            sort = '-sold';
        else if (sortType === 'Top RATING')
            sort = '-ratingsQuantity';
    }

    const products = useSelector(state => state.allProductRed.allProducts)

    let allProducts = []
    try {
        if (products.data) {
            allProducts = products.data
        } else {
            allProducts = []
        }
    } catch (e) {}

    let pagenate = []
    try {
        if (products.paginationResult) {
            pagenate = products.paginationResult.numberOfPages
        } else {
            pagenate = []
        }

        if (pagenate)
            var pageCount = pagenate
        else
            pageCount = 0;
    } catch (e) {}

    let results = 0
    try {
        if (products.results) {
            results = products.results
        } else {
            results = 0
        }
    } catch (e) {}

    return [allProducts, pagenate, pageCount, getPage, getProduct, results]
}
export default SearchProductHook;