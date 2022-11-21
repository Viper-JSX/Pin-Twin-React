function ImageSelect({ imageSrc, handlePinImageChange }){
    return(
        <label className={`imageSelect ${imageSrc ? "selected" : ""}`} >
            <div className="imageSelectCover">Select Image <br /></div>
            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePinImageChange} />
            <img src={imageSrc} alt="Pin image" />
        </label>
    );
}

export default ImageSelect;