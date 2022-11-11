let currentIdCount = 0;

export class UserClass{
    constructor(mail, [password]){
        this.id = currentIdCount;
        this.nickname = ( [...mail].filter((element, index) => index < mail.indexOf("@")) ).join("").toLocaleLowerCase() + currentIdCount.toString();
    
        this.mail = mail;
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