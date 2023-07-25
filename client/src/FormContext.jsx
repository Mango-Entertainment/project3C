import formReducer, {initialFormState, ACTIONS} from "./FormReducer";
import {
  nameCheck,
  twoNameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  amexCardCheck,
  visaCardCheck,
  mainCvcCheck,
  amexCvcCheck,
} from "./utils/validation";
import {createContext, useReducer, useContext} from "react";

export const FormContext = createContext();

export const FormContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const updateField = (e) => {
    // run validations on fields as they are being updated
    switch (e.target.name) {
      case "cardholderName":
        return checkName(e.target.value);
      case "cardNumber":
        return checkNumber(e.target.value);
      case "expirationMonth":
        return checkMonth(e.target.value);
      case "expirationYear":
        return checkYear(e.target.value);
      case "cvc":
        return checkCVC(e.target.value);
      default:
        return;
    }
  };

  const checkNumber = (number) => {
    // strip spaces out of input - easier to enforce 16 digit limit
    number = number.trim();

    // run validations
    const checkedNumber = (number) => {
      // number is empty
      if (number === "") {
        return {
          ...state,
          cardNumber: {
            data: number,
            isValid: false,
            errorMessage: "Can't be blank",
            cardType: "invalid",
          },
        };
      }

      // number is not empty but doesn't pass tests

      // we need separate tests for only numbers, length, and valid prefix
      if (
        !visaCardCheck.test(number) &&
        !amexCardCheck.test(number) &&
        !cardCheck.test(number)
      ) {
        return {
          ...state,
          cardNumber: {
            data: number,
            isValid: false,
            errorMessage: "Credit card numbers only",
          },
          cardType: "invalid",
        };
      }

      // number passes all validations
      if (visaCardCheck.test(number)) {
        return {
          ...state,
          cardNumber: {
            data: number,
            isValid: true,
            errorMessage: "",
          },
          cardType: "visa",
        };
      }
      if (amexCardCheck.test(number)) {
        return {
          ...state,
          cardNumber: {
            data: number,
            isValid: true,
            errorMessage: "",
          },
          cardType: "amex",
        };
      }
      if (cardCheck.test(number)) {
        return {
          ...state,
          cardNumber: {
            data: number,
            isValid: true,
            errorMessage: "",
          },
          cardType: "other",
        };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_CARD_NUMBER,
      payload: checkedNumber(number),
    });
  };

  const checkMonth = (month) => {
    // clean input
    month = month.trim();

    // run validations
    const checkedMonth = (month) => {
      // month is empty
      if (month === "") {
        return {
          ...state,
          expirationMonth: {
            data: month,
            isValid: false,
            errorMessage: "Month can't be blank.",
          },
        };
      }

      // month is not empty but doesn't pass tests
      if (month.length !== 2) {
        return {
          ...state,
          expirationMonth: {
            data: month,
            isValid: false,
            errorMessage: "Month must be two digits.",
          },
        };
      }

      if (!monthCheck.test(month)) {
        return {
          ...state,
          expirationMonth: {
            data: month,
            isValid: false,
            errorMessage: "Invalid month.",
          },
        };
      }

      // month passes all validations
      if (monthCheck.test(month)) {
        return {
          ...state,
          expirationMonth: {data: month, isValid: true, errorMessage: ""},
        };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_MONTH,
      payload: checkedMonth(month),
    });
  };

  const checkYear = (year) => {
    // trim input and format with spaces
    year = year.trim();

    // run validations
    const checkedYear = (year) => {
      // year is empty
      if (year === "") {
        return {
          ...state,
          expirationYear: {
            data: year,
            isValid: false,
            errorMessage: "Year can't be blank.",
          },
        };
      }

      // year is not empty but doesn't pass tests
      if (!yearCheck.test(year)) {
        return {
          ...state,
          expirationYear: {
            data: year,
            isValid: false,
            errorMessage: "Year must be two digits.",
          },
        };
      }

      let currentYear = parseInt(
        new Date().getFullYear().toString().substring(2)
      );

      if (parseInt(year) < currentYear || parseInt(year) > currentYear + 10) {
        return {
          ...state,
          expirationYear: {
            data: year,
            isValid: false,
            errorMessage: "Invalid year.",
          },
        };
      }

      // year passes all validations
      if (year) {
        return {
          ...state,
          expirationYear: {data: year, isValid: true, errorMessage: ""},
        };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_YEAR,
      payload: checkedYear(year),
    });
  };

  const checkCVC = (cvc) => {
    // trim input and format with spaces
    cvc = cvc.trim();
    //
    // run validations
    // console.log("main cvc check: " + mainCvcCheck.test(cvc));
    // console.log("amex cvc check: " + amexCvcCheck.test(cvc));
    const checkedCVC = (cvc) => {
      // cvc is empty
      if (cvc === "") {
        console.log("BLANK CVC");
        return {
          ...state,
          cvc: {
            data: cvc,
            isValid: false,
            errorMessage: "CVC can't be blank.",
          },
        };
      }

      // cvc is not empty but doesn't pass tests
      if (!mainCvcCheck.test(cvc) && !amexCvcCheck.test(cvc)) {
        console.log("CVC not blank but not passing either test");
        return {
          ...state,
          cvc: {
            data: cvc,
            isValid: false,
            errorMessage: "Invalid CVC.",
          },
        };
      }

      // cvc passes all validations
      if (state.cardType === "invalid") {
        console.log("Invalid cardtype");
        return {
          ...state,
          cvc: {data: cvc, isValid: false, errorMessage: "Invalid Card"},
        };
      }
      if (state.cardType === "amex" && amexCvcCheck.test(cvc)) {
        console.log("Cardtype amex and CVC passing amex test");
        return {
          ...state,
          cvc: {data: cvc, isValid: true, errorMessage: ""},
        };
      }
      if (state.cardType === "visa" && mainCvcCheck.test(cvc)) {
        console.log("Cardtype visa and CVC passing main test");
        return {
          ...state,
          cvc: {data: cvc, isValid: true, errorMessage: ""},
        };
      }
      if (state.cardType === "other" && mainCvcCheck.test(cvc)) {
        console.log("Cardtype other and CVC passing main test");
        return {
          ...state,
          cvc: {data: cvc, isValid: true, errorMessage: ""},
        };
      }

      return {
        ...state,
        cvc: {data: cvc, isValid: false, errorMessage: "Invalid CVC."},
      };
    };

    dispatch({
      type: ACTIONS.UPDATE_CVC,
      payload: checkedCVC(cvc),
    });
  };

  const checkName = (name) => {
    name = name.trimStart();
    const checkedName = () => {
      /* error if name is empty */
      if (name === "") {
        return {
          ...state,
          cardholderName: {
            data: name,
            isValid: false,
            errorMessage: "Name is required buddy",
          },
        };
      }

      /* name is filled out but doesn't pass all validations */
      /* We might need multiple checks - for now it's the old one */
      if (!nameCheck.test(name)) {
        return {
          ...state,
          cardholderName: {
            data: name,
            isValid: false,
            errorMessage: "Wrong Format - no numbers allowed",
          },
        };
      }
      if (!twoNameCheck.test(name.trimEnd())) {
        return {
          ...state,
          cardholderName: {
            data: name,
            isValid: false,
            errorMessage: "Wrong Format - must be first and last names.",
          },
        };
      }

      /* name passes all validations */
      if (nameCheck.test(name)) {
        return {
          ...state,
          cardholderName: {data: name.trim(), isValid: true, errorMessage: ""},
        };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: checkedName(name),
    });
  };

  const submitForm = () => {
    dispatch({
      type: ACTIONS.SUBMIT_FORM,
      payload: null,
    });

    if (
      state.cardholderName.isValid &&
      state.cardNumber.isValid &&
      state.expirationMonth.isValid &&
      state.expirationYear.isValid &&
      state.cvc.isValid
    ) {
      dispatch({
        type: ACTIONS.POST_DATA,
      });
      dispatch({
        type: ACTIONS.VALIDATE_FORM,
        payload: null,
      });
    }
  };

  const resetForm = () => {
    dispatch({
      type: ACTIONS.RESET_FORM,
      payload: null,
    });
  };

  const value = {
    cardholderName: state.cardholderName,
    cardNumber: state.cardNumber,
    expirationMonth: state.expirationMonth,
    expirationYear: state.expirationYear,
    cvc: state.cvc,
    cardType: state.cardType,
    formIsValid: state.formIsValid,
    formSubmitted: state.formSubmitted,
    updateField,
    submitForm,
    resetForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm must be within FormContext");
  }

  return context;
};

export default useForm;
