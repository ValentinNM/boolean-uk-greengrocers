/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const data = [
  {
    id: "001-beetroot",
    name: "Beetroot",
    price: 0.33
  },
  {
    id: "002-carrot",
    name: "Carrot",
    price: 0.59
  },
    {
    id: "003-apple",
    name: "Apple",
    price: 0.20
  },
    {
    id: "004-apricot",
    name: "Apricot",
    price: 1
  },
    {
    id: "005-avocado",
    name: "Avocado ",
    price: 1.49
  },
    {
    id: "006-bananas",
    name: "Bananas",
    price: 2.51
  },
    {
    id: "007-bell-pepper",
    name: "Bell-pepper",
    price: 3.99
  },
    {
    id: "008-berry",
    name: "Berry",
    price: 0.99
  },
    {
    id: "009-blueberry",
    name: "Blueberry",
    price: 5
  },
    {
    id: "010-eggplant",
    name: "Eggplant",
    price: 4.50
  }
];


const storeItems =[
  {
    item: {
      id: "001-beetroot",
      name: "Beetroot",
      price: 0.33
    },
    quantity: 8,
  },
  {
    item: {
      id: "002-carrot",
      name: "Carrot",
      price: 0.59
    },
    quantity: 8,
  },
    {
    item: {
      id: "003-apple",
      name: "Apple",
      price: 0.20
    },
    quantity: 8,
  },
    {
    item: {
      id: "004-apricot",
      name: "Apricot",
      price: 1
    },
    quantity: 8,
  },
    {
    item: {
      id: "005-avocado",
      name: "Avocado ",
      price: 1.49
    },
    quantity: 8,
  },
    {
    item: {
      id: "006-bananas",
      name: "Bananas",
      price: 2.51
    },
    quantity: 8,
  },
    {
    item: {
      id: "007-bell-pepper",
      name: "Bell-pepper",
      price: 3.99
    },
    quantity: 8,
  },
    {
    item: {
      id: "008-berry",
      name: "Berry",
      price: 0.99
    },
    quantity: 8,
  },
    {
    item: {
      id: "009-blueberry",
      name: "Blueberry",
      price: 5
    },
    quantity: 8,
  },
    {
    item: {
      id: "010-eggplant",
      name: "Eggplant",
      price: 4.50
    },
    quantity: 8,
  }
]



console.log("Working : ", data[0].price);

// get the image
const headerEl = document.querySelector('.header');
const itemListEl = document.querySelector('.store--item-list');

const cartListContainerEl = document.querySelector('.cart--item-list-container');

const totalSectionEl = document.querySelector('.total-section');
const totalNumberEl = document.querySelector('.total-number');


// function renderImage (image) {
//   for (let i = 0; i < data.length) 

// }

function renderCardItem (veggie) {
  console.log("data: ", data);
  for (let i = 0; i < veggie.length; i ++ ){
    const id = veggie[i].id;
    const name = veggie[i].name;
    // console.log("id and name: ", id, name);

    const listEL = document.createElement('li');
    const divEl = document.createElement('div');
    divEl.className = "store--item-icon"; 

    listEL.append(divEl);

    const imgEl = document.createElement('img');
    const imgSrc = `assets/icons/${id}.svg`;

    // imgEl.src = "assets/icons/001-beetroot.svg";
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', id);

    divEl.append(imgEl);

    const buttonEl = document.createElement ('button');
    buttonEl.innerText = 'Add to cart';
    
    // console.log('imgEl: ', imgEl);

    listEL.append(divEl,buttonEl );

    itemListEl.append(listEL);
  }

};

const cardItem = renderCardItem(data);


const cartItemUlEl = document.querySelector('.cart--item-list');


function renderStoreItem (yourCart) {
  console.log("our data in yourCart: ", yourCart);

  for (let i = 0; i < yourCart.lenght; i++) { 
  }



  const listEl = document.createElement('li');
  const imgEl = document.createElement('img'); 
  imgEl.className = 'cart--item-icon';
  imgEl.setAttribute('src', "imgSrc"); 
  imgEl.setAttribute('alt', "");
  listEl.append(imgEl);

  const pEl = document.createElement('p');
  pEl.innertext = 'id';
  listEl.append(pEl);

  const minusButtonEl = document.createElement('button');
  minusButtonEl.className ="quantity-btn", "remove-btn", "center";
  minusButtonEl.innerText = "-";

  const spanEl = document.createElement('span');
  spanEl.className = 'quantity-text', 'center';
  spanEl.innerHTML = 1;

  const plusButtonEl = document.createElement('button');
  plusButtonEl.className ="quantity-btn", "add-btn", "center";
  plusButtonEl.innerText = "+";

  listEl.append(minusButtonEl, spanEl, plusButtonEl);

  cartItemUlEl.append(listEl);


};

const storeItem = renderStoreItem(itemListEl);



// totalCartDivEl = document.querySelector('.total-section');

// function renderTotalCartPrice () {

//   spanTotalEl = document.querySelector('.total-number');
//   spanTotalEl.innerHTML = " ";

//   const totalPice = 
  
//   spanTotalEl.innerText = `£${multiplication}`;
// }

// renderTotalCartPrice = ("to add the price and quant");