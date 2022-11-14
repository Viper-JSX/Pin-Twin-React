let currentIdCount = 0;

export class PinClass{
    constructor(creatorId, imageSrc, title, discription, tags){
        this.id = currentIdCount;
        this.creatorId = creatorId;
        this.imageSrc = imageSrc;
        this.title = title;
        this.discription = discription;
        this.tags = tags;
        this.comments = [];
        this.creationDate = new Date();

        currentIdCount++;
    }

    editData(imageSrc, title, discription, tags){
        this.imageSrc = imageSrc;
        this.title = title;
        this.discription = discription;
        this.tags = tags;
    }

    create(pin){
        const createdPin = Object.create(this.prototype);

        createdPin.id = pin.id;
        createdPin.creatorId = pin.creatorId;
        createdPin.imageSrc = pin.imageSrc;
        createdPin.title = pin.title;
        createdPin.discription = pin.discription;
        createdPin.tags = pin.tags;
        createdPin.comments = this.comments;
        createdPin.creationDate = pin.creationDate;
    }
}