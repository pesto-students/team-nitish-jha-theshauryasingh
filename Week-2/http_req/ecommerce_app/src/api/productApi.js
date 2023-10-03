const API_BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts(){
fetch('https://fakestoreapi.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
console.log(res);
console.log(json);
}

// Function to get all products
// export const getAllProducts = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/products`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     // Handle errors, e.g., show an error message
//     console.error('Error getting products:', error);
//     throw error;
//   }
// };