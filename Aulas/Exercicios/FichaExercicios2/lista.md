# 📚 Lista de Exercícios — Fase 2
### Conteúdos: Tipos Primitivos | if/else | alert | confirm | prompt

---

## 🟢 Nível Fácil — Tipos Primitivos (1 ao 4)

**1.** Crie uma variável pra cada tipo primitivo abaixo e mostre o **tipo** de cada uma no console usando `typeof`:
- Um texto
- Um número inteiro
- Um número decimal
- Um booleano
- Um null
- Um undefined

---

**2.** Crie uma variável `nome = null`. Mostre no console. Depois atribua um nome a ela e mostre novamente.

> Simule um usuário que ainda não está logado, depois faz login.

---

**3.** Use `prompt()` pra pedir o nome do usuário e mostre um `alert()` com:
```
"Bem vindo, [nome]!"
```

---

**4.** Use `prompt()` pra pedir um número. Mostre no console o **tipo** do que foi retornado. Depois converta pra número com `Number()` e mostre o tipo novamente.

---

## 🟡 Nível Médio — if/else + prompt (5 ao 10)

**5.** Peça a **idade** do usuário com `prompt()`. Use `if/else` pra mostrar um `alert()` dizendo se ele é **maior ou menor de idade.**

---

**6.** Peça um **número** com `prompt()`. Use `if/else` pra mostrar se o número é **positivo, negativo ou zero.**

---

**7.** Use `confirm()` pra perguntar:
```
"Você aceita os termos de uso?"
```
- Se aceitar → `"Cadastro realizado!"`
- Se não aceitar → `"Você precisa aceitar pra continuar."`

---

**8.** Peça a **temperatura** com `prompt()`. Use `if/else` pra mostrar:
- Abaixo de 15° → `"Está frio! 🥶"`
- Entre 15° e 30° → `"Temperatura agradável! 😊"`
- Acima de 30° → `"Está quente! 🥵"`

---

**9.** Peça **duas notas** com `prompt()`. Calcule a média e mostre com `alert()`:
- Abaixo de 50 → `"Reprovado!"`
- Entre 50 e 69 → `"Recuperação!"`
- Entre 70 e 89 → `"Aprovado!"`
- 90 acima → `"Excelência! 🏆"`

---

**10.** Use `confirm()` pra perguntar se o usuário quer calcular uma média. 
- Se sim → peça **3 notas** com `prompt()` e mostre a média com `alert()`
- Se não → mostre `"Ok, até mais!"`

---

## 🔴 Nível Difícil — Misturando tudo (11 ao 15)

**11.** Peça o **salário** do usuário com `prompt()`. Calcule e mostre com `alert()` o desconto do INSS:
- Até R$1.500 → 7.5% de desconto
- Até R$2.500 → 9% de desconto
- Até R$3.500 → 12% de desconto
- Acima de R$3.500 → 14% de desconto

---

**12.** Crie um **verificador de login**. Peça `usuário` e `senha` com `prompt()`:
- Se usuário for `"admin"` **E** senha for `"1234"` → `"Login realizado!"`
- Senão → `"Usuário ou senha incorretos!"`

---

**13.** Peça a **velocidade** do carro com `prompt()`. Mostre com `alert()`:
- Até 60 km/h → `"Dentro do limite ✅"`
- Até 80 km/h → `"Atenção: velocidade moderada ⚠️"`
- Até 100 km/h → `"Multa de R$150! 🚨"`
- Acima de 100 km/h → `"Multa de R$500 e suspensão da carteira! 🚔"`

---

**14.** Peça o **ano de nascimento** com `prompt()`. Calcule a idade e mostre com `alert()` em qual geração a pessoa pertence:
- 1965 a 1980 → `"Geração X"`
- 1981 a 1996 → `"Millennial"`
- 1997 a 2012 → `"Geração Z"`
- 2013 acima → `"Geração Alpha"`

---

**15.** 🏆 **Desafio Final — Calculadora Simples:**
- Peça o **primeiro número** com `prompt()`
- Peça o **segundo número** com `prompt()`
- Peça a **operação** com `prompt()`: `"Digite: +, -, * ou /"`
- Mostre o resultado com `alert()`
- Se a operação digitada não for nenhuma das 4 → `"Operação inválida!"`
- 🎁 Bônus: Se tentar dividir por zero → `"Não é possível dividir por zero!"`

---

## 📌 Regras Gerais

- ✅ Use `let` ou `const` corretamente
- ✅ SCREAMING_CASE nos `const`
- ✅ Contexto em todos os `console.log()`
- ✅ Converta os valores do `prompt()` quando necessário com `Number()`

---

*Professor Rafael — Desenvolvimento Web Fullstack*