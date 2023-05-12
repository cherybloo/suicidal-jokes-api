with open('random.txt','r',encoding='utf8') as file:
    for line in file:
        line=line.rstrip()

        print('"'+line+'",')