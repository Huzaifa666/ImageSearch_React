import React from 'react'
import '../Components/ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard image = { image } key = { image.id } />
    });

    return <div className = "container_img">{images}</div>
}

export default ImageList;