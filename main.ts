basic.showIcon(IconNames.Rollerskate)
radio.setGroup(38)
let pauseTime = 10
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("left", 1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        radio.sendValue("left", 0)
        basic.showIcon(IconNames.Square)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("right", 1)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        radio.sendValue("right", 0)
        basic.showIcon(IconNames.Square)
    }
})
