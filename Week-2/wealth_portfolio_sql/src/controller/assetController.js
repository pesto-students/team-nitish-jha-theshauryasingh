const db = require("../models")

console.log('asset controller db -> ', db)

const Asset = db.assets
// const User = db.users

// const get = (req, res) => {
//     console.log('assets api')
//     res.send('successful')
// }

const getAllAssetsById = async (req, res) => {
    let id = req.params.id
    console.log("getAllAssets requested")
    let assets = await Asset.findAll({where: {
        user_id: id
      }}) 
    // console.log(assets); 
    res.status(200).send(assets)
}

const updateAssetById = async (req, res) => {
    let id = 1 //req.params.id
    console.log(req.body, "updateAssetById requested ", id)

    const assetToBeUpdated = await Asset.update({ value: 7000 }, {where: { asset_name: "Stock 3" , user_id: id} }) // req.body = { value: 5000 }
    res.status(200).send(assetToBeUpdated)
}

const deleteAssetById = async (req, res) => {
    let id = req.params.id
    console.log("deleteAssetById requested ", id)
    // await User.destroy({
    //     where: {
    //       firstName: "Jane"
    //     }
    //   });
    await Asset.destroy({ where: { id: id } })
    res.status(200).send("asset is deleted")
}


// const addAsset = async (req, res) => {
//     let info = {
//         user: req.body.user,
//         assetType: req.body.assetType,
//         assetName: req.body.assetName,
//         assetValue: req.body.assetValue,
//         purchaseDate: req.body.purchaseDate || new Date(),
//         description: req.body.description,
//         id: req.body.id
//     }

//     const asset = await Asset.create(info)
//     res.status(200).send(asset)
// }

// const getAssetByID = async (req, res) => {
//     let id = req.params.id
//     let asset = await Asset.findOne({ where: { id: id } })
//     res.status(200).send(asset)
// }


// const getAlltransactions = async (req, res) => {
//     const data = await User.findAll({
//         include: [{
//             model: Asset,
//             as: "assets"
//         }],
//         where: { id: 2 }
//     })
//     res.status(200).send(data)
// }

module.exports = {
    getAllAssetsById,
    updateAssetById,
    deleteAssetById
}

// module.exports = {
//     addAsset,
//     getAllAssets,
//     getAssetByID,
//     updateAssetById,
//     deleteAssetById,
//     getAlltransactions
// }