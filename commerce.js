// async function FetchProducts() {
//   let data = await fetch("https://dummyjson.com/products");
//   let response = await data.json().then((res) => res.products);
//   console.log(response);
//   products = "";
//   response.map((i, index) => {
//     products += `<div class="card shadow" style="width: 18rem;">
//   <img style="height:12rem;" src=${i.thumbnail} class="card-img-top" alt=${
//       i.title
//     }>
//   <div class="card-body">
//     <h5 class="card-title">${i.title}</h5>
//     <p class="card-text">${i.description.slice(0, 32) + "..."}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;
//     // console.log(products);
//     document.getElementById("cardName").innerHTML = products;
//   });
// }
// FetchProducts();

const data = [
  {
    id: 1,
    title: "Mobile",
    description: "This is a latest mobile brand.",
    imageSource:
      "https://www.91-cdn.com/hub/wp-content/uploads/2023/11/How-to-check-the-age-of-your-mobile-phone.png",
  },
  {
    id: 2,
    title: "Telephone",
    description: "This is a latest telephone brand.",
    imageSource:
      "https://m.media-amazon.com/images/I/81D9rbZn2LL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    title: "Laptops",
    description: "This is a latest laptops brand.",
    imageSource:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
  },
];

function Cards() {
  let cards = "";
  data.map((items) => {
    cards += `<div class="card" style="width: 18rem;">
  <img style="height:12rem" src=${items.imageSource} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${items.description}</p>
   
  </div>
</div>`;

    document.getElementById("cards").innerHTML = cards;
  });
}
Cards();
