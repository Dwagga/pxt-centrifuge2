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
    //% blockId=device_set_servo_pin block="servo write|pin %time|to %value" blockGap=8
    //% parts=microservo trackArgs=0
    //% value.min=0 value.max=180
    //% time.fieldEditor="gridpicker" time.fieldOptions.columns=6
    //% time.fieldOptions.tooltips="false" time.fieldOptions.width="250"
    //% weight=100 color=#0fbc11
    export function servo(time:number ,value: number): void {
        pins.D13.servoWrite(value)
    }
}
    
