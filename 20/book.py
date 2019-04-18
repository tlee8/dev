from functools import reduce


#print(words)

def wordfreq(word):
    words = open('book.txt', 'r').read().lower().strip(',.?!;:').split()
    count = [1 for x in words if x == word]
    return reduce((lambda x,y: x+y), count)

print(wordfreq('peter'))
    

def phrasefreq(phrase):
    words = open('book.txt', 'r').read().lower().strip(',.?!;:').split(phrase)
    return len(words)-1

#print(phrasefreq('peter pan'))
