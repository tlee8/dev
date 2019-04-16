def union(a,b):
    return a + [x for x in b if x not in a]

set = [1,2,3]
two = [2,3,4]

print (union(set,two))
