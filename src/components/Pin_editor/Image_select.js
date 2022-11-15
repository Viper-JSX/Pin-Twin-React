function ImageSelect({ imageSrc, handlePinImageChange }){
    return(
        <label className="imageSelect">
            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePinImageChange} />
            <img src={imageSrc} alt="Pin image" />
        </label>
    );
}

export default ImageSelect;