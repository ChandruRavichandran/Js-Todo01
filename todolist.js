let input = document.getElementById("input");
let addbtn  = document.getElementById("addbtn");
let dltall = document.getElementById("dltallbtn");
let result = document.getElementById("result");


addbtn.addEventListener("click" , ()=>{
    
    input.focus()
    // input.value=""

    let div = document.createElement("div");
    div.className="divv"

    let list = document.createElement("li");
    list.className="list"
   
    list.style.marginLeft="0px"
    list.style.height="25px"
    list.style.width="300px"
    list.style.backgroundColor="rgb(65, 44, 83)"
    list.style.color="white"

    list.style.border="1px solid gray"
    list.style.borderRadius="30px"
    list.style.paddingLeft="17px"
    list.style.paddingTop="6px"
    list.style.fontSize="13px"
    list.style.display="flex"
    list.style.justifyContent="space-between"  

    
    list.innerHTML = input.value;

    let del =document.createElement("del");
    del.innerText="X";
     del.className="del"
     
    

    let edit=document.createElement("edit");
    edit.className="edit"
    edit.innerHTML="EDIT";
     


    let sub=document.createElement("sub");
     sub.className="sub"
     sub.style.display="flex"
     sub.style.justifyContent="space-around"
     sub.style.width="100px"

  
    

    sub.append(edit,del);
    list.append(sub);
    div.append(list);
    result.append(div);
  

   del.addEventListener("click",()=>{
        list.remove();
    })

    edit.addEventListener("click",(e)=>{
       if(edit.innerText.toLocaleLowerCase()=="edit"){
             edit.innerText="save";
             div.removeAttribute("readonly");
             div.focus();

       }else{
            edit.innerText="edit";
            div.setAttribute("readonly","readonly");

       }
    })
    

    // edit.addEventListener('click',() => this.edit(input));
    //  edit(input){
    //     input.disabled=!input.disabled;
    // }

    // // edit.addEventListener("click",(editx)=>{
    // //     result.disabled=!result.disabled;
    // // })
})
 dltall.addEventListener("click",()=>{
    result.remove();
 })
