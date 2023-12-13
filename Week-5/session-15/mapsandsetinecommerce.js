let productViews = new WeakMap();
let cartItems    = new WeakSet();

function incrementProductViews(productId){
    key =  {productId:0};
    if (productViews.has(key)){
        productViews.set(key, productViews.get(key) + 1);
    } else {
        productViews.set(key, 1);
    }
    console.log(productViews);
}

function addToCart(productId){
    val =  {productId:0};
    if (cartItems.has(val)){
        console.log("Product already in cart");
    } else {
        cartItems.add(val);
        console.log("Product added to cart");
    }
    console.log(cartItems);
}

incrementProductViews(123);
incrementProductViews(123);

addToCart(123);
addToCart(123);