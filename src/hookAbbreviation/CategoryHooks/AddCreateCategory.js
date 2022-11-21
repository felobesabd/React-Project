import { useEffect, useState }  from 'react'
import avatar from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { CreateCategoryAction } from '../../Reducer/Actions/CategoryAction';
import notify from '../ToastifyAbbr';

const AddCreateCategory = () => {
  const dispatch = useDispatch()

  const [img, setImg] = useState(avatar)
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [loadingStatus, setLoadingStatus] = useState(true)
  const [inpress, setInpress] = useState(false)

// Func => Get Img And Change Img 
  const onImageChange = (e)=> {
    if (e.target.files && e.target.files[0]) {
        setImg(URL.createObjectURL(e.target.files[0]))

        setSelectedFile(e.target.files[0])
    }
  }

  const res = useSelector(state => state.allCategoryRed.category)

  const onChangeName = (e)=> {
    setName(e.target.value)
  }

// Func => Send Img And Name To Data Base 
  const handleSendData = async (e)=> {
    if (name === '' || selectedFile === null) {
      notify('Please Complete Data', 'warn')
    }
    const formData = new FormData();
    formData.append('name', name)
    formData.append('image', selectedFile)
    setLoadingStatus(true)
    setInpress(true)
    await dispatch(CreateCategoryAction(formData))
    setLoadingStatus(false)
  }

        useEffect(() => {
          if (loadingStatus === false) {
            setImg(avatar)
            setName('')
            setSelectedFile(null)
            setLoadingStatus(true)
            setTimeout(()=> setInpress(false), 1000)
            if (res.status === 201) {
                notify('Done', 'success')
            } else {
                notify('Problem with sending data', 'error')
            }
          }
        }, [loadingStatus, res.status])

        return [img, name, loadingStatus, inpress, onImageChange, handleSendData, onChangeName]
}

export default AddCreateCategory;