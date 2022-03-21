const model = require("../models/model");

//POST
async function createCategories(req, res) {
  const Create = new model.Categories({
    type: "Investment",
    color: "#FCBE44",
  });

  await Create.save((err) => {
    if (!err) return res.json(Create);

    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` });
  });
}

// GET
async function getCategories(req, res) {
  let data = await model.Categories.find({});

  let filter = await data.map((item) =>
    Object.assign({}, { type: v.type, color: v.color })
  );

  return res.json(filter);
}

async function createTransaction(req, res) {
  
}

module.exports = { createCategories, getCategories };
