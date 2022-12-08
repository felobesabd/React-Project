import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetAllProductAction, GetAllProductPagesAction} from "../../Reducer/Actions/ProductActions";


const DeleteProductAdminHook = ()=> {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(GetAllProductAction(10))
    }, [dispatch])

    const getPage = async (page)=> {
        await dispatch(GetAllProductPagesAction(10, page))
    }

    const allProducts = useSelector(state => state.allProductRed.allProducts)

    let item = []


    try {
        if (allProducts.data) {
            item = allProducts.data
        } else {
            item = []
        }

    } catch (e) {}

    let pagenate = []
    try {
        if (allProducts.paginationResult) {
            pagenate = allProducts.paginationResult.numberOfPages
        } else {
            pagenate = []
        }

        if (pagenate)
            var pageCount = pagenate
        else
            pageCount = 0;

    } catch (e) {}

    return [item , pagenate, pageCount, getPage]
}
export default DeleteProductAdminHook;