import  { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { BrandAction, BrandPagesAction } from '../../Reducer/Actions/BrandActions';

const AllBrandHooks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(BrandAction(12))
  }, [])

  const brand = useSelector(state => state.allBrandRed.brand)
  const loading = useSelector(state => state.allBrandRed.loading)

  let pageCount = 0;
  try {
    if (brand.paginationResult)
      pageCount = brand.paginationResult.numberOfPages;
  } catch (e) {}


  const getPage = (page)=> {
    dispatch(BrandPagesAction(page))
  }

  return [brand, loading, pageCount, getPage]

}

export default AllBrandHooks;