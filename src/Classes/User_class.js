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

        this.profileImageSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fsearch%2Fuser%2F&psig=AOvVaw3DzMK321nnL24YHt1sqfyD&ust=1668703127638000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi8zeiRs_sCFQAAAAAdAAAAABAE"; //Set some default value
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