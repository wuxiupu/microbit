serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + (input.magneticForce(Dimension.Strength)))
})
