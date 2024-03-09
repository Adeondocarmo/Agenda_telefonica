const form = document.getElementById('formulario');
const imgAdicionado = '<img src="./imagens/adicionado.png" alt="Adicionado contato"/>';
const imgRemovido = '<img src="./imagens/recusardo.png" alt="Removido contato"/>';
const nomes = [];
const contatos = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarAgenda();
});

function adicionarLinha() {
    
    const inputNome = document.getElementById('nome');
    const inputCall = document.getElementById('call');

    nomes.push(inputNome.value);
    contatos.push(parseInt(inputCall.value));

    let linha =`<tr>`;
    linha += `<td>${inputNome.value} </td>`;
    linha += `<td>${inputCall.value} </td>`;
    linha += `<td>${inputCall.value >= 7? imgAdicionado : imgRemovido} </td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputCall.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarAgenda() {
    console.log(nomes);
    console.log(contatos);
}