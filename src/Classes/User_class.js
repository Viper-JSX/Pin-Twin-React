class UserClass{
    constructor(mail, [password]){
        this.mail = mail;
        this.password = password;
        
        this.pins = [];
        this.savedPins = [];
        this.conversations = [];
        this.tagsViewFrequency = {};
    } 

    createPin(pinData) {
        
    }

    savePin(pin){
        this.pins.push(pin);
    };
}