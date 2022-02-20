console.log('Hello World!');














const app=document.getElementById('root');

const logo=document.createElement('img');

logo.setAttribute('class','logo')

logo.src='logo.png'
console.log(logo);

const container=document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);









var request=new XMLHttpRequest()
request.open('GET','https://ghibliapi.herokuapp.com/films',true)

request.onload=function(){
  var data=JSON.parse(this.response)
  
  if(request.status>=200 &&  request.status<400){
    data.forEach(movie=>{
      //create a div element card clasd
      const card=document.createElement('div');
      card.setAttribute('class','card')
      
      //create an h1 and set the text xontent
      const h1=document.createElement('h1');
      h1.textContent=movie.title;
      
      //create p element to show movie description
      
      const p=document.createElement('p');
      movie.description=movie.description.substring(0,300);
      p.textContent=`${movie.description}...` //end with an ellepses
      
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      
      
      
      
      
   console.log(movie.title);
   console.log(movie.description);
 })
  }else{
    console.log('error');
    
    const errorMessage=document.createElement('marquee');
    errorMessage.textContent=`its not working`
    app.appendChild(errorMessage);
  }
  
 
}



request.send()

console.log(request);
