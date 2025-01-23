print("diga ovalor de numeros e depois escolha uma operação\n")
n1 = float(input("primeiro número: "))
n2 = float(input("segundo número: "))

quest = int(input("diga qual operação você deseja fazer\n1. SOMA\n2. SUBTRAÇÃO\n3. MULTIPLICAÇÃO\n4. DIVISÃO\n"))

if quest == 1:
    print("A operação foi SOMA\n O resultado é: ", n1+n2)

elif quest == 2: 
    print("A operação foi SUBTRAÇÃO\n O resultado é: ", n1-n2)

elif quest == 3:
        print("A operação foi MULTIPLICAÇÃO\n O resultado é: ", n1*n2)

elif quest == 4:
        print("A operação foi DIVISÃO\n O resultado é: ", n1/n2)

