const submitbutton = document.querySelector("#submit");
submitbutton.addEventListener("click",create)

let arr= JSON.parse(localStorage.getItem("Data"))||[]
const create = ()=>{


    const brandname = document.querySelector("#brandname").value;
    const productname = document.querySelector("#productname").value;
    const productprice = document.querySelector("#productprice").value;
    const productimage = document.querySelector("#productimage").value;

    if(!brandname||!productimage||!productname||!productprice)
    {
        return;
    }

    const items = {

        brandname:brandname,
        productname: productname,
        productprice:productprice,
        productimage:productimage,
        
    }

    arr.push(items);
    localStorage.setItem("Data", JSON.stringify(arr));
    form.reset();
    location.href = "./store.html";



}