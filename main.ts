input.onButtonPressed(Button.A, function () {
    if (game_state == 1) {
        a_button_score += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (game_state == 1) {
        b_button_score += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    a_button_score = 0
    b_button_score = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Go!")
    game_state = 1
    basic.pause(10000)
    game_state = 0
    basic.showString("A:")
    basic.showNumber(a_button_score)
    basic.showString("B:")
    basic.showNumber(b_button_score)
})
// This game begins when the micro:bit is shaken. A count down is given and then both players push either the A or B button for 10 seconds. Once that is finished the score for A and B are displayed on the micro:bit.
// 
// Button counts are stored in a_button_score and b_button_score which are reset for each game. Players can't push the button and increase their score outside game time because we create a game_state variable. When the game_state is 0 the game is not running but when the game_state variable is 1 the game is running.
let game_state = 0
let b_button_score = 0
let a_button_score = 0
basic.showString("Shake to Start!")
a_button_score = 0
b_button_score = 0
game_state = 0
