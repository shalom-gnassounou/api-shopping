const contenaire=document.getElementById("productscontenaire");

fetch('https://dummyjson.com/products')
.then(function(response){
    return response.json()
    
})
.then(function(data){
    const products= data.products
    showproducts(products)
})

function showproducts(products){
    contenaire.innerHTML="";
    products.forEach(product => {
        const div = document.createElement("div")
        div.className= "card"
        div.innerHTML= `
        <a  href="detailsProduit.html?id=${product.id} class="link"><img src=${product.thumbnail} alt="product"><br><br><h3>${product.title}</h3><br>Price:<strong>${product.price}</strong><br><em>Note: ${product.rating}</em><br><em>Catégorie: ${product.category}</em></a>`
         contenaire.appendChild(div)
        
    });
}