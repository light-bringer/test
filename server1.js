const http = require('http')
  
const port = 1700

const requestHandler = (request, response) => {  

 response.writeHead(200, {"Content-Type": "application/json"});
var hobbies=["keeping done", "singing", "dancing"];
var mathsArray=RandomArray();
hobbies=shuffle(hobbies);
 
  var json = JSON.stringify({ 
    Name: "kapil", 
    NumberArray: mathsArray, 
    HobbyArray: hobbies
  });
  response.end(json);



}



const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  
  while (0 !== currentIndex) {

   
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function RandomArray() {
  var currentIndex = 0, temporaryValue, randomIndex;
	var array=[];
	var value;
  while (currentIndex<10) {
 
	value=Math.ceil(Math.random() * 500);
	if(value>50 && value<500)
	{
	array[currentIndex++]=value;
	}
	    
  }

  return array;
}



