let add = 0
let count = 0
let speed = 13
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
