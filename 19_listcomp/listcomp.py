#SoloDolo -- Thomas Lee
#SoftDev2 pd6
#K19 -- Ready, Set, Math!
#2019-04-17

#the set of all objects that are a member of A, or B, or both
def union(a,b):
    return a + [x for x in b if x not in a]

#the set of all objects that are members of both A and B
def intersection(a,b):
    return [x for x in a if x in b]

#the set of all members of U that are not members of A
def setdiff(a,b):
    return[x for x in a if x not in b]

#the set of all objects that are a member of exactly one of A and B
def symdiff(a,b):
    return [x for x in a if x not in b] + [x for x in b if x not in a]

#the set whose members are all possible ordered pairs (a, b) where a is a member of A and b is a member of B
def cart(a,b):
    return [[x,y] for x in a for y in b]

uno = [1,2,3]
dos = [2,3,4]

un = [1,2]
do = ['red', 'white']

print(union(uno,dos))
print(intersection(uno,dos))
print(setdiff(uno,dos))
print(setdiff(dos,uno))
print(symdiff(uno,dos))
print(cart(un,do))


