let Value = 0
basic.forever(function () {
    Value = BitMaker.read_Ain(AnalogPort.P0)
    basic.showNumber(Value)
})
