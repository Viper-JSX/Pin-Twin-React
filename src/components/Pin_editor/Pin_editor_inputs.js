import ImageSelect from "./Image_select";
import PinEditorTextFields from "./Pin_editor_text_fields";

function PinEditorInputs({ pinData, handlePinImageChange, handlePinTitleChange, handlePinDiscriptionChange, handlePinTagsChange }){
    return(
        <div className="pinEditorInputs">
            <ImageSelect imageSrc={pinData.imageSrc} handlePinImageChange={handlePinImageChange} />
            <PinEditorTextFields pinData={pinData} handlePinTitleChange={handlePinTitleChange} handlePinDiscriptionChange={handlePinDiscriptionChange} handlePinTagsChange={handlePinTagsChange}  />
        </div>
    );  
}

export default PinEditorInputs;