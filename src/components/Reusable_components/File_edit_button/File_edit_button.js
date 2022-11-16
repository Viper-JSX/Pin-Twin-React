function FileEditButton({ accept, handler }){
    return(
        <label >
            <input type="file" accept={accept} hidden onChange={handler} />
            Edit
        </label>
    );
}

export default FileEditButton;