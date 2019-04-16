UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NUMBERS = "1234567890"

def checker(p):
    u= [1 for x in p if x in UC_LETTERS]
    l=[1 for x in p if x in LC_LETTERS]
    n=[1 for x in p if x in NUMBERS]
    sumu = 0
    suml=0
    sumn=0
    for x in len(p):
        sumu += int(u[x])
        suml += int(l[x])
        sumn += int(n[x])
    if sumu > 0 and suml > 0 and sumn > 0:
        return True
    else:
        return False

print(checker("asdfasdsaf"))
print (checker("QWERasdf123"))
