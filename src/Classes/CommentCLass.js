let currentIdCount = 0;

export class CommentClass{
    constructor(pinId, authorId, text){
        this.id = currentIdCount;
        this.pinId = pinId;
        this.authorId = authorId;
        this.text = text;
        currentIdCount++;
    }
}
