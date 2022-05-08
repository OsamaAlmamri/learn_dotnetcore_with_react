export interface IDock {

    name : String,
    numLgs:Number,
    makeSound:(sound:string)=>void
}

const dock1:IDock={
    name: "d1",
    numLgs: 2,
    makeSound: function (sound: string): void {
        console.log(sound)
       
    }
}

const dock2:IDock={
    name: "d2",
    numLgs: 2,
    makeSound: function (sound: string): void {
        console.log(sound)
       
    }
}

export const docks=[dock1,dock2]