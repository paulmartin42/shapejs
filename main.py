def on_button_pressed_a():
    basic.show_number(0)
    basic.show_icon(IconNames.HEART)
    basic.show_string("Hello!")
input.on_button_pressed(Button.A, on_button_pressed_a)
