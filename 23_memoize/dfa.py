import random

def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

print(greet())
