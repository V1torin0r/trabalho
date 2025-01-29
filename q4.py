# Cálculo de Fatorial
#  Escreva uma função chamada `fatorial` que receba um número inteiro positivo e retorne seu
# fatorial.
#  Exemplo de entrada: `fatorial(5)`
#  Saída esperada: `120`


def fatorial(n):
    if n < 0:
        return "fatorial não definido (número menor que 0)"
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):  
            result *= i
        return result

print(fatorial(5))