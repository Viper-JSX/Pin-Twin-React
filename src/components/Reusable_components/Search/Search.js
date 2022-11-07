function Search({ value, handler, placeholder="Search" }){
    return(
        <input type="text" value={value} placeholder={placeholder} onChange={handler} />
    );
}

export default Search;