
# 🔺 Triângulo de Sierpinski

Aplicação web interativa desenvolvida com **Vite e TypeScript** para demonstrar a construção do Triângulo de Sierpinski por meio de recursividade.

O projeto permite que o usuário controle o nível de recursividade e visualize automaticamente a formação do fractal, utilizando um campo numérico interativo.

## 📌 Objetivo

Demonstrar o funcionamento de um algoritmo recursivo através da construção do Triângulo de Sierpinski, permitindo visualizar como uma estrutura geométrica é subdividida sucessivamente.

## 🚀 Funcionalidades

- Construção gráfica do Triângulo de Sierpinski.
- Controle interativo do nível de recursividade.
- Incremento e decremento utilizando as setas do campo numérico.
- Atualização automática do desenho ao modificar o nível.
- Exibição da quantidade de triângulos gerados.
- Redimensionamento automático do desenho conforme a janela.
- Limite de recursividade entre 0 e 8.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização e responsividade.
- **TypeScript:** implementação da lógica recursiva.
- **Canvas API:** renderização gráfica do fractal.
- **Vite:** ambiente de desenvolvimento e execução.

## 📂 Estrutura do projeto

```text
triangulo-sierpinski/
│
├── index.html
├── package.json
├── tsconfig.json
│
└── src/
    ├── main.ts
    └── style.css
```

## ⚙️ Instalação e execução

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd triangulo-sierpinski
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse a aplicação

Abra no navegador o endereço disponibilizado pelo Vite, normalmente:

```text
http://localhost:5173/
```

## 🧮 Como funciona o algoritmo?

O Triângulo de Sierpinski é construído por meio de um processo recursivo.

O algoritmo começa com um triângulo equilátero e realiza as seguintes operações:

1. Recebe os três vértices do triângulo.
2. Verifica se o nível de recursividade chegou a zero.
3. Caso tenha chegado, desenha o triângulo e encerra a chamada.
4. Caso contrário, calcula o ponto médio de cada lado.
5. Divide a estrutura em três triângulos externos.
6. Executa três novas chamadas recursivas, reduzindo o nível em uma unidade.
7. Repete o processo até atingir o caso base.

O triângulo central não é desenhado, formando o padrão característico do fractal.

### Representação dos níveis

| Nível | Triângulos gerados |
|:---:|:---:|
| 0 | 1 |
| 1 | 3 |
| 2 | 9 |
| 3 | 27 |
| 4 | 81 |
| 5 | 243 |
| 6 | 729 |
| 7 | 2.187 |
| 8 | 6.561 |

A quantidade de triângulos é calculada pela fórmula:

**T(n) = 3ⁿ**

Onde `n` representa o nível de recursividade.

## 🧠 Conceitos aplicados

- Recursividade.
- Caso base e caso recursivo.
- Geometria e cálculo de pontos médios.
- Manipulação do DOM.
- Eventos de interação.
- Tipagem estática com TypeScript.
- Computação gráfica com Canvas.
- Complexidade de algoritmos.

## 📋 Requisitos atendidos

- [x] Demonstrar o Triângulo de Sierpinski.
- [x] Implementar a construção utilizando recursividade.
- [x] Disponibilizar um campo interativo para informar o nível.
- [x] Permitir incremento utilizando a seta para cima.
- [x] Permitir decremento utilizando a seta para baixo.
- [x] Atualizar automaticamente a imagem após alterações.
- [x] Apresentar a quantidade de triângulos gerados.

## 👨‍💻 Autor

Desenvolvido como atividade acadêmica para demonstrar a aplicação de recursividade na construção de fractais matemáticos.

---

**Projeto:** Triângulo de Sierpinski  
**Linguagem:** TypeScript  
**Ambiente:** Vite
