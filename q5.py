print("antes de sair, informe quantos km deseja percorrer, levando em consideração que <200km = R$ 1,50 e >200km = R$ 1,00")
quant = float(input("PERCURSO:"))

if quant <= 200: 
    print("\no valor do percurso é: R$", quant*1.5)

elif quant >= 200:
    print("\no valor do percurso é: R$", quant)
