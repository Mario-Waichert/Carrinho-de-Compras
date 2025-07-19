let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
       alert('Selecione um produto válido');
       return;    
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Inserir uma quantidade válida!');
        return;  
    }
    //calcular o preço (nosso subtotal)
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
        </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';    
}

//Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.
let numero1 = 15;
let numero2 = 20;

let soma = numero1 + numero2;
let mensagem = `A soma de ${numero1} e ${numero2} é igual a ${soma}.`;

console.log (mensagem);

// Receba, no mínimo, duas sentenças como uma string e utilize split() 
// para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

let frase = 'Nestas férias optamos por ir à piscina ; Neste ano não queremos ir à praia.'
let fraseSeparada = frase.split(';');

console.log(fraseSeparada);


