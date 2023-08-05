add = 0
count = 0
speed = 50
def slow():
    global speed
    speed += -10
input.on_button_pressed(Button.A, slow)

def fast():
    global speed
    speed += 10
input.on_button_pressed(Button.B, fast)
def on_forever():
    global add, count
    if count == 0:
        add = 1
    if count == 4:
        add = -1
    led.plot(count, 2)
    basic.pause(speed)
    basic.clear_screen()
    count += add
    basic.pause(speed)
basic.forever(on_forever)