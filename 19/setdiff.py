def setdiff(a,b):
    return[x for x in a if x not in b]

set = [1,2,3]
two = [2,3,4]

print (setdiff(set,two))
print (setdiff(two,set))
