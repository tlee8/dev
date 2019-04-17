from functools import reduce

words = open('book.txt', 'r').read().lower().strip(',.?!;:').split()

#print(words)

def wordfreq(word):
    print ([1 for x in words if x == word])
    #return len([1 for x in words if x == word])

print(wordfreq('torture'))
    

def phrasefreq
