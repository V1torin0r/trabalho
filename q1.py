# Cálculo de Soma com Valor Padrão
#  Crie uma função chamada `soma` que receba dois números como parâmetros. Caso apenas um
# número seja fornecido, o segundo parâmetro deve assumir o valor `10` por padrão.
#  Exemplo de entrada: `soma(5)`
# Saída esperada: `15`


def soma(n1 = 10, n2 = 10):
    
    somar = n1 + n2
   
    
    return somar

print(f"o resultado da soma é: ", soma(5))