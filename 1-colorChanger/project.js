//we need to select buttons and use loop on it
const buttons=document.querySelectorAll(".button")
//we need body
const body=document.querySelector("body")
//forEach loop because yeh nodeList hai htmlcol nhi
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==="grey"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="white"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="blue"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="purple"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="pink"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="red"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="black"){
      body.style.backgroundColor=e.target.id
    }
  })
})