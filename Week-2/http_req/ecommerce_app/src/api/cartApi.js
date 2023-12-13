
const API_BASE_URL = 'https://fakestoreapi.com'; //can we define it in store or else


function getDate(){
    return '2019-12-10';
}

// Function to get all cart products
const getAllCartProducts = async (cartId) => {
    try {
      const api = `${API_BASE_URL}/carts/${cartId}`
      console.log(api);
      const response = await fetch(api);
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error getting products:', error);
      throw error;
    }
  };

const addToCart = async (productId,quantity, userId, cartId) => {
    const date = getDate();
    try {
        const api = `https://fakestoreapi.com/carts/${cartId}`
        console.log(api, `request received ${productId}, ${quantity}, ${userId}, ${cartId}`);
        const response = await fetch(api,{
            method:"PATCH",
            body:JSON.stringify(
                {
                    userId,
                    date,
                    products:[{productId,quantity}]
                }
            )
        });
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error getting products:', error);
        throw error;
      }
};
  
const createNewCart = async (userId, date, products=[]) => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId,
                    date,
                    products
                }
            )
        });
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error getting products:', error);
        throw error;
      }
};

