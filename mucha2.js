__author__ = 'RUSEK', 'Retsu';




var mucha = function() {
	
	document.getElementById('op1').style.backgroundColor = 'white';
	document.getElementById('op2').style.backgroundColor = 'white';
	document.getElementById('op3').style.backgroundColor = 'white';
	document.getElementById('op4').style.backgroundColor = 'white';
	document.getElementById('op5').style.backgroundColor = 'white';
	document.getElementById('op6').style.backgroundColor = 'white';
	document.getElementById('op7').style.backgroundColor = 'white';
	document.getElementById('op8').style.backgroundColor = 'white';
	document.getElementById('op9').style.backgroundColor = 'white';
	document.getElementById('op10').style.backgroundColor = 'white';
	document.getElementById('op11').style.backgroundColor = 'white';
	document.getElementById('op12').style.backgroundColor = 'white';
	document.getElementById('op13').style.backgroundColor = 'white';
	document.getElementById('op14').style.backgroundColor = 'white';
	document.getElementById('op15').style.backgroundColor = 'white';
	document.getElementById('op16').style.backgroundColor = 'white';
	document.getElementById('op17').style.backgroundColor = 'white';
	document.getElementById('op18').style.backgroundColor = 'white';
	document.getElementById('op19').style.backgroundColor = 'white';
	document.getElementById('op20').style.backgroundColor = 'white';
	document.getElementById('op21').style.backgroundColor = 'white';
	document.getElementById('op22').style.backgroundColor = 'white';
	document.getElementById('op23').style.backgroundColor = 'white';
	document.getElementById('op24').style.backgroundColor = 'white';

var opcja1 = "Mucha idzie w Dół Dół Prawo Prawo";
var opcja2 = "Mucha idzie w Dół Prawo Prawo";
var opcja3 = "Mucha idzie w Dół Prawo Prawo Góre";
var opcja4 = "Mucha idzie w Prawo Prawo Góre";
var opcja5 = "Mucha idzie w Prawo Prawo Góre Góre";
var opcja6 = "Mucha idzie w Prawo Góre Góre";
var opcja7 = "Mucha idzie w Dół Prawo Góre Góre";
var opcja8 = "Mucha idzie w Lewo Prawo Prawo ";
var opcja9 = "Mucha idzie w Dół Dół Prawo Góre";
var opcja10 = "Mucha idzie w Dół Dół Prawo";
var opcja11 = "Mucha idzie w Lewo Dół Dół Prawo";
var opcja12 = "Mucha idzie w Dół Dół Góre";
var opcja13 = "Mucha idzie w Lewo Prawo Góre";
var opcja14 = "Mucha idzie w Lewo Prawo Góre Góre";
var opcja15 = "Mucha idzie w Lewo Góre Góre";
var opcja16 = "Mucha idzie w Lewo Lewo Prawo Góre";
var opcja17 = "Mucha idzie w Lewo Dół Góre";
var opcja18 = "Mucha idzie w Lewo Dół Dół Góre";
var opcja19 = "Mucha idzie w Lewo Dół Dół";
var opcja20 = "Mucha idzie w Lewo Lewo Dół Dół";
var opcja21 = "Mucha idzie w Lewo Lewo Dół";
var opcja22 = "Mucha idzie w Lewo Lewo Dół Góre";
var opcja23 = "Mucha idzie w Lewo Lewo Góre";
var opcja24 = "Mucha idzie w Lewo Lewo Góre Góre";

var Ruchy = [opcja1,opcja2,opcja3,opcja4
         ,opcja5,opcja6,opcja7
         ,opcja8,opcja9,opcja10
         ,opcja11,opcja12,opcja13
         ,opcja14,opcja15,opcja16
         ,opcja17,opcja18,opcja19
         ,opcja20,opcja21,opcja22
         ,opcja23,opcja24];
while (Ruchy.length != 0){ 
    var x = Ruchy[Math.floor(Math.random()*Ruchy.length)];
    Ruchy.splice(Ruchy.indexOf(x),1);
    alert(x);
    var q = ("Wprowadź słowo, na które wymienia się wyraz wskazany przez muchę.");
    var w = ("BRAWO!");
    var e = ("Źle, zacznij od nowa.");	
   switch(x){			
	    case opcja1:
		document.getElementById('op1').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var czwórka = ["cztery","czworo", "poczworzyć"];
      if (czwórka.indexOf(a) == -1){
		  document.getElementById('op1').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja1);
        while (czwórka.indexOf(a) == -1){
          a = prompt(q);
          if (czwórka.indexOf(a) == -1){
			  document.getElementById('op1').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja1);}
          else{
			  document.getElementById('op1').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op1').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja2:
	document.getElementById('op2').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var kółko = ["koło","kołować","skołowany","kołowy"];
      if (kółko.indexOf(a) == -1){
		  document.getElementById('op2').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja2);
        while (kółko.indexOf(a) == -1){
          a = prompt(q);
          if (kółko.indexOf(a) == -1){
			  document.getElementById('op2').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja2);}
          else{
			  document.getElementById('op2').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op2').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja3:
	document.getElementById('op3').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var trójka = ["troje","trojenie","potrajanie","trzy"];
      if (trójka.indexOf(a) == -1){
		  document.getElementById('op3').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja3);
        while (trójka.indexOf(a) == -1){
          a = prompt(q);
          if (trójka.indexOf(a) == -1){
			  document.getElementById('op3').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja3);}
          else{
			  document.getElementById('op3').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op3').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja4:
	document.getElementById('op4').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var słój = ["słoje","słoik","słojowanie","słoiczek","słojować","słojowy","słoikowy"];
      if (słój.indexOf(a) == -1){
		  document.getElementById('op4').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja4);
        while (słój.indexOf(a) == -1){
          a = prompt(q);
          if (słój.indexOf(a) == -1){
			  document.getElementById('op4').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja4);}
          else{
			  document.getElementById('op4').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op4').style.backgroundColor = 'green';
        alert(w);}
        break;		
    case opcja5:
	document.getElementById('op5').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var nastrój = ["nastroje","nastroik","nastrajać","nastroić","nastrojowy","nastrojowo"];
      if (nastrój.indexOf(a) == -1){
		  document.getElementById('op5').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja5);
        while (nastrój.indexOf(a) == -1){
          a = prompt(q);
          if (nastrój.indexOf(a) == -1){
			  document.getElementById('op5').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja5);}
          else{
			  document.getElementById('op5').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op5').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja6:
	document.getElementById('op6').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var pieróg = ["pierogi","pierogownica","pierogarnia","pierogarka","pierożarka","pierożek","pierogowy"];
      if (pieróg.indexOf(a) == -1){
		  document.getElementById('op6').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja6);
        while (pieróg.indexOf(a) == -1){
          a = prompt(q);
          if (pieróg.indexOf(a) == -1){
			  document.getElementById('op6').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja6);}
          else{
			  document.getElementById('op6').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op6').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja7:
	document.getElementById('op7').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var obóz = ["obozy","obozowisko","oboźny","oboźna","obozowanie","obozowicz","obozowiczka","obozować","obozowy","wewnątrzobozowy","wokólobozowy","przyobozowy","poobozowy","przedobozowy"];
      if (obóz.indexOf(a) == -1){
		  document.getElementById('op7').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja7);
        while (obóz.indexOf(a) == -1){
          a = prompt(q);
          if (obóz.indexOf(a) == -1){
			  document.getElementById('op7').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja7);}
          else{
			  document.getElementById('op7').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op7').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja8:
	document.getElementById('op8').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var główka = ["głowa","głowica","głowić się","głowiasty"];
      if (główka.indexOf(a) == -1){
		  document.getElementById('op8').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja8);
        while (główka.indexOf(a) == -1){
          a = prompt(q);
          if (główka.indexOf(a) == -1){
			  document.getElementById('op8').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja8);}
          else{
			  document.getElementById('op8').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op8').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja9:
	document.getElementById('op9').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var wiódł = ["wieść","wodzić","wodzenie"];
      if (wiódł.indexOf(a) == -1){
		  document.getElementById('op9').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja9);
        while (wiódł.indexOf(a) == -1){
          a = prompt(q);
          if (czwórka.indexOf(a) == -1){
			  document.getElementById('op9').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja9);}
          else{
			  document.getElementById('op9').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op9').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja10:
	document.getElementById('op10').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var podróż = ["droga"];
      if (podróż.indexOf(a) == -1){
		  document.getElementById('op10').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja10);
        while (podróż.indexOf(a) == -1){
          a = prompt(q);
          if (podróż.indexOf(a) == -1){
			  document.getElementById('op10').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja10);}
          else{
			  document.getElementById('op10').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op10').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja11:
	document.getElementById('op11').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var niósł = ["nosić","nieść","niesienie","nioska","nosidło","nosidełko","nośność","donoszenie","noszenie","przynoszenie","wynoszenie","podniesienie","wzniesienie","nosze","noszowy","znosić","donieść","nanieść","odnieść","podnieść","ponieść","przenieść","przynieść","roznieść","unieść","wynieść","zanieść","znieść","nośny",];
      if (niósł.indexOf(a) == -1){
		  document.getElementById('op11').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja11);
        while (niósł.indexOf(a) == -1){
          a = prompt(q);
          if (niósł.indexOf(a) == -1){
			  document.getElementById('op11').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja11);}
          else{
			  document.getElementById('op11').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op11').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja12:
	document.getElementById('op12').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var nóż = ["noże","nożownik","nożyce","nożyczki","nożownictwo","nożyk","nożysko","nożowy","nożowniczy"];
      if (nóż.indexOf(a) == -1){
		  document.getElementById('op12').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja12);
        while (nóż.indexOf(a) == -1){
          a = prompt(q);
          if (nóż.indexOf(a) == -1){
			  document.getElementById('op12').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja12);}
          else{
			  document.getElementById('op12').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op12').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja13:
	document.getElementById('op13').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var próba = ["probierczy","probierca"];
      if (próba.indexOf(a) == -1){
		  document.getElementById('op13').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja13);
        while (próba.indexOf(a) == -1){
          a = prompt(q);
          if (próba.indexOf(a) == -1){
			  document.getElementById('op13').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja13);}
          else{
			  document.getElementById('op13').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op13').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja14:
	document.getElementById('op14').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var lód = ["lody","lodziarnia","lodówka","lodowisko","lodziarz","oblodzenie","obladzanie","zlodowacenie","zlodzenie","lodowacenie","lodzik","oblodzić","obladzać","lodowacieć","zlodowanieć","lodowy","lodowaty","lodowcowy","polodowcowy","przedlodowcowy","lodowo","lodowato"];
      if (lód.indexOf(a) == -1){
		  document.getElementById('op14').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja14);
        while (lód.indexOf(a) == -1){
          a = prompt(q);
          if (lód.indexOf(a) == -1){
			  document.getElementById('op14').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja14);}
          else{
			  document.getElementById('op14').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op14').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja15:
	document.getElementById('op15').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var mrówka = ["mrowisko","mrowie","mrowienie","mrowić"];
      if (mrówka.indexOf(a) == -1){
		  document.getElementById('op15').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja15);
        while (mrówka.indexOf(a) == -1){
          a = prompt(q);
          if (mrówka.indexOf(a) == -1){
			  document.getElementById('op15').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja15);}
          else{
			  document.getElementById('op15').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op15').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja16:
	document.getElementById('op16').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var mróz = ["mrozy","przymrozek","mrozek","mrozik","mrozić","odmrozić","zmrozić","zamrozić","mierzić","mroźny","mrozowy","mroźno"];
      if (mróz.indexOf(a) == -1){
		  document.getElementById('op16').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja16);
        while (mróz.indexOf(a) == -1){
          a = prompt(q);
          if (mróz.indexOf(a) == -1){
			  document.getElementById('op16').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja16);}
          else{
			  document.getElementById('op16').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op16').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja17:
	document.getElementById('op17').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var mój = ["moje","moja","mojego","mego","mojemu","memu","moim","mym","ma","mojej","mej","moją","mą","me","moi","moich","mych","moimi","mymi"];
      if (mój.indexOf(a) == -1){
		  document.getElementById('op17').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja17);
        while (mój.indexOf(a) == -1){
          a = prompt(q);
          if (mój.indexOf(a) == -1){
			  document.getElementById('op17').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja17);}
          else{
			  document.getElementById('op17').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op17').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja18:
	document.getElementById('op18').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var zdrój = ["zdroje","zdrojowy","uzdrowisko","uzdrowiskowy"];
      if (zdrój.indexOf(a) == -1){
		  document.getElementById('op18').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja18);
        while (zdrój.indexOf(a) == -1){
          a = prompt(q);
          if (zdrój.indexOf(a) == -1){
			  document.getElementById('op18').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja18);}
          else{
			  document.getElementById('op18').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op18').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja19:
	document.getElementById('op19').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var swój = ["swoje","swojski","oswojony","swojak","swojaczka","swojskość","swoistość","swoisty","swoja"];
      if (swój.indexOf(a) == -1){
		  document.getElementById('op19').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja19);
        while (swój.indexOf(a) == -1){
          a = prompt(q);
          if (swój.indexOf(a) == -1){
			  document.getElementById('op19').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja19);}
          else{
			  document.getElementById('op19').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op19').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja20:
	document.getElementById('op20').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var pszczółka = ["pszczoła","pszczelarz","pszczeli","pszczelarstwo"];
      if (pszczółka.indexOf(a) == -1){
		  document.getElementById('op20').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja20);
        while (pszczółka.indexOf(a) == -1){
          a = prompt(q);
          if (pszczółka.indexOf(a) == -1){
			  document.getElementById('op20').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja20);}
          else{
			  document.getElementById('op20').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op20').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja21:
	document.getElementById('op21').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var pójść = ["poszedł","poszła","poszli","poszliśmy","poszedłem","poszłam","poszłaś","poszłyśmy","poszłyście","poszliście","poszły"];
      if (pójść.indexOf(a) == -1){
		  document.getElementById('op21').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja21);
        while (pójść.indexOf(a) == -1){
          a = prompt(q);
          if (pójść.indexOf(a) == -1){
			  document.getElementById('op21').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja21);}
          else{
			  document.getElementById('op21').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op21').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja22:
	document.getElementById('op22').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var wzór = ["wzory","wzorzec","wzorek","odwzorować","odwzorowany","wzornictwo","wzornik","wzorzysty","wzorowy","wzorcowy","wzorzyście","wzorowo","wzorcowo","wzorować",];
      if (wzór.indexOf(a) == -1){
		  document.getElementById('op22').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja22);
        while (wzór.indexOf(a) == -1){
          a = prompt(q);
          if (wzór.indexOf(a) == -1){
			  document.getElementById('op22').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja22);}
          else{
			  document.getElementById('op22').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op22').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja23:
	document.getElementById('op23').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var twój = ["twoje","twa","twoja","twe","twojego","twego","twojemu","twemu","twoim","twym","twojej","twej","twoją","twą","twoi","twoich","twych","twoimi","twymi"];
      if (twój.indexOf(a) == -1){
		  document.getElementById('op23').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja23);
        while (twój.indexOf(a) == -1){
          a = prompt(q);
          if (twój.indexOf(a) == -1){
			  document.getElementById('op23').style.backgroundColor = 'red';
            alert(e + " Pamiętaj: " + opcja23);}
          else{
			  document.getElementById('op23').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op23').style.backgroundColor = 'green';
        alert(w);}
        break;
    case opcja24:
	document.getElementById('op24').style.backgroundColor = 'yellow';
      var a = prompt(q);
      var próg = ["progi","progu","proga","progowi","progiem","progom","progami","progach","nadproże","podproże","prożek","progowy","podprogowy"];
      if (próg.indexOf(a) == -1){
		  document.getElementById('op24').style.backgroundColor = 'red';
        alert(e + " Pamiętaj: " + opcja24);
        while (próg.indexOf(a) == -1){
          a = prompt(q);
          if (próg.indexOf(a) == -1){
			  document.getElementById('op24').style.backgroundColor = 'red';
            alert(e + "  Pamiętaj:  " + opcja24);}
          else{
			  document.getElementById('op24').style.backgroundColor = 'green';
			alert(w);}}
			}
       else{
		   document.getElementById('op24').style.backgroundColor = 'green';
        alert(w);}
        break;			
		}}
alert("BRAWO! WYKONAŁEŚ CAŁE ZADANIE!");
};
document.getElementById('guzik').onclick = mucha


