input.onButtonPressed(Button.A, function () {
    speed += -10
})
input.onButtonPressed(Button.B, function () {
    speed += 10
})
let add = 0
let count = 0
let speed = 13
basic.forever(function () {
    led.plot(count, 2)
    basic.pause(speed)
    basic.clearScreen()
    count += add
    basic.pause(speed)
})
basic.forever(function () {
    if (count == 0) {
        add = 1
    }
    if (count == 4) {
        add = -1
    }
})
