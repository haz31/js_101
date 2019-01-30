/*
function helloWorld(){
	console.log('Hello World !');
}
helloWorld() 




function sayHello(){ 
	var firstname = "Tarzan";
	var name = "Delajungle";
	console.alerte("Bonjour je m'apelle "+'name'+'firstname');
}
sayHello()
*/

/*
function sayhello(a,b,c){


	alert("hello my name is "+ a+" "+b+" "+c)
}
sayhello("john"+"","smith"+"",40)

/*
  var name = "Michel Drucker";
  var age = 76;
  var job = "Présentateur Télé"
  var name2 = "Phillipe Dupont"
  var age2 = 34
  var name3 = "Patrick Poivre d'Arvor"
  var age3 = 71
  var job2 = "Journaliste"


function refactoriser(a,b,c,d,e,f,g,h){
  if((typeof name == 'string' && name != null || undefined) && (typeof age == "number" && age != null || undefined)){
    if(typeof job == 'string' && job != null || undefined){
      console.log("Bonjour je m'apelle "+name+" j'ai "+age+" et je suis actuellement "+job);
    }else{
      console.log("Bonjour je m'apelle ");
    }
  }else{
    console.log("les variables sont non définit ou son type de donnée ne correspond pas");
  }
}
refactoriser("Michel Drucker",76,"Présentateur Télé","Phillipe Dupont",34,"Patrick Poivre d'Arvor",71,"Journaliste")
*/

function refactoriser(name,age,job){
  if((typeof name == 'string' && name != null || undefined) && (typeof age == "number" && age != null || undefined)){
    if(typeof job == 'string' && job != null || undefined){
      console.log("Bonjour je m'apelle "+name+" j'ai "+age+" et je suis actuellement "+job);
    }else{
      console.log("Bonjour je m'apelle ");
    }
  }else{
    console.log("les variables sont non définit ou son type de donnée ne correspond pas");
  }
}
refactoriser("Michel Drucker",76,"Présentateur Télé")
refactoriser("Phillipe Dupont",34,"et je suis actuellement sans emploie")
refactoriser("Patrick Poivre d'Arvor",71,"Journaliste")