import Item from "../database/models/Item.model.js";

const insertItem = async (item) => {
  return await Item.create(item);
};

const retrieveItems = async () => {
  return await Item.find();
};

const retrieveItem = async (id) => {
  return await Item.findById(id);
};

const updateItem = async (id, item) => {
  return await Item.findByIdAndUpdate(id, item, { new: true });
};

const removeItem = async (id) => {
  return await Item.findByIdAndDelete(id);
}

export { 
  insertItem,
  retrieveItems,
  retrieveItem,
  updateItem,
  removeItem
};
