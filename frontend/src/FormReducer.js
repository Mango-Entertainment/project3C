export const initialFormState = {
  cardholderName: {
    isValid: false,
    errorMessage: "Name is required buddy!",
    data: "",
  },
  cardNumber: {
    isValid: false,
    errorMessage: "What's your credit card number?",
    data: "",
  },
  expirationMonth: {
    isValid: false,
    errorMessage: "Enter two digit month.",
    data: "",
  },
  expirationYear: {
    isValid: false,
    errorMessage: "Enter two digit year.",
    data: "",
  },
  cvc: {
    isValid: false,
    errorMessage: "Enter your cvc code.",
    data: "",
  },
  formSubmitted: false,
  formIsValid: false,
  cardType: "invalid",
};

export const ACTIONS = {
  // UPDATE_FIELD: "update-field",
  UPDATE_NAME: "update-name",
  UPDATE_CARD_NUMBER: "update-card-number",
  UPDATE_MONTH: "update-month",
  UPDATE_YEAR: "update-year",
  UPDATE_CVC: "update-cvc",
  UPDATE_CARD_TYPE: "update-card-type",
  SUBMIT_FORM: "submit-form",
  VALIDATE_FORM: "validate-form",
  RESET_FORM: "reset-form",
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_NAME:
      return payload;
    case ACTIONS.UPDATE_CARD_NUMBER:
      return payload;
    case ACTIONS.UPDATE_MONTH:
      return payload;
    case ACTIONS.UPDATE_YEAR:
      return payload;
    case ACTIONS.UPDATE_CVC:
      return payload;
    case ACTIONS.UPDATE_CARD_TYPE:
      return payload;
    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        formSubmitted: true,
      };
    case ACTIONS.VALIDATE_FORM:
      return {
        ...state,
        formIsValid: true,
      };
    case ACTIONS.RESET_FORM:
      return initialFormState;
    default:
      throw new Error(`No case for type ${type} in form reducer`);
  }
};

export default formReducer;
