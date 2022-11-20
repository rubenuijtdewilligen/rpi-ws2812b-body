#!/usr/bin/python3

# Bring in Python libraries
import sys
import neopixel
import board

# Get first argument
group = sys.argv[1]

# Define ledstrip NeoPixel object
ledstrip = neopixel.NeoPixel(board.D18, 137, brightness=1)

# Do the magic
if group == 'hartvaten':
    leds = [110]
    for led in leds:
        ledstrip[led] = (0, 20, 255)
elif group == 'spijsvertering':
    leds = [9, 10, 11, 12, 13, 14, 22, 58, 60, 62, 64, 66, 70, 72, 77, 79, 80, 81, 82, 87, 91, 92, 93, 94, 125, 126, 134, 135, 136, 137]
    for led in leds:
        ledstrip[led] = (0, 20, 255)
elif group == 'hormonaal':
    leds = [42, 44, 87]
    for led in leds:
        ledstrip[led] = (0, 20, 255)
elif group == 'ademhaling':
    leds = [26, 28, 30, 32, 107, 113, 119, 121, 123]
    for led in leds:
        ledstrip[led] = (0, 20, 255)
elif group == 'urinair':
    leds = [18, 20, 131, 132, 87]
    for led in leds:
        ledstrip[led] = (0, 20, 255)
elif group == 'all':
    ledstrip.fill((0, 20, 255))
elif group == 'off':
    ledstrip.fill((0, 0, 0))

# End
print('ok')