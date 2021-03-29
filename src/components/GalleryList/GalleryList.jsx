import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    const images = props.images;

    return (
        <div className="gallery-list-container">
            {images.map(image => {
                return (
                    <GalleryItem image={image} />
                )
            })}
        </div>
    )
}

export default GalleryList