export enum Gesture {
    //% block="tilt up"
    tiltup = 3,
    //% block="shake"
    shake = 1,
    //% block="tilt left"
    tiltleft=2,
    //% block="tilt right"
    liltright = 23,
    //% block="face up"
    faceup = 21,
    //% block="face down"
    facedown = 123,

}

export enum get1 {
    //% block="A"
    A = 32,
    //% block="B"
    B = 56,

}
//% color=#8600FF weight=100 icon"\uf516"
//% block="makecode_test" blockID="makecode_test"
namespace makecode_test {

    //% block = "abc_1 Get3 = $abc_a + $abc_A"
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=220
    //% gesture.fieldOptions.columns=3
    export function abc_1(abc_a: Gesture, abc_A: get1) : number{
        let Get3 = abc_a + abc_A
        return Get3
    }
}