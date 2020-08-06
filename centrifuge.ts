/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace centrifuge {
    //% block
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function funtion2() {
    
    }
    
    //% help=pins/servo-write-pin weight=20
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value" blockGap=8
    //% parts=microservo trackArgs=0
    //% value.min=0 value.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    //% name.fieldOptions.tooltips="false" name.fieldOptions.width="250"
    //% weight=100 color=#0fbc11
    export function servo(name:number ,value: number): void {
        pins.servoWritePin(name, value)
    }
}
    
