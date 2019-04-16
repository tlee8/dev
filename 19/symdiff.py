def symdiff(a,b):
    return [x for x in a if x not in b] + [x for x in b if x not in a]

set = [1,2,3]
two = [2,3,4]

print(symdiff(set,two))
