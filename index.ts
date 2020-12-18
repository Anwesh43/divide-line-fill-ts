const w : number = window.innerWidth 
const h : number = window.innerHeight 
const strokeFactor : number = 90 
const sizeFactor : number = 4.9 
const gapFactor : number = 9.9 
const backColor : string = "#BDBDBD"
const colors : Array<string> = [
    "#F44336",
    "#3F51B5",
    "#009688",
    "#795548",
    "#4CAF50"
] 
const parts : number = 2
const bars : number = 4 
const scGap : number = 0.02 / parts 
const delay : number = 20 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}