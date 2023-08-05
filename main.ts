let add = 0
let count = 0
let speed = 50
input.onButtonPressed(Button.A, function slow() {
    
    speed += -10
})
input.onButtonPressed(Button.B, function fast() {
    
    speed += 10
})
basic.forever(function on_forever() {
    
    if (count == 0) {
        add = 1
    }
    
    if (count == 4) {
        add = -1
    }
    
    led.plot(count, 2)
    basic.pause(speed)
    basic.clearScreen()
    count += add
    basic.pause(speed)
})
