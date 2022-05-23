//store the products array in localstorage as "products"
function showProducts(){
    window.location.href="inventory.html"
}
function products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function addproducts(){

    event.preventDefault();
    let form=document.getElementById("products");
    let type= form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    // console.log(price,type,desc,image)
    let s= new products(type,desc,price,image)
    // console.log(s)
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(s);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}