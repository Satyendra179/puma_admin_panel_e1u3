function append(){
let data=JSON.parse(localStorage.getItem("products"));
// console.log(data)
let container=document.getElementById("all_products");
data.forEach(function(el,index){
    let div=document.createElement("div");
    let type=document.createElement('p');
    type.innerText=el.type;
    let desc=document.createElement('p');
    desc.innerText=el.desc;
    let price=document.createElement('p')
    price.innerText=el.price;
    let img=document.createElement('img');
    img.src=el.image;
    let btn=document.createElement('button');
    btn.innerText="Remove"
    btn.id="remove_product"
    btn.addEventListener("click",function(){
        remove(el,index);
    })
    div.append(img,type,desc,price,btn);
    container.append(div);
})
}
append()
function  remove(el,index){
    let data=JSON.parse(localStorage.getItem("products"))
 data.splice(index,1)
//  console.log(data.splice(index,1))
 localStorage.setItem("products",JSON.stringify(data))
window.location.reload();
}