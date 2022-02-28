const storeItems = [
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


// const cartItems =[
//   {
//     item: {
//       id: "001-beetroot",
//       name: "Beetroot",
//       price: 0.33
//     },
//     quantity: 8,
//   },
//   {
//     item: {
//       id: "002-carrot",
//       name: "Carrot",
//       price: 0.59
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "003-apple",
//       name: "Apple",
//       price: 0.20
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "004-apricot",
//       name: "Apricot",
//       price: 1
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "005-avocado",
//       name: "Avocado ",
//       price: 1.49
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "006-bananas",
//       name: "Bananas",
//       price: 2.51
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "007-bell-pepper",
//       name: "Bell-pepper",
//       price: 3.99
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "008-berry",
//       name: "Berry",
//       price: 0.99
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "009-blueberry",
//       name: "Blueberry",
//       price: 5
//     },
//     quantity: 8,
//   },
//     {
//     item: {
//       id: "010-eggplant",
//       name: "Eggplant",
//       price: 4.50
//     },
//     quantity: 8,
//   }
// ]

const cartItems = [];

const headerEl = document.querySelector('.header');
const itemListEl = document.querySelector('.store--item-list');

const cartListContainerEl = document.querySelector('.cart--item-list-container');

const totalSectionEl = document.querySelector('.total-section');
const totalNumberEl = document.querySelector('.total-number');


function renderStoreItems (storeItems) {
  for (let i = 0; i < storeItems.length; i ++ ){
    const id = storeItems[i].id;
    console.log("id: ",id);
    const name = storeItems[i].name;

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

    buttonEl.addEventListener ("click", () => {
      addToCart(storeItems, cartItems);
      renderCartItems(cartItem);
    } )

    listEL.append(divEl,buttonEl );

    itemListEl.append(listEL);
  }

};


renderStoreItems(storeItems);
// renderCartItems(storeItems);


const cartItemUlEl = document.querySelector('.cart--item-list');

function renderCartItems (cartItems) {

  cartItemUlEl.innerHTML = ''; 
 
  for (let i = 0; i < cartItems.length; i++) { 
    const cart = cartItems[i];
    const name = cart.item.name;
    const id = cart.item.id;

    const listEl = document.createElement('li');
    
    const imgEl = document.createElement('img');
    imgEl.className = ".cart--item-icon";
    const imgSrc = `assets/icons/${id}.svg`;
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('alt', name);

    listEl.append(imgEl);
  
  const pEl = document.createElement('p');
  pEl.innerText = name;
  listEl.append(pEl);

  const removeButtonEl = document.createElement('button');
  removeButtonEl.className ="quantity-btn remove-btn center";
  removeButtonEl.innerText = "-";
  listEl.append(removeButtonEl);

  const spanEl = document.createElement('span');
  spanEl.className = 'quantity-text center';
  spanEl.innerText = cartItem.quantity;
  listEl.append(spanEl);

  const addButtonEl = document.createElement('button');
  addButtonEl.className ="quantity-btn add-btn center";
  addButtonEl.innerText = "+";
  
  addButtonEl.addEventListener("click", () => { 
    console.log("item object clicked",item );
    addToCart(item, cartItems);
    renderCartItems(cartItems);
  });
  
  listEl.append(addButtonEl);

  cartItemUlEl.append(listEl);

  }

};

renderCartItems(cartItems);


function addToCart(storeItems, cartItems ) { 
//  console.log("inside addToCart: ", storeItems, cartItemsstoreItems);

// const storeItemsId = storeItems.id;
// console.log ('storeItems storeItemsId: ', storeItemsId);
let foundItem = false;

 for (let i = 0; i < cartItems.length; i++ ) {
   const cartItem = cartItems[i];

  // console.log(" * inside FOR itineration #", i +1); 

  if (storeItems.id === cartItem.item.id) { 
    console.log(" - inside IF itineration #", i +1); 
    cartItem.quantity = cartItem.quantity + 1;

    foundItem = true; 
    }
  }
  
  if (!foundItem) { 
   const newCartItem = { 
    item: storeItems,
    quantity: 1
  };
  
  cartItems.push(newCartItem);
  // console.log('cartItems: ', cartItems);

  }

}

addToCart(storeItems, cartItems);
addToCart(storeItems, cartItems);
addToCart(storeItems, cartItems);
addToCart(storeItems, cartItems);
// addToCart(storeItems[1], cartItems);
// addToCart(storeItems[1], cartItems);
// addToCart(storeItems[1], cartItems);

// console.log('cartItems: ', cartItems);

// function removeFromCart () { 



// }

// removeFromCart();

// totalCartDivEl = document.querySelector('.total-section');

// function renderTotalCartPrice () {

//   spanTotalEl = document.querySelector('.total-number');
//   spanTotalEl.innerHTML = " ";

//   const totalPice = 
  
//   spanTotalEl.innerText = `£${multiplication}`;
// }

// renderTotalCartPrice = ("to add the price and quant");