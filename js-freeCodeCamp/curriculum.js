// Comentário de uma linha

/* Comentário Multilinha 
*/

/* 
Na Ciência da Computação um Dado é qualquer coisa significativa para um computador.

O Javascript suporta oito tipos de Dados diferentes: 
undefined, null, boolean, string, symbol, bigint, number and object

Por exemplo, o computador diferencia números como 12 de strings "12" que é uma sequência de caracteres. ´
O computador pode fazer operações com números, mas não com strings.

Variáveis permitem computadores a armazenar e manipular dados de forma dinâmica. 
Eles fazem isso usando um "rótulo" que aponta para o dado no lugar do próprio dado.

Variáveis computacionais são diferentes de variaveis matemáticas por poderem armazenar valores diferentes em momentos diferentes.

Em Javascript para criar ou declarar uma variavél usamos a palavra 'var'. Exemplo: */

var meuNome;

/* ^ Cria uma variável chamada meuNome. Em Javascript nós terminamos as linhas com ;

Nomes de variáveis podem conter letras, números e $ ou _, mas não espaços ou começar com um número. 
Eles também são Case Sensitive, o que significa que meuNome é diferente de MEUnome, ou MeuNome.

A melhor prática é usar o camelCase, primeira palavra em caixa-baixa e a primeira letra de cada palavra seguinte é maiuscula.

*/

/* var & let

O maior problema do var é que você pode declarar a mesma variavel mais de uma vez, sobre escrevendo ela.
O let foi introduzido no ES6 para solucionar esse problema, declarar a mesma variavel mais de uma vez com let resulta em erro.
*/




/* Operador de Atribuição: =
Usamos '=' para atribuir um valor a uma variável. 
Também chamado de inicializar uma variável. Variaveis não inicializadas tem o tipo undefined.
Exemplo: */

meuNome = "Severo";

/* Se qualquer calculo existir após =, ele será feito antes da atribuição.

O operador também pode ser utilizado para atribuir o valor de uma variável para a outra.
Exemplo: */

var minhaVar;
minhaVar = meuNome;

/* Nesse caso minhaVar também será uma string que contém o valor "Severo".


*/




