import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CategoryAction} from "../../Reducer/Actions/CategoryAction";
import {BrandAction} from "../../Reducer/Actions/BrandActions";
import {chooseCategoryAction} from "../../Reducer/Actions/SubCategoryAction";
import notify from "../ToastifyAbbr";
import {CreateProductAction, GetOneProductAction, UpdateProductAction} from "../../Reducer/Actions/ProductActions";
import makeAnimated from "react-select/animated";

const EditProductAdminHook = (id) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const dataBase = async () => {
            await dispatch(GetOneProductAction(id))
            await dispatch(CategoryAction())
            await dispatch(BrandAction())
        }
        dataBase()
    }, [dispatch])

    const oneProduct = useSelector(state => state.allProductRed.oneProduct)

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

    //
    useEffect(()=> {
        if (oneProduct.data) {
            setName(oneProduct.data.title)
            setDescription(oneProduct.data.description)
            setPriceBefore(oneProduct.data.price)
            setQty(oneProduct.data.quantity)
            setCatID(oneProduct.data.category)
            setBrandID(oneProduct.data.brand)
            setColor(oneProduct.data.availableColors)
            setImage(oneProduct.data.images)
        }
    }, [oneProduct])

    const subCategory = useSelector(state => state.subCategoryRed.subcategory)

// State => Options
    const [option, setOptions] = useState([]);
// Func=> Save Id Category
    const onSelectCategory = (e)=> {
        setCatID(e.target.value)
    }

    useEffect(()=> {
        if (catID !== '0') {
            const run = async ()=> {
                await dispatch(chooseCategoryAction(catID))
            }
            run()
        }
    }, [catID])

    useEffect(()=> {
        if (subCategory.data) {
            setOptions(subCategory.data)
        }
    }, [subCategory.data])

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
//convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

// Func=> Send Data
    const handleData = async () => {

        if (name === '' || description === '' || priceBefore <= 0 ||
            qty <= 0 || catID === '0' || brandID === '0' || image.length <= 0) {
            notify('Complete Data', 'warn')
            return;
        }
        console.log(image[0])
        let imageCover;
        if (image[0].length <= 1000) {
            convertURLtoFile(image[0]).then(val => imageCover = val)
        } else {
            imageCover = dataURLtoFile(image[0], Math.random() + ".png")
        }

        let arrayOfImage = []
        Array.from(Array(Object.keys(image).length).keys()).map(
            (e,index)=> {
                if (image[index].length <= 1000) {
                    convertURLtoFile(image[index]).then(val => arrayOfImage.push(val))
                } else {
                    arrayOfImage.push(dataURLtoFile(image[index], Math.random() + ".png"))
                }
            })
        console.log(arrayOfImage)

        const formData = new FormData()

        formData.append('title', name)
        formData.append('description', description)
        formData.append('category', catID)
        formData.append('quantity', qty)
        formData.append('price', priceBefore)
        formData.append('brand', brandID)

        // Add Array Data To FormData
        setTimeout(()=> {
            formData.append('imageCover', imageCover)
            arrayOfImage.map((e)=> formData.append('images', e))
        }, 1000)

        color.map((e)=> formData.append('availableColors', e))
        selectedSubID.map((e)=> formData.append('subcategory', e._id))

        setTimeout( async ()=> {
            setLoading(true)
            await dispatch(UpdateProductAction(id, formData))
            setLoading(false)
        }, 1000)


    }

    const product = useSelector(state => state.allProductRed.updateProduct)

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
                if (product.status === 200) {
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

export default EditProductAdminHook