'''
Find with path compression which is log(n)
'''
def find(parents, u):
    if (u != parents[u]):
        parents[u] = find(parents, parents[u])
    
    return parents[u]

'''
Union with ranking to make sure time complexity stays at log(n) becuase of find 
where n is the number of elements
'''
def union(parents, ranks, u, v):
    p1 = find(parents, u)
    p2 = find(parents, v)
    
    if (p1 == p2):
        return False
    if (ranks[p2] > ranks[p1]):
        temp = p1
        p1 = p2
        p2 = temp
    parents[p2] = p1
    ranks[p1] += ranks[p2]
    return True

class Solution:
    def minimumCost(self, n: int, connections: List[List[int]]) -> int:
        
        connections.sort(key = lambda x:x[2])
        servers = set()
        parents = {}
        ranks = {}
        
        for start, end, weight in connections:
            servers.add(start)
            servers.add(end)
            
        for i in range(1, n+1):
            if (i not in servers):
                return -1
        
        for x in servers:
            parents[x] = x
            ranks[x] = 1
        
        res = []
        
        for start, end, weight in connections:
            if (union(parents, ranks, start, end)):    
                res.append([start, end, weight])
        
        isConnected = True
        ans = 0
        
        oldP = find(parents, res[0][0])
        
        for i in range(0, len(res)):
            newP = find(parents, res[i][0])
            if (oldP != newP):
                isConnected = False
                break
            ans += res[i][2]
        
        if (not isConnected):
            return -1
        else:
            return ans