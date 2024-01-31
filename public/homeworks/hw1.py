"""
HW 1: Tries

Name:
PennKey:
Number of hours spent on homework:
Favorite thing about the homework (optinoal but super helpful):
Least favorite thing about the homework (optional but super helpful):

Collaboration is NOT permitted.

This homework involves implementing a trie, a tree-like data structure that 
stores a set of strings. Tries allow for efficient searching of a string 
within a set and have applications in spell checking and autocomplete.

You might wonder why use a Trie instead of a hash table or a balanced binary 
search tree. While hash tables offer O(1) expected time complexity for 
searching and balanced binary search trees offer O(log n), they aren't 
efficient for prefix-based searches. Tries excel in searching strings with a 
given prefix and listing all such strings in lexicographic order. Moreover, 
tries are more space-efficient compared to hash tables, which face collision 
issues as they grow, and binary search trees, which have significant 
overhead due to pointers and rebalancing.

Formally, with an alphabet A (a set of valid characters) and a set of strings 
S (where no string is a prefix of another), a trie is an ordered tree. Each 
node (except the root) is labeled with a character from A, and the tree has 
|S| leaves, one for each string. The trie is structured so that the 
concatenation of characters from the root to a leaf forms a string in S.

For example:
Given A as the English alphabet and S={bet, bid, bit, set, step}:

First, suppose we insert bet & bid into the trie. The trie would look like this:

-- Tree Structure -- 
Root
 ├── b
 │    ├── e
 │    │    └── t
 │    └── i
 │         └── d

After all of the words are inserted, the trie would look like this:

-- Tree Structure --
Root
 ├── b
 │    ├── e
 │    │    └── t
 │    └── i
 │         ├── d
 │         └── t
 └── s
      ├── e
      │    └── t
      └── t
           ├── e
           └── p

In this homework, you will implement a trie and its operations. Unique to 
this implementation, you must account for multiple insertions of the same 
word. This requires tracking the count of each word in the trie.

In the functions below, the 'NotImplementedError' exception is initially raised. 
This is a placeholder to indicate that the function is incomplete. When you 
write your code for each function, you will replace this exception with your 
implementation.

You should be able to do this exclusively using what we have discussed thus far.
We definately recommend using dictionaries to represent the trie.

Your primary goal is to complete the assignment correctly, focusing on a 
thorough understanding of trie operations and structure. While maintaining 
clean and optimized code is encouraged, it is not the main emphasis. 
Completing the tasks accurately and understanding the concepts take precedence. 
Remember, while well-optimized code is a great skill, the primary objective 
here is to learn and correctly implement the trie data structure. Assume that 
all the inputs are valid - so everything is some form of string, even if empty.
Definately think about how you want to handle different cases in the code. As always,
come to office hours or post on Ed if you need help!

Good luck!
"""



def insert(trie, word):
    """
    Add a word to the given trie.

    Args:
        trie: the dictionary representation of a trie
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
        trie: the trie to check against
        word (str): the word to check

    Returns:
        bool: True if the word is in the trie, False if it is not
    """
    raise NotImplementedError

def startsWith(trie, prefix):
    """
    Check whether there is a word in the trie that starts with the given prefix.

    Args:
        trie: the trie to check against
        prefix (str): the prefix to check

    Returns:
        bool: True if there is a word in the trie that starts with the given prefix, False if it is not.
    """
    raise NotImplementedError


def create_trie(word_list):
    """
    Creates a trie from the given word list.

    Args:
        word_list (list): list of words (str)

    Returns:
        your Trie representation
    """
    raise NotImplementedError


def list_matches(trie, prefix):
    """
    List all word with the given prefix in the trie, including each word's count in the form of a tuple.
    If no words in the trie match the given prefix, return an empty list.

    Args:
        trie: the trie to search over
        prefix (str): the prefix to match against

    Returns:
        list of tuples: all words in the trie that begin with prefix, and their counts
    """
    raise NotImplementedError

def countWord(trie, word):
    """
    Count the number of times a word appears in the trie.

    Args:
        trie: the trie to search over
        word (str): the word to count

    Returns:
        int: the number of times the word appears in the trie
    """
    raise NotImplementedError


def countPrefix(trie, prefix):
    """
    Count the number of times a prefix appears in the trie.

    Args:
        trie: the trie to search over
        prefix (str): the prefix to count

    Returns:
        int: the number of times the prefix appears in the trie
    """
    raise NotImplementedError

def remove(trie, word):
    """
    Remove one occurence of a word from the trie.

    Args:
        trie: the trie to search over
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