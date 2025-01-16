print("Bem-vinde ao conversor de temperatura promovido instituto S.A.D (Slay All Day)\n")
esc = input("Primeiro, preciso que diga qual o padrão de temperatura a ser convertido\n\n1. Celcius (C)\n2. Fahrenheit (F)\n")

if esc == "1":
    Cc = float(input(("Sua escolha foi a escala Celcius para Fahrenheit, digite a temperatura a ser convertida: ")))
    F = (9 * Cc)/5 + 32
    print ("O valor aproximado da convresão é: ", round(F, 2))

elif esc == "2":
    Ff = float(input(("Sua escolha foi a escala Fahrenheit para Celcius, digite a temperatura a ser convertida: ")))
    C = (Ff-32)*5/9 
    print ("O valor aproximado da convresão é: ", round(C, 2))
