print ("Você, fumante de lucky strike, estamos aqui para contar quanto tempo de vida você já perdeu!!!!!!!!!!!!!!!!!!!!\n\n*plateia aplaude*\n\n")
d = int(input("Quantos cigarros mais ou menos você fuma por dia?\n"))
a = float(input("A quanto tempo você tem ansiedade não tratada?\n"))
cig = d*(20/60)
ano = cig*(a*365)
print("Ei maninhe, pelo visto tu já levastes o farelo (desconsiderar fala)\nMas a quantidade de horas de vida perdidas em apenas um dia é de: ", round(cig, 2))
print("INCLUSIVE, a quantidade de dias perdidos na sua vida é de: ", round(ano/24, 2))

