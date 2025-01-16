print("Bem-vinde ao programa de proporção salarial promivido pelo presidente da republica Gustavo Lima\n\n")
sal = float(input("por favor, digite sua valoração salarial referente à emissão de seu ultimo contracheque\n\n"))
percent = float(input("Digite sua proporcinalidade percentual de acordo com as regras de taxação da receita\n\n"))
perc = (percent/100)*sal 
print("Muito bem, seu novo selário é: ", (sal+perc))

