#include "pxt.h"

namespace PwmPinMethods {
}

namespace PwmOnlyPinMethods {

  /**
   * Write a value to the servo to control the rotation of the shaft. On a standard servo, this will
   * set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous
   * rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one
   * direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
   * @param name pin to write to
   * @param value angle or rotation speed
   */
  //% help=pins/servo-write weight=41
  //% blockId=dwagga 
  //% block="servo DWAGGA write|pin %name|to %value=protractorPicker" blockGap=8
  //% blockNamespace=centrifuge
  //% name.fieldEditor="gridpicker"
  //% name.fieldOptions.width=220
  //% name.fieldOptions.columns=4
  //% value.defl=90
  void servoWrite(PwmOnlyPin name, int value) {
      PINOP(setServoValue(value));
  }

}
