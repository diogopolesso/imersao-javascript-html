<meta charset="UTF-8">

<script>

function pulaLinha(){

	document.write("<br>");
	document.write("<br>");
}

function mostra(frase){

    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de Familiares?"));

var numero = 1;
var totalIdades = 0;

while(numero <= totalFamiliares){
      var idade = parseInt(prompt("Informe idade do Familiar"));
      totalIdades = totalIdades + idade;
      numero++;
}

var mediaDasIdades = totalIdades/totalFamiliares;
mostra("A Média das Idades dos Familiares é " + mediaDasIdades);
mostra("FIM!");

</script>
