let currentIdCount = 0;

export class Comment{
    constructor(authorId, text){
        this.id = currentIdCount;
        this.authorId = authorId;
        this.text = text;
        currentIdCount++;
    }
}
