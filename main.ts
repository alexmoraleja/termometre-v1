input.onButtonPressed(Button.A, function () {
    serial.writeString("" + (input.temperature()))
    basic.showString("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        basic.showString("Abrigate anda")
    } else {
        basic.showString("Una duchita")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
