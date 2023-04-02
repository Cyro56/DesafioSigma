## Sobre

Esse código é o modelo utilizado para apresentar a solução da primeira fase do desafio Stone. Utilizando técnicas de otimização de busca com node e módulo ES6

## Instalação

Esses módulos usam a dependencia axios para obter os primeiros dados. Recomenda-se instalar os módulos através do comnado: yarn install .

## Como testar

O arquivo responsável pela execução do código é "process.js", através do comando: node ./process.js , é possível vizualizar no terminal a sequência de passos descrita em: "steps description:"
e também o tamanho da solução gerada, que pode variar a cada teste, e pode ser otimizada através da variável no mesmo arquivo chamada: `efficiencyLimit`, aumentando essa variavel, reduz o tempo de computação e otimização, reduzindo essa variável, mais eficiente será a solução encontrada, porém aumenta drásticamente o tempo de computação. Há também a possibilidade de retornar o resultado para outros módulos se houver a necessidade.
