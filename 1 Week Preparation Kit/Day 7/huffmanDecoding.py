# Complete the function decode_huff in the editor below. It must return the decoded string.

# decode_huff has the following parameters:

# root: a reference to the root node of the Huffman tree
# s: a Huffman encoded string
# Input Format
# There is one line of input containing the plain string, s. Background code creates the Huffman tree 
# then passes the head node and the encoded string to the function.

def decodeHuff(root, s):
    cur = root
    chararray = []
    for c in s:
        if c == '0' and cur.left:
            cur = cur.left
        elif cur.right:
            cur = cur.right
        
        if cur.left is None and cur.right is None:
            chararray.append(cur.data)
            cur = root
    
    print("".join(chararray))