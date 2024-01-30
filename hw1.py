"""
HW 1: Tries

Name:

PennKey:

Number of hours spent on homework:

Collaboration is NOT permitted.

In all functions below, the "NotImplementedError" exception is raised, for
you to fill in. The interpreter will not consider the empty code blocks
as syntax errors, but the "NotImplementedError" will be raised if you
call the function. You will replace these raised exceptions with your
code completing the function as described in the docstrings.

A trie is a tree-like data structure that stores a set of strings so that we can efficiently search for a given string in the set. 
Tries have various applications, including spell checking and autocomplete. 

You may be wondering, why would we ever need to use a Trie? Why not use a balanced binary search tree or a hash table? In fact, hash tables have O(1) expected time complexity for search, and balanced binary search trees have O(log n) time complexity for search. 
The reason is while these data structures have good time complexity for search, they are not efficient for searching for strings with a given prefix and enumerating all strings with a given prefix in lexicographic order.
Another reason is that tries are more space efficient than hash tables and balanced binary search trees, as when hash tables increase in size, collisions become more likely raising the time complexity of search, and balanced binary search trees have a lot of overhead for storing pointers to child nodes, and rebalancing the tree when necessary.

More formally, given an alphabet A (set of valid characters, such as the English alphabet, or {A,C,D,G} for DNA)
a set of strings, S such that no string is the prefix of another, a trie is an ordered tree whose nodes (except the root node) are labeled with characters from A. The tree has |S| leaves, one for every string. 
The tree is constructed such that the concatenation of characters from root to leaf forms a string in S.

Here is an example:
Given A as the English alphabet and S={bet, bid, bit, set, step}, the corresponding trie is:

In this homework, you will implement a trie and some functions that operate on it, with one twist. The same word can be inserted into the trie multiple times, so you will have to keep track of the number of times a word is inserted into the trie.

"""


def insert(trie, word):
    """
    Add a word to the given trie.

    Args:
        trie (dict): the dictionary representation of a trie
        word (str): the word to be added

    Returns:
        None

    Side effect:
        trie is modified with word included
    """
    raise NotImplementedError

def search(trie, word):
    """
    Check whether the given word is present within the trie.

    Args:
        trie (dict): the trie to check against
        word (str): the word to check

    Returns:
        bool: True if the word is in the trie, False if it is not
    """
    raise NotImplementedError

def startsWith(trie, prefix):
    """
    Check whether there is a word in the trie that starts with the given prefix.

    Args:
        trie (dict): the trie to check against
        prefix (str): the prefix to check

    Returns:
        bool: True if there is a word in the trie that starts with the given prefix, False if it is not
    """
    raise NotImplementedError


def create_trie(word_list):
    """
    Creates a trie from the given word list.

    Args:
        word_list (list): list of words (str)

    Returns:
        dict: a dictionary representation of the trie
    """
    raise NotImplementedError


def list_matches(trie, prefix):
    """
    List all word with the given prefix in the trie, including each word's count in the form of a tuple.
    If no words in the trie match the given prefix, return an empty list.

    Args:
        trie (dict): the trie to search over
        prefix (str): the prefix to match against

    Returns:
        list of tuples: all words in the trie that begin with prefix, and their counts
    """
    raise NotImplementedError

def countWord(trie, word):
    """
    Count the number of times a word appears in the trie.

    Args:
        trie (dict): the trie to search over
        word (str): the word to count

    Returns:
        int: the number of times the word appears in the trie
    """
    raise NotImplementedError


def countPrefix(trie, prefix):
    """
    Count the number of times a prefix appears in the trie.

    Args:
        trie (dict): the trie to search over
        prefix (str): the prefix to count

    Returns:
        int: the number of times the prefix appears in the trie
    """
    raise NotImplementedError

def remove(trie, word):
    """
    Remove one occurence of a word from the trie.

    Args:
        trie (dict): the trie to search over
        word (str): the word to remove one occurence of

    Returns:
        None

    Side effect:
        trie is modified with one occurance of the word removed
    """
    raise NotImplementedError

def main():
    """main function that you can use for testing your functions"""
    # Here is a sample test case (you should add more!):
    # create the trie
    test_trie = create_trie([])

    # insert apple twice
    insert(test_trie, 'apple')
    insert(test_trie, 'apple')

    # ensure that the trie contains apple
    print(search(test_trie, 'apple') == True)

    # ensure that the trie contains apple twice
    print(countWord(test_trie, 'apple') == 2)

    # ensure that there are 2 words with prefix app
    print(countPrefix(test_trie, 'app') == 2)

    # erase one occurence of apple
    remove(test_trie, 'apple')

    # ensure that there is only one occurence of apple
    print(countWord(test_trie, 'apple') == 1)

    # ensure that there is only one word with prefix app
    print(countPrefix(test_trie, 'app') == 1)

    # ensure that the trie contains apple
    print(search(test_trie, 'apple') == True)

    # ensure that the trie contains app
    print(startsWith(test_trie, 'app') == True)

    # erase the other occurence of apple
    remove(test_trie, 'apple')

    # ensure that there are no occurences of apple
    print(countWord(test_trie, 'apple') == 0)

    # ensure that there are no words with prefix app
    print(countPrefix(test_trie, 'app') == 0)

    # ensure that the trie does not contain apple
    print(search(test_trie, 'apple') == False)
    
    # ensure that the trie does not contain app
    print(startsWith(test_trie, 'app') == False)


if __name__ == '__main__':
    """
    Feel free to test your implementation here by running python3 hw1.py in
    your terminal
    """
    main()