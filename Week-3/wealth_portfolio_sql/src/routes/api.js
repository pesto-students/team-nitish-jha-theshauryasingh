const assetController = require("../controller/assetController.js")
const financesController = require("../controller/financesController.js")
const userController = require("../controller/userController.js")

const router = require("express").Router();

router.get('/getalluser', userController.getAllUser)  
router.post('/registeruser', userController.registerUser)
// db servicelayer/hook to encrypt password, preinsert hook;
// middleware for validation requests; <joi>


router.delete('/deleteuser', userController.deleteUser)

router.get('/getasset/:id', assetController.getAllAssetsById)
router.put('/updateasset/:id', assetController.updateAssetById)
router.delete('/deleteasset/:id', assetController.deleteAssetById)

//Returns all assets, including equity, fixed income, and alternatives, for a user. 
//Supports CRUD operations (Create, Read, Update, Delete).
// (req, res) => {
//     // SQL query to retrieve all assets
//     const query = 'SELECT * FROM assets';
  
//     // Execute the query
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error executing query: ' + err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
      
//       // Send the retrieved assets as JSON
//       res.json(results);
//     });
//   }




// router.get('/finances', (req, res)=> { console.log('assets api')})
// Parameters: userId (optional), year (optional), month (optional)
// Description: Returns the income, expenses, and savings for a user in the current financial year. Supports filtering by year and month.

// router.get('/finances/details', (req, res)=> { console.log('assets api')})
// Parameters: userId (optional), year (optional), month (optional)
// Description: Returns a detailed breakdown of income and expenses for a user. Supports filtering by year and month.

// CRUD Operations:
// Choose one of the above resource APIs (e.g., Asset Management) and create CRUD versions (Create, Read, Update, Delete).

module.exports = router