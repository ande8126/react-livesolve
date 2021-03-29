function GalleryItem(props) {
    const image = prop.image

    return (
        <>
            <img src={image.path} className="gallery-item-image" />
            <p>
                {image.description}
            </p>
            <button className="gallery-item-button-description">Show Description</button>
            <button className="gallery-item-button-like">Like</button>
        </>


    )
}

export default GalleryItem;