function turnLeft (degrees: number) {
    timeToWait = degrees * Microsec_In_A_Sec / Degrees_Per_Sec
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    turnLeft(90)
})
let timeToWait = 0
let Degrees_Per_Sec = 0
let Microsec_In_A_Sec = 0
Microsec_In_A_Sec = 1000000
let Distance_Per_Sec = 100
Degrees_Per_Sec = 200
