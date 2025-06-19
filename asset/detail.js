const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("productDetails");


fetch(`https://dummyjson.com/products/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then((produit) => afficherProduit(produit));
  

function afficherProduit(produit) {
    console.log(produit)
  container.innerHTML = `<div class="details">
      <img src="${produit.images[0]}" alt="${produit.title}" class="imgdetails">
      <h2>${produit.title}</h2>
      <p>${produit.description}</p>
      <p><strong>Prix :</strong> ${produit.price} €</p>
      <p><strong>Réduction :</strong> ${produit.discountPercentage}%</p>
      <p><strong>Note :</strong>  ${produit.rating}</p>
      <p><strong>Marque :</strong> ${produit.brand}</p>
      <p><strong>Stock :</strong> ${produit.stock} disponibles</p>
      <p><strong>Shipping info : </strong> ${produit.shippingInformation}</p> 
     </div>`;
  
  if (produit.meta && produit.meta.qrCode) {
  const qrDiv = document.createElement("div");
  qrDiv.classList.add("qr-code");

  qrDiv.innerHTML = `
    <h3> QrCode du produit</h3>
    <img src="${produit.meta.qrCode}" alt="QR Code du produit">
  `;

  document.getElementById("productDetails").appendChild(qrDiv);
}
  




  const reviewContainer = document.getElementById("reviewsContainer");
  const reviews = produit.reviews;
  let reviewsHTML = "<h3> Avis clients :</h3>";

if (reviews && reviews.length > 0) {
    reviews.slice(0, 3).forEach(review => {
    reviewsHTML += `
      <div class="review">
        <p><strong>${review.reviewerName}</strong></p><p>Rating: ${review.rating}</p>
        <p>${review.comment}</p>
      </div>
    `;
  });
} else {
  reviewsHTML += "<p>Aucun avis pour ce produit.</p>";
}

reviewsContainer.innerHTML = reviewsHTML;
}
