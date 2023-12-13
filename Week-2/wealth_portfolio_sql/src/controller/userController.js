const db = require("../models")

console.log('user controller db -> ', db)

const User = db.users
// const User = db.users

// const get = (req, res) => {
//     console.log('assets api')
//     res.send('successful')
// }

const getAllUser = async (req, res) => {
    console.log("getAllUser requested")
    let users = await User.findAll()
    res.status(200).send(users)
}

const registerUser = async (req, res) => {
    console.log(req.body, " ------------------------------------------------------------------------------- register requested ")
    // const assetToBeUpdated = await Asset.update({ value: 7000 }, {where: { asset_name: "Stock 3" , user_id: id} }) // req.body = { value: 5000 }
    res.status(200).send(' user To Be register ')
}

const deleteUser = async (req, res) => {
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

module.exports = {
    getAllUser,
    registerUser,
    deleteUser
}