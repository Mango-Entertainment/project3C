import useForm from "../FormContext";
import completedCheck from "/assets/icon-complete.svg";

const Form = () => {
  const {
    cardholderName,
    cardNumber,
    expirationMonth,
    expirationYear,
    cvc,
    formSubmitted,
    formIsValid,
    updateField,
    submitForm,
    resetForm,
  } = useForm();

  const handleChange = (e) => {
    updateField(e);
  };

  return (
    <div className="text-sm text-darkViolet lg:self-center tracking-widest w-11/12 lg:w-8/12 justify-self-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className={
          "grid grid-cols-4 gap-4 lg:gap-6" +
          (formSubmitted ? "grid-rows-1" : "grid-rows-4")
        }
      >
        {!formSubmitted || !formIsValid ? (
          <>
            <div className="col-span-4">
              <h2>CARDHOLDER NAME</h2>
              <input
                name="cardholderName"
                type="text"
                onChange={handleChange}
                value={cardholderName.data}
                placeholder="e.g. Jane Appleseed"
                maxLength="24"
                className={`border ${
                  !cardholderName.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                } placeholder:text-lightGrayViolet rounded w-full p-3 mt-1 lg:placeholder:text-base`}
              />
              {!cardholderName.isValid && formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  {cardholderName.errorMessage}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-4">
              <h2>CARD NUMBER</h2>
              <input
                name="cardNumber"
                type="text"
                onChange={handleChange}
                value={cardNumber.data}
                maxLength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                className={`border ${
                  !cardNumber.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                }  placeholder:text-lightGrayViolet focus:border-gradient-a rounded w-full shadow-sm p-3 mt-1 lg:placeholder:text-base`}
              />
              {formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  {cardNumber.errorMessage}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-2">
              <h2>Exp. Date (MM/YY)</h2>
              <div className="flex mt-1">
                <input
                  name="expirationMonth"
                  type="text"
                  onChange={handleChange}
                  value={expirationMonth.data}
                  placeholder="MM"
                  maxLength="2"
                  className={`border ${
                    !expirationMonth.isValid && formSubmitted
                      ? "border-red"
                      : "border-lightGrayViolet"
                  } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 lg:placeholder:text-base`}
                />
                <input
                  name="expirationYear"
                  type="text"
                  onChange={handleChange}
                  value={expirationYear.data}
                  placeholder="YY"
                  maxLength="2"
                  className={`border ${
                    !expirationYear.isValid && formSubmitted
                      ? "border-red"
                      : "border-lightGrayViolet"
                  } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 ml-2 lg:placeholder:text-base`}
                />
              </div>
              <div className="mt-2">
                {!expirationMonth.isValid && formSubmitted ? (
                  <p className="text-red text-xs tracking-normal">
                    {expirationMonth.errorMessage}
                  </p>
                ) : (
                  ""
                )}
                {!expirationYear.isValid && formSubmitted ? (
                  <p className="text-red text-xs tracking-normal">
                    {expirationYear.errorMessage}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-span-2">
              <h2>CVC</h2>
              <input
                name="cvc"
                type="text"
                onChange={handleChange}
                value={cvc.data}
                placeholder="e.g. 123"
                maxLength="4"
                className={`border ${
                  !cvc.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                } placeholder:text-lightGrayViolet rounded w-full shadow-sm p-2 mt-1 lg:placeholder:text-base`}
              />
              {!cvc.isValid && formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  {cvc.errorMessage}
                </p>
              ) : (
                ""
              )}
            </div>

            <input
              type="submit"
              value="Confirm"
              className="border rounded-lg h-14 bg-darkViolet text-white text-lg w-full col-span-4"
            />
          </>
        ) : (
          <>
            <div className="col-span-4 text-center">
              <img
                className="block m-auto mb-8"
                src={completedCheck}
                alt="completed check"
              />
              <h1 className="text-3xl mb-4">THANK YOU!</h1>
              <p className="text-grayText mb-6">
                We've added your card details
              </p>
            </div>
            <input
              onClick={resetForm}
              type="submit"
              value="Continue"
              className="border rounded-lg h-14 bg-darkViolet text-white text-lg w-full col-span-4"
            />
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
