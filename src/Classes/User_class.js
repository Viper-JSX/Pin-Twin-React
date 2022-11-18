let currentIdCount = 0;

export class UserClass{
    constructor(email, [password]){
        this.id = currentIdCount;
        this.nickname = ( [...email].filter((element, index) => index < email.indexOf("@")) ).join("").toLocaleLowerCase() + currentIdCount.toString();
    
        this.email = email;
        this.password = password;
        this.pins = [];
        this.savedPins = [];
        this.conversations = [];
        this.tagsViewFrequency = {};

        this.profileImageSrc = "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png"; //Set some default value
        this.profileTopImageSrc = "https://images8.alphacoders.com/484/484717.jpg"; //Set some default value

        currentIdCount++;
    } 

    static create(id, email, password, pins, savedPins, conversations, tagsViewFrequency){
        const user = Object.create(this.prototype);
        user.id = id;
        user.email = email;
        user.password = password;
        user.pins = pins;
        user.savedPins = savedPins;
        user.conversations = conversations;
        user.tagsViewFrequency = tagsViewFrequency
        this.followings = [];
    
        return user;
    }

    createPin(pinData) {
        
    }

    savePin(pin){
        this.savedPins.push(pin);
        console.log("Added pin");
    };

    deletePinFromSaved(pinId){
        this.savedPins.splice(this.savedPins.findIndex((pin) => pin.id === pinId), 1);
        console.log("Removed", this.savedPins);
    }

    edit({ profileData }){
        this.profileImageSrc = profileData.profileImageSrc; //These are the properties that currently can be changed
        this.profileTopImageSrc = profileData.profileTopImageSrc;
    }
}