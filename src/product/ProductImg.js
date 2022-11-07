import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile3 from '../images/mobile3.jpeg'
import mobile1 from '../images/mobile1.png'
import mobile2 from '../images/mobile2.png'

const ProductImg = () => {
    const images = [
        {
        original: `${mobile1}`,
        // thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
        original: `${mobile2}`,
        // thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
        original: `${mobile3}`,
        // thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

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