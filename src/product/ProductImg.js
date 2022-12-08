import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile3 from '../images/mobile3.jpeg'
import mobile1 from '../images/mobile1.png'
import mobile2 from '../images/mobile2.png'
import GetOneProductByIdHook from "../hookAbbreviation/ProductHooks/GetOneProductById";

const ProductImg = ({id}) => {
    const [item] = GetOneProductByIdHook(id)

    let images = []
    if (item.images) {
        images = item.images.map((img)=> {
            return { original: img }
        })
    } else {
        images = []
    }


  return (
    <div className='product-img pt-2 d-flex justify-content-center  align-items-center'>
    <ImageGallery items={images}
    defaultImage={mobile1}
    showFullscreenButton={false}
    isRTL={true}
    showPlayButton={false}
    showThumbnails={false}
    />
    </div>
  )
}

export default ProductImg;