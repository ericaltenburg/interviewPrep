class Node:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = False

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, key):
        # If not present, inserts key into trie
        # If the key is prefix of trie node,
        # just marks leaf node

        curr = self.root

        for i in range(0, len(key)):
            if (key[i] not in curr.children):
                curr.children[key[i]] = Node()
            
            curr = curr.children[key[i]]
    
        curr.isEndOfWord = True
    
    def search(self, key):
        # Search key in the trie
        # Returns true if key presents
        # in trie, else false
        curr = self.root

        for i in range(0, len(key)):
            if (key[i] not in curr.children):
                return False
            
            curr = curr.children[key[i]]
        
        return curr.isEndOfWord
    
    def findEndingWords(self, node):
        amount = 0
        if (node.isEndOfWord):
            amount += 1
        
        for child in node.children:
            amount += self.findEndingWords(node.children[child])
        
        return amount
    
    def prefixSearch(self, key):
        curr = self.root
        count = 0
        for i in range(0, len(key)):
            if (key[i] not in curr.children):
                return 0
            
            curr = curr.children[key[i]]
        
        count += self.findEndingWords(curr)

        return count
        

            
# driver function
def main():
 
    # Input keys (use only 'a' through 'z' and lower case)
    keys = ["the","a","there","anaswe","any",
            "by","their"]
    output = ["Not present in trie",
              "Present in trie"]
 
    # Trie object
    t = Trie()
 
    # Construct trie
    for key in keys:
        t.insert(key)
 
    # Search for different keys
    print("{} ---- {}".format("the",output[t.search("the")]))
    print("{} ---- {}".format("these",output[t.search("these")]))
    print("{} ---- {}".format("their",output[t.search("their")]))
    print("{} ---- {}".format("thaw",output[t.search("thaw")]))

    keys = ["hack", "hackerrank"]
    t2 = Trie()

    for key in keys:
        t2.insert(key)
    
    lookup = ["hac", "hak", "hack", "hacker"]

    for key in lookup:
        print(t2.prefixSearch(key))


 
if __name__ == '__main__':
    main()
 