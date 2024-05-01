import { model, Schema } from 'mongoose';

const ItemSchema = new Schema({
  name: { type: String },
  color: { type: String },
  year: { type: Number },
  description: { type: String },
  price: { type: Number },
}, {
  timestamps: true,
  versionKey: false
});

export default model('Items', ItemSchema);
