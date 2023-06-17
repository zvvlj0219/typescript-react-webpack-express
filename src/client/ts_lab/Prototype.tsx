
// prototype と __proto__

// Object.protoype === obj.__proto__

let obj = {name: "taro"}
// let obj = new Object(); jsでしか動かん
// obj.name = "taro";
console.log(obj)

class Obj {
    public name: string = 'taro'
    constructor(){}
}
const instence = new Obj()
console.log(instence);

const Prototype = () => {
    return (
        <div>
            <h3>Prototype</h3>
        </div>
    )
}

export default Prototype
