

var bookmarkinput = document.getElementById("bookmarkname")
var websitURL = document.getElementById("websitURL")

var websits = []

if(localStorage.getItem(" websitcontener " ) !== null){
   
   websits = JSON.parse(localStorage.getItem(" websitcontener "))
   disPlayData()
}


function addwebsit(){


   if( validationName() == true && validationURL() == true){
      var Websit = {

         WebsiteName: bookmarkinput.value,
         uRL: websitURL.value,
           
        }
        websits.push( Websit )
     
        localStorage.setItem(" websitcontener "   , JSON.stringify(websits)   )
     
        disPlayData()
     
        clearData()
        

   }

  
}

function clearData(){

   bookmarkinput.value=null
   websitURL.value=null


}

function disPlayData(){


  





   cartona=""

for ( i=0 ; i<websits.length ; i++  ){

   cartona+=`
   
   
   <tr>
                   <td>${i}</td>
       <td>${  websits[i].uRL }</td>
             <td>   ${  websits[i].WebsiteName}  </td>
            
                        <td>
   <button  onclick="vistURL(${i})"  class="btn btn-outline-warning btn-sm">Visit</button>
                        </td>
            
                        <td>
   <button onclick="deletData(${i})"  class="btn btn-outline-danger btn-sm">Delet</button>
                        </td>
                      </tr> `



}

document.getElementById("displayData").innerHTML=cartona


}

function deletData(indexnum){

   
   websits.splice( indexnum,1)

   localStorage.setItem(" websitcontener "   , JSON.stringify(websits)   )
     

   disPlayData()

}

function vistURL(i){
 window.open(`${  websits[i].uRL }`)
   
}

function validationName(){
   var regex = /^[A-Za-z]{3,}$/;
   var text = bookmarkinput.value;
   var massageName = document.getElementById("msgName")

   if( regex.test( text )  ==  true  ){

      bookmarkinput.classList.add("is-valid")
      bookmarkinput.classList.remove("is-invalid")
      massageName.classList.add("d-none")
      return true;
      }
      else{
         bookmarkinput.classList.add("is-invalid")
         bookmarkinput.classList.remove("is-valid")
         massageName.classList.remove("d-none")
         return false;
      }


}



function validationURL(){

var regex =  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/

var text =  websitURL.value
var massageURL = document.getElementById("msgurl")

if( regex.test( text ) == true){

   
   websitURL.classList.add("is-valid")
   websitURL.classList.remove("is-invalid")
   massageURL.classList.add("d-none")
   return true;


}
else{
   websitURL.classList.add("is-invalid")
   websitURL.classList.remove("is-valid")
   massageURL.classList.remove("d-none")
   return false;
}
}

