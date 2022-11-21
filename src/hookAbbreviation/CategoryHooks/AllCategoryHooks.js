import  { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CategoryAction, CategoryPagesAction} from '../../Reducer/Actions/CategoryAction';

const AllCategoryHooks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CategoryAction(18))
  }, [dispatch])

  const category = useSelector(state => state.allCategoryRed.category)
  const loading = useSelector(state => state.allCategoryRed.loading)

  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  const getPage = (page)=> {
    dispatch(CategoryPagesAction(page))
    console.log(page);
  }

  return [category, loading, pageCount, getPage]

}

export default AllCategoryHooks;