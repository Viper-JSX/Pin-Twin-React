import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function FileEditButton({ accept, handler }){
    return(
        <label className="fileEditButton" >
            <input type="file" accept={accept} hidden onChange={handler} />
            <FontAwesomeIcon icon={faEdit} />
        </label>
    );
}

export default FileEditButton;