def bib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)


def memoize(f):
    memo = {}
    def helper(x):
        if x<2:
            memo[str(x)] = fib(x)
        else:
            memo[str(x)] = memo[str(x-1)] + memo[str(x-2)]
        return memo[str(x)]
    return helper

def fib(n):
    if n == 0:
        return 0
    else:
        return 1


fib = memoize(fib)
print(fib(1))
