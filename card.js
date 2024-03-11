async function GetData() {
  let data = await fetch("https://dummyjson.com/products");
  let jsonData = await data.json();
  let card = "";
  jsonData.products.map((items, index) => {
    card += `<div class="card" style="width: 18rem;">
    <img style="height:12rem" src=${items.thumbnail} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">Brand:${items.brand}</p>
    <p class="card-text">${items.description.slice(0,42)+'...'}</p>
    
    </div>
    </div>`;
    document.getElementById("cardName").innerHTML = card;
  });
}
GetData();
