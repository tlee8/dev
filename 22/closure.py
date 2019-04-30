def repeat(word):
    def times(n):
        return word*n
    return times

r1 = repeat('hello')
r2 = repeat('goodbye')

print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print(outer())

def uter():
    x = 'foo'
    def inner():
        nonlocal x
        x = 'bar'
    inner()
    return x

print(uter())

def ter():
    x = 'foo'
    def inner():
        global x
        x = 'bar'
    inner()
    return x

print(uter())
