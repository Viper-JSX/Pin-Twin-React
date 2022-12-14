let currentIdCount = 0;

export class UserClass{
    constructor(email, password){
        this.id = currentIdCount;
        this.nickname = ( [...email].filter((element, index) => index < email.indexOf("@")) ).join("").toLocaleLowerCase() + currentIdCount.toString();

        this.email = email;
        this.password = password;
        this.pins = [];
        this.savedPins = [];
        this.conversations = [];
        this.followings = [];
        this.followers = [];
        this.tagsViewFrequencyHistogram = {};

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
    
        return user;
    }

    createPin(pinData) {
        
    }

    savePin(pin){
        this.savedPins.push(pin);
    };

    deletePinFromSaved(pinId){
        this.savedPins.splice(this.savedPins.findIndex((pin) => pin.id === pinId), 1);
    }

    follow({ userToFollowId }){
        this.followings.push(userToFollowId);
    }

    unfollow({ userToUnfollowId }){
        this.followings.splice(this.followings.indexOf(userToUnfollowId), 1);
    }

    addFollower({ followerId }){
        this.followers.push(followerId);
    }

    deleteFollower({ followerId }){
        this.followers.splice(this.followers.indexOf(followerId), 1);
    }

    updateTagsViewFrequencyHistogram({ pinTags }){
        pinTags.forEach((tag) => {
            if(this.tagsViewFrequencyHistogram[tag]){
                this.tagsViewFrequencyHistogram[tag]++;
            }
            else{
                this.tagsViewFrequencyHistogram[tag] = 1; 
            }
        });
    };

    edit({ profileData }){
        this.profileImageSrc = profileData.profileImageSrc; //These are the properties that currently can be changed
        this.profileTopImageSrc = profileData.profileTopImageSrc;
    }
}