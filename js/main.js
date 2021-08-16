
/*
var idade = prompt("Qual a sua idade? ");
if(idade >= 18){
    alert("Maior de idade");
} else{
    alert("menor de idade");
}
*/

//estrutura de repetição com o while
/*
var count = 0;
while(count < 5){
    console.log("repetição com while "+count);
    count = count + 1;
}

//var count ;
for(count= 0; count <= 5; count++){
    console.log("repetição com for "+ count);
}
*/
//trabalhondo com data
/*
var d = new Date();
//alert(d);
//alert(d.getMonth() +1); //tras o mes, como começa em zero soma-se 1
console.log("hoje é "+ d.getDay() +"/"+(d.getMonth()+1));//dia
console.log(d.getHours());//horas
console.log(d.getMinutes());//minutos
*/

//funções
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";
}

//função para redicionamento de pag
function redirecionar(){
    window.open("https://globallabs.academy/");//abre em outra aba
   // window.location.href ="https://globallabs.academy/"; //outro meio de redirecionar o site na mesma aba
}
/*
//função para o onmouseover usando o getElemento...
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("O texto foi trocado");
}
*/
//função usando o proprio elemento como paramentro
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
    //alert("O texto foi trocado");
}

//função para onmouseout
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="passe o mouse";
    elemento.innerHTML="passe o mouse";
}

//função onload ao ser carregada a pagina
function load(){
    alert("pagina carregada...")
}

//funçaõ onchange pegar o valor do elemento
function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){//função que recebe 2 paramentros
    return n1+n2; //retorna a soma dos parametros passados
}

//função para replace(trocar o conteudo na frase)
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/
//variavel global
/*
var validar = 0;

function validaIdade(idade){
    //var validar; //variavel local
    if(idade>=18){
        validar = true;
    } else {
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5,10)); //chama a função, passa como parametro 5 e 10 e o resultado vai para o alerta
//alert(setReplace("vai Japão", "Japão", "Brasil"));

var nome = "Helton c. x. Moraes";
var idade = 43;
var idade2 = 30;
var frase = "Japão é o melhor time do mundo";

/*
//concatenação usa-se o '+' porem se não houver uma estring ele soma se for inteiro
//alert("Meu primeiro js");
//alert(nome + " tem "+ idade +'anos');
//alert(idade + idade2);
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));//subistitui japão por Brasil
//alert(frase.replace("Japão", "Brasil"));//idem
//trbalhando com lista(array)
var lista =["Maça","Pera","Laranja"];
console.log(lista);
console.log(lista[1]);//mostar o conteudo da posição 1 do array
lista.push("Uva"); //adiciona elemento no fim dda lista
//lista.pop(); //remove do fim do array
console.log(lista);
//console.log(lista.reverse());//inverte o array
console.log(lista.length); //tamanho do array
console.log(lista.toString()); //tras o array para string
//console.log(lista[0]);//imprime o 1ª elemento
//console.log(lista.toString()[0]); //imprime a letra m que é a primeira litra da string
console.log(lista.join(" - ")); //transforma em string e muda o separador para o que se definir
console.log(lista);

//dicionario
var fruta ={nome:"Maça", cor:"vermelha"};
console.log(fruta.nome);//exibe o nome gravado no dicionario
//alert(fruta.cor); //cria uma alerta com a cor descrita na item cor da dicionario

//lista de dicionario
var frutas = [{nome:"Maça", cor:"vermelha"},{nome:"Uva", cor:"Roxa"}];
console.log(frutas);//exibe a lista de dicionarios
alert(frutas[1].nome); //cria uma alerta com o nome da fruta na posição [1] da lista de dicionario
*/
