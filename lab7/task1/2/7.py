def minion_game(string):
    vowels = 'AEIOU'
    stuart_score = 0
    kevin_score = 0
    n = len(string)
    
    for i in range(n):
        if string[i] in vowels:
            kevin_score += n - i
        else:
            stuart_score += n - i
    
    if stuart_score > kevin_score:
        print("Stuart", stuart_score)
    elif stuart_score < kevin_score:
        print("Kevin", kevin_score)
    else:
        print("Draw")


if __name__ == '__main__':
    s = input()
    minion_game(s)

# minion game