import {useEffect, useState} from "react";
import SearchProductHook from "../ProductHooks/SearchProductHooks";


const NavSearchHook = ()=> {

    const [, , , , getProduct] = SearchProductHook()
    const [searchWord, setSearchWord] = useState('')

    const onChangeSearchWord = (e)=> {
        localStorage.setItem('SearchWord', e.target.value)
        setSearchWord(e.target.value)
    }
    useEffect(()=> {
        setTimeout(()=> {
            getProduct()
        }, 1000)
    }, [searchWord])

    return [searchWord, onChangeSearchWord]

}

export default NavSearchHook;