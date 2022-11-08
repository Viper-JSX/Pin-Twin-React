function Search({ value, handler, placeholder="Search" }){
    return(
        <input className="search" type="text" value={value} placeholder={placeholder} onChange={handler} />
    );
}

export default Search;