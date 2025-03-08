import mongoose from 'mongoose';

const chatSchema = mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    message: {
      content: { type: String },
      isRead: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const chatModel = mongoose.model('chat', chatSchema);

export default chatModel;
