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

        this.profileImageSrc = ""; //Set some default value
        this.profileTopImageSrc = ""; //Set some default value

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

        return user;
    }

    createPin(pinData) {
        
    }

    savePin(pin){
        this.savedPins.push(pin);
    };

    edit({ profileData }){
        console.log(profileData, "Changeeeeee");
    }
}