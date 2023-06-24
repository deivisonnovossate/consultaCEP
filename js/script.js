// Pegando os id dos campos
let $cep = document.querySelector('#cep')
let $rua = document.querySelector('#rua')
let $bairro = document.querySelector('#bairro')
let $cidade = document.querySelector('#cidade')
let $estado = document.querySelector('#estado')
let $ibge = document.querySelector('#ibge')
let $formulario = document.querySelector('#formulario')
let resultado = document.querySelector('#resultado')

// Função para consultar o CEP
function consultaCEP(){
    // Pegando o valor do campo CEP
    let cep = $cep.value

    // Verificando o se o usuário digitou cep diferente dos 8 digitos comuns
    if(cep.length !== 8){
        alert('CEP inválido')
        return
    } 

    // passando a rota para uma variável
    let url = `https://viacep.com.br/ws/${cep}/json` 
    
    // Fetch consumindo api
    fetch(url).then(res => {
        res.json().then(mostrarDados)
    }) 

}

// função para mostrar os dados no input
function mostrarDados(dados){

    if(dados.erro){
        alert('Não foi possível encontrar o endereço')
    } else {
    //reatribuindo o valor na variável com o value do campo input
        // com os dados obtidos pela API
        $rua.value =  dados.logradouro
        $bairro.value = dados.bairro
        $cidade.value = dados.localidade
        $estado.value = dados.uf
        $ibge.value = dados.ibge
        console.log(dados)
    }
   

  
}

//Evento que 
$cep.onkeydown = (e) => {
    const key = e.key

    if(key === 'Tab'){
        consultaCEP()
    } 
}


























/*


function consultaEndereco(){
    let cepNumber = document.querySelector('#cep')

    let cep = cepNumber.value
    

    if(cep.length !== 8){
        alert('Cep inválido')
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json`

    fetch(url)
        .then(function(response){
            response.json().then(mostrarEndereceo)
        })

}

function mostrarEndereceo(dados){
    let resultado = document.querySelector('#resultado')
    if(dados.erro){
        resultado.innerHTML = "Não foi possível localizar endereço"
    } else {
        resultado.innerHTML = `
            <p>Endereço: ${dados.logradouro}</p>
            <p>Complemento ${dados.complemento}</p>
            <p>Bairro: ${dados.bairro}</p>
            <p>Cidade ${dados.localidade} - ${dados.uf}</p>
        `
    }
}

*/

