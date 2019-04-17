#Thomas Lee
#SoftDev2 pd6
#K18 -- Getting Clever with List Comprehensions
#2019-04-16

def pythagtrip(n):
    return [[x,y,z] for x in range (n)[1:] for y in range (n)[1:] for z in range (n)[1:] if x*x + y*y == z*z]
def quickSort(l):
    return ((quickSort([y for y in l if y < l[0]]) + [l[0]] + quickSort([x for x in l if x > l[0]])) if len(l) > 2 else l)

print (pythagtrip(6))
print(quickSort([9,8,7,6,5,4,3,1,2]))
