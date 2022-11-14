export function convertTagsStringToTagsArray(str){
    const specialCharRegExp = /[^a-zA-Z0-9\s+]/;
    
    if(!str || specialCharRegExp.test(str)){
        return [];
    }

    return str.trim().split(/\s+/);
}