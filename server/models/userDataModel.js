import mongoose from "mongoose";

const userDataSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    cardProvider: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expirationMonth: {
      type: String,
      required: true,
    },
    expirationYear: {
      type: String,
      required: true,
    },
    cvcNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserData = mongoose.model("UserData", userDataSchema);

export default UserData;
