input.onButtonPressed(Button.A, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Yard = Feet / 3
    basic.showNumber(Yard)
    basic.showString("Yard")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Centimeters = 0
    basic.showNumber(Centimeters)
    basic.showString("Centimeters")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Inch = Feet * 12
    basic.showNumber(Inch)
    basic.showString("Inch")
})
let Inch = 0
let Centimeters = 0
let Yard = 0
let Feet = 0
Feet = randint(1, 100)
basic.forever(function () {
	
})
