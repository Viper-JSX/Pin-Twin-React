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

        currentIdCount++;
    } 

    createPin(pinData) {
        
    }

    savePin(pin){
        this.pins.push(pin);
    };
}