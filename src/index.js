import Bowman from "./Bowman"
import Swordsman from "./Swordsman"
import Magician from "./Magician"
import Daemon from "./Daemon"
import Undead from "./Undead"
import Zombie from "./Zombie"
export default class Character {
    constructor(name, type) {
        const obj = { 
        'Bowman':  [25,25], 
        'Swordsman':[40,10], 
        'Magician':[10,40], 
        'Daemon':[10,40], 
        'Undead':[25,25], 
        'Zombie':[40,10] 
        };
           
        if(name.length < 2 || name.length > 10) {
            throw new Error('Имя не должно быть меньше двух символов и длинее десяти символов');
        } else {
            this.name = name
        }

        if(!obj.hasOwnProperty(type)) {
            throw new Error('Недопустимый тип персонажа');                
        } else {
            this.type = type
        }

        this.health = 100,
        this.level = 1
    }
}