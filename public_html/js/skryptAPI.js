////Skrypt z Fetch API
//sprawdź czy DOM został załadowany:
document.addEventListener("DOMContentLoaded", function() {
 //obsługa zdarzenia kliknięcia na b1:
 var but1 = document.getElementById("b1");
 but1.addEventListener('click', function(){
 fetch("http://localhost/Application/public_html/dane/act.json")
 .then( response => {return response.json();})
 .then( dane => {
     output="";
     for(let i in dane){
        console.log(dane[i].title);
        output+="<li>"+dane[i].title+"</li>";
     }
     document.getElementById("s1").innerHTML = output; 
 })
 },
 false);  
 
 //obsługa zdarzenia kliknięcia na b2:
 var but1 = document.getElementById("b2");
 but1.addEventListener('click', function(){
 fetch("http://localhost/Application/public_html/dane/album.json")
.then( response => {return response.json();})
.then( dane => {
     output="";
     for(let i in dane){
        console.log(dane[i].title);
        output+="<li>"+dane[i].title+"</li>";
     }
     document.getElementById("s1").innerHTML = output; 
 })
 },
 false);
 
 

 //obsługa zdarzenia kliknięcia na b3:
 var but1 = document.getElementById("b3");
 but1.addEventListener('click', function(){
 fetch("http://localhost/Application/public_html/dane/nagrody.json")
.then( response => {return response.json();})
.then( dane => {
     output="";
     for(let i in dane){
        console.log(dane[i].title);
        output+="<li>"+dane[i].title+"</li>";
     }
     document.getElementById("s1").innerHTML = output; 
 })
 },
 false);
 
 var but1 = document.getElementById("b4");
 but1.addEventListener('click', function(){
 fetch("http://localhost/Application/public_html/dane/plyty.json")
.then( response => {return response.json();})
.then( dane => {
     output="";
     for(let i in dane){
        console.log(dane[i].title);
        output+="<li>"+dane[i].title+"</li>";
     }
     document.getElementById("s1").innerHTML = output; 
 })
 },
 false);
 
 
})
 
 