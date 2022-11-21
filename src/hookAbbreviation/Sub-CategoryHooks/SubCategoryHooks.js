import { useEffect, useState } from "react"
import notify from './../ToastifyAbbr';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryAction } from './../../Reducer/Actions/CategoryAction';
import { CreateSubCategoryAction } from './../../Reducer/Actions/SubCategoryAction';

const SubCategoryHooks = () => {
  const [id, setId] = useState('0')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)
  const [inPress, setInPress] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!navigator.onLine) {
        notify("There's a problem with Internet connectivity", "warn")
        return;
    }
    dispatch(CategoryAction())
  }, [dispatch])

  const category = useSelector(state => state.allCategoryRed.category)
  const subCategory = useSelector(state => state.subCategoryRed.subcategory)

  const handleChangeValue = (e) => {
    console.log(e.target.value); // Value Id
    setId(e.target.value); // Value Id
  }

  const onChangeName = (e)=> {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    if (id === '0') {
      notify('You must choose a category', 'warn')
      return;
    }
    if (name === '') {
      notify('You must Write Name', 'warn')
      return;
    }
    setLoading(true)
    setInPress(true)
    await dispatch(CreateSubCategoryAction({
      name: name,
      category: id
    }))
    setLoading(false)
  }

  useEffect(() => {
    if (loading === false) {
      setName('')
      setTimeout(()=> setInPress(false), 200)
      if (subCategory.status === 201) {
        notify('Done', 'success')
      } else if (subCategory === "Error Error: Request failed with status code 400") {
        notify('gggg', 'warn')
      }
      else {
        notify('Problem with sending data', 'error')
      }
      setLoading(true)
    } 
  }, [loading, subCategory, subCategory.status])

  return [name, loading, inPress, category, handleChangeValue, onChangeName, handleSubmit]
}

export default SubCategoryHooks;