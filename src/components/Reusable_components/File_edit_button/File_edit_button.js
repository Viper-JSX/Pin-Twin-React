function FileEditButton({ accept, handler }){
    return(
        <label className="fileEditButton" >
            <input type="file" accept={accept} hidden onChange={handler} />
            Edit
        </label>
    );
}

export default FileEditButton;