import timeit

def fib(n):
    if (n <= 2):
        return 1
    return fib(n-1) + fib(n-2)

def fib_memo(num):
    memo = {}
    
    def perform(n):
        if (n <= 2):
            return 1
        
        if (n in memo):
            return memo[n]
        else:
            memo[n] = perform(n-1) + perform(n-2)
            return memo[n]
    
    return perform(num)

def fib_memo2(n, memo = {}):
    if (n <= 2):
        return 1
    
    if (n in memo):
        return memo[n]
    else:
        memo[n] = fib_memo2(n-1, memo) + fib_memo2(n-2, memo)
        return memo[n]


start = timeit.default_timer()
x = fib_memo2(170)
stop = timeit.default_timer()
print(f'Time: {stop - start} \n{x}')