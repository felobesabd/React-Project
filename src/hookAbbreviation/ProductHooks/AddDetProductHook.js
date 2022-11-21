import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CategoryAction} from "../../Reducer/Actions/CategoryAction";
import {BrandAction} from "../../Reducer/Actions/BrandActions";
import {chooseCategoryAction} from "../../Reducer/Actions/SubCategoryAction";
import notify from "../ToastifyAbbr";
import {CreateProductAction} from "../../Reducer/Actions/ProductActions";
import makeAnimated from "react-select/animated";

const AddDetProductHook = () => {

const dispatch = useDispatch()

useEffect(() => {
    dispatch(CategoryAction())
    dispatch(BrandAction())
}, [dispatch])

    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefore = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }

const category = useSelector(state => state.allCategoryRed.category)

const brand = useSelector(state => state.allBrandRed.brand)

const [image, setImage] = useState([]);

//values state
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [priceBefore, setPriceBefore] = useState('');
const [priceAfter, setPriceAfter] = useState('');
const [qty, setQty] = useState('');
const [catID, setCatID] = useState('0');
const [brandID, setBrandID] = useState('0');
// const [subCatID, setSubCatID] = useState([]);
const [selectedSubID, setSelectedSubID] = useState([]);
const [loading, setLoading] = useState(true);

const subCategory = useSelector(state => state.subCategoryRed.subcategory)

// State => Options
const [option, setOptions] = useState([]);
// Func=> Save Id Category
const onSelectCategory = async (e)=> {
    if (e.target.value !== '0') {
        await dispatch(chooseCategoryAction(e.target.value))
    }
    setCatID(e.target.value)
}

useEffect(()=> {
    if (catID !== '0') {
        if (subCategory.data) {
            setOptions(subCategory.data)
            console.log(option)
        }
    }
}, [catID, subCategory.data])

const onSelect = (selectedList) => {
    setSelectedSubID(selectedList)
}
const onRemove = (selectedList) => {
    setSelectedSubID(selectedList)
}

// Func=> Save Id Brand
const onSelectBrand = (e)=> {
    setBrandID(e.target.value)
}

// Compact Picker
const [color, setColor] = useState([]);
// Status Compact picker
const [statusCompact, setStatusCompact] = useState(false);

// Func=> Show Color of CompactPicker
const showColor = ()=> {
    setStatusCompact(!statusCompact)
}
// func => Selected Color
const onColorSelected = (colorSelect)=> {
    setColor([...color, colorSelect.hex])
    setStatusCompact(!statusCompact)
}

// Func=> Remove Color of CompactPicker
const removeColor = (e)=> {
    const newColor = color.filter((item)=> item !== e)
    setColor(newColor)
}
//to convert base 64 to file
function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

// Func=> Send Data
const handleData = async (e) => {

    if (name === '' || description === '' || priceBefore <= 0 || priceAfter <= 0
        || qty <= 0 || catID === '0' || brandID === '0' || image.length <= 0) {
        notify('Complete Data', 'warn')
        return;
    }

    const imageCover =  dataURLtoFile(image[0], Math.random() + ".png")
    const arrayOfImage = Array.from(Array(Object.keys(image).length).keys()).map(
        (e,index)=> {
            return  dataURLtoFile(image[index], Math.random() + ".png")
        })

    const formData = new FormData()

    formData.append('title', name)
    formData.append('imageCover', imageCover)
    formData.append('description', description)
    formData.append('category', catID)
    formData.append('quantity', qty)
    formData.append('price', priceBefore)
    formData.append('brand', brandID)

    // Add Array Data To FormData
    arrayOfImage.map((e)=> formData.append('images', e))
    color.map((e)=> formData.append('availableColors', e))
    selectedSubID.map((e)=> formData.append('subcategory', e._id))

    setLoading(true)
    await dispatch(CreateProductAction(formData))
    setLoading(false)
}

const product = useSelector(state => state.allProductRed.product)

useEffect(()=> {

    if (loading === false) {
        setName('')
        setDescription('')
        setPriceBefore('')
        setPriceAfter('')
        setQty('')
        setCatID('0')
        setBrandID('0')
        setImage([])
        setSelectedSubID([])
        setColor([])
        setTimeout(()=> setLoading(true), 1000)

        if (product) {
            if (product.status === 201) {
                notify('Done', 'success')
            } else {
                notify('Problem', 'error')
            }
        }
    }

}, [loading])

// React Select
const animatedComponents = makeAnimated();

    return [onChangeProdName, onChangeDesName, onChangePriceBefore, onChangePriceAfter, onChangeQty,
        category, brand, image, setImage, name, description, priceBefore, priceAfter, qty, catID,
        brandID, selectedSubID, loading, subCategory, option, onSelectCategory, onSelect, onRemove,
        onSelectBrand, color, removeColor, showColor, onColorSelected, statusCompact, handleData, product]

}

export default AddDetProductHook;