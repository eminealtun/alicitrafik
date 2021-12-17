radio.onReceivedNumber(function (receivedNumber) {
    music.stopAllSounds()
    if (receivedNumber == 2) {
        basic.showString("K")
    }
    if (receivedNumber == 3) {
        basic.showString("S")
    }
    if (receivedNumber == 4) {
        basic.showString("Y")
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
    }
})
radio.setGroup(1)
