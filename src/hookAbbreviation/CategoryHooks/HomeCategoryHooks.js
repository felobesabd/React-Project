import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryAction } from './../../Reducer/Actions/CategoryAction';


const HomeCategoryHooks = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CategoryAction())
  }, [dispatch])

  const category = useSelector(state => state.allCategoryRed.category)
  const loading = useSelector(state => state.allCategoryRed.loading)

  return [category, loading]

}

export default HomeCategoryHooks;