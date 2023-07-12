import UserData from "../models/userDataModel.js";
import asyncHandler from "express-async-handler";

const add = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    cardProvider,
    cardNumber,
    expirationMonth,
    expirationYear,
    cvcNumber,
  } = req.body;
  // const check = await UserData.findOne({ cardNumber });
  // if (check) {
  //   res.status(400);
  //   throw new Error("card number exists :)");
  // }
  const data = await UserData.create({
    firstName,
    lastName,
    cardProvider,
    cardNumber,
    expirationMonth,
    expirationYear,
    cvcNumber,
  });
  if (data) {
    res.status(201).json({
      firstName: data.firstName,
      lastName: data.lastName,
      cardProvider: data.cardProvider,
      cardNumber: data.cardNumber,
      expirationMonth: data.expirationMonth,
      expirationYear: data.expirationYear,
      cvcNumber: data.cvcNumber,
    });
  } else {
    res.status(400);
    throw new Error("this didn't work");
  }
});

const getAllData = asyncHandler(async (req, res) => {
  const data = await UserData.find({});
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("Cannot find users :/");
  }
});

export {add, getAllData};
