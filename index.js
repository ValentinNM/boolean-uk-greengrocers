
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


const cartItems =[
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

    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', id);

    divEl.append(imgEl);

    const buttonEl = document.createElement ('button');
    buttonEl.innerText = 'Add to cart';

    listEL.append(divEl,buttonEl );

    itemListEl.append(listEL);
  }

};

const cardItem = renderCardItem(data);


const cartItemUlEl = document.querySelector('.cart--item-list');

function renderStoreItem (yourCart) {
  console.log("our data in yourCart: ", yourCart);
 
  for (let i = 0; i < yourCart.length; i++) { 
    const cart = yourCart[i];
    // console.log("cart:", cart);
    const name = cart.item.name;
    const id = cart.item.id;

    const listEl = document.createElement('li');
    cartItemUlEl.append(listEl);
    
    const imgEl = document.createElement('img');
    imgEl.className = ".cart--item-icon";
    const imgSrc = `assets/icons/${id}.svg`;
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', name);

    listEl.append(imgEl);
  
  const pEl = document.createElement('p');
  pEl.innerText = name;
  listEl.append(pEl);

  const minusButtonEl = document.createElement('button');
  minusButtonEl.className ="quantity-btn", "remove-btn", "center";
  minusButtonEl.innerText = "-";
  listEl.append(minusButtonEl);

  const spanEl = document.createElement('span');
  spanEl.className = 'quantity-text', 'center';
  spanEl.innerText = 1;
  listEl.append(spanEl);

  const plusButtonEl = document.createElement('button');
  plusButtonEl.className ="quantity-btn", "add-btn", "center";
  plusButtonEl.innerText = "+";

  listEl.append(plusButtonEl);
  }

};

renderStoreItem(cartItems);


const cartItemsTest = [ ];

function 00(initialData, cartItemsData ) { 
 console.log("inside addToCart: ", initialData, cartItemsData);

const veggieId = initialData.id;
console.log ('initialData veggieId: ', veggieId);
let foundItem = false;

 for (let i = 0; i < cartItemsTest.length; i++ ) {
0
   let veggieQuant = cartItemsTest[i].quantity;
  console.log('veggieQuant:', veggieQuant);



   const cardItemId = cartItemsTest[i].item.id;
   console.log ('initialData veggieId inside for: ', veggieId);
   console.log ('cardItemId veggieId inside for: ', cardItemId);

   if (veggieId === cardItemId) { 
     veggieQuant = veggieQuant + 1;
    //  const cartItemQuantity = veggieItem.quantity;
    //  console.log("cartItemQuantity: ", cartItemQuantity);
      foundItem = true;
    }

 if (!foundItem) { 
  // veggieQuant = veggieQuant + 1;
//  } else { 
//   cartItems.push(newCartItems);
 }
  }

const newcartItem = { 
  item: initialData,
  quantity: 1
}

cartItemsTest.push(newcartItem);
console.log('cartItemsTest: ', cartItemsTest);

}

addToCart(data[0], cartItemsTest);
addToCart(data[0], cartItemsTest);
addToCart(data[1], cartItemsTest);
addToCart(data[1], cartItemsTest);

// totalCartDivEl = document.querySelector('.total-section');

// function renderTotalCartPrice () {

//   spanTotalEl = document.querySelector('.total-number');
//   spanTotalEl.innerHTML = " ";

//   const totalPice = 
  
//   spanTotalEl.innerText = `£${multiplication}`;
// }

// renderTotalCartPrice = ("to add the price and quant");