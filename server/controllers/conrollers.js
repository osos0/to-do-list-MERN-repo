const dbModel = require("../models/model-creation");

const conrollers = {
  getStrat: (req, res) => {
    res.send("hello from  `/` ");
  },
  getAll: async (req, res) => {
    const objs = await dbModel.find();
    if (objs) res.status(200).json({ objs });
    else res.status(404).json({ messsege: "Not found" });

    // res.json({ objs });
  },

  getAOne: async (req, res) => {
    const objectId = req.params.id;
    const objs = await dbModel.findById(objectId);
    res.json({ objectId: objs });
  },

  PostObj: async (req, res) => {
    const newObj = new dbModel(req.body);
    //way one
    // await newObj.save();
    // res.json({ newObj: newObj });
    //way two
    if (newObj) {
      res.status(200).json({ newObj: newObj });
      await newObj.save();
    } else {
      res.status(404).json({ messsege: "Not added" });
    }
  },

  // editObj: async (req, res) => {
  //   const obj = await dbModel.findById(req.params.id, (err, obj) => {
  //     (obj.car = req.body.Car),
  //       (obj.color = req.body.Color),
  //       (obj.price = req.body.Price);
  //     res.json({ messege: "Edited" });
  //   });
  //   // if (obj) {
  //   //   // (obj._id = req.params.id),
  //   //   (obj.car = req.body.Car),
  //   //     (obj.color = req.body.Color),
  //   //     (obj.price = req.body.Price);
  //   //   res.status(200).json({ messege: "Edited" });
  //   // } else {
  //   //   res.status(!200).json({ messege: "Not Edited" });
  //   // }
  // },

  // obj ={
  //   car = req.body.Car,
  //   color = req.body.Color,
  //   price = req.body.Price,
  // }

  deleteobj: async (req, res) => {
    await dbModel.findByIdAndDelete(req.params.id);

    res.json({ messsege: "The car has been deleted" });
  },
};

module.exports = conrollers;
