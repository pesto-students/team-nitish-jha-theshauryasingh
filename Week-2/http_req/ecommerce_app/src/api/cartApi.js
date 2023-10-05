
const API_BASE_URL = 'https://fakestoreapi.com'; //can we define it in store or else


function getDate(){
    return '2019-12-10';
}

// Function to get all cart products
export const getAllCartProducts = async (cartId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/carts/${cartId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error getting products:', error);
      throw error;
    }
  };

export const addToCart = async (productId,quantity, userId, cartId) => {
    console.log(`request received ${productId}, ${quantity}, ${userId}, ${cartId}`);
    const date = getDate();
    try {
        const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`,{
            method:"PUT",
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
  
export const createNewCart = async (userId, date, products=[]) => {
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

