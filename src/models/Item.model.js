import { model, Schema } from 'mongoose';

const ItemSchema = new Schema({
  color: { type: String },
  year: { type: Number },
  description: { type: String },
  price: { type: Number },
  name: { type: String }
}, {
  timestamps: true,
  versionKey: false
});

export default model('Items', ItemSchema);
