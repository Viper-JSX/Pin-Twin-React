let currentIdCount = 0;

class PinClass{
    constructor(id, creatorId, imageSrc, title, discription, tags, creationDate){
        this.id = currentIdCount;
        this.creatorId = creatorId;
        this.imageSrc = imageSrc;
        this.title = title;
        this.discription = discription;
        this.tags = tags;
        this.creationDate = creationDate;

        currentIdCount++;
    }

    create(pin){
        const createdPin = Object.create(this.prototype);

        createdPin.id = pin.id;
        createdPin.creatorId = pin.creatorId;
        createdPin.imageSrc = pin.imageSrc;
        createdPin.title = pin.title;
        createdPin.discription = pin.discription;
        createdPin.tags = pin.tags;
        createdPin.creationDate = pin.creationDate;
    }
}