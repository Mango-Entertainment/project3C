import useForm from "../FormContext";
import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";
import cardLogo from "/assets/card-logo.svg";
import visaLogo from "/assets/Visa_logo.svg";
import amexLogo from "/assets/American_Express_logo.svg";

const Card = () => {
  const {
    cardholderName,
    cardNumber,
    expirationMonth,
    expirationYear,
    cvc,
    cardType,
  } = useForm();

  const cardNumberSpacer = (cardNumber) => {
    const numArray = cardNumber.trim().replaceAll(" ", "").split("");
    let spacedCardNumber = [];
    for (let i = 0; i < numArray.length; i++) {
      if (i > 0 && i % 4 === 0) spacedCardNumber.push(" ");
      spacedCardNumber.push(numArray[i]);
    }
    return spacedCardNumber.join("").trim();
  };

  const cardImage = () => {
    if (cardType === "other" || cardType === "invalid" || cardNumber === "")
      return cardLogo;
    if (cardType === "visa") return visaLogo;
    if (cardType === "amex") return amexLogo;
  };

  const displayNumber =
    cardNumber.data === ""
      ? "0000 0000 0000 0000"
      : cardNumberSpacer(cardNumber.data);
  const displayName =
    cardholderName.data === "" ? "Jane Appleseed" : cardholderName.data;
  const displayMonth =
    expirationMonth.data === "" ? "00" : expirationMonth.data;
  const displayYear = expirationYear.data === "" ? "00" : expirationYear.data;
  const displayCode = cvc.data === "" ? "000" : cvc.data;

  return (
    <div className="text-white w-11/12 justify-self-center lg:w-4/5 lg:gap-10 lg:self-center lg:justify-self-end grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 mt-8 lg:mt-0">
      <div className="obverse z-10 col-start-1 row-start-3 lg:row-start-1 lg:row-end-2 row-end-6 grid grid-cols-1 w-72 lg:w-[450px]">
        <img
          src={cardFront}
          alt="card front"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 flex flex-col">
          <div>
            <img
              src={cardImage()}
              alt="card logo"
              className="mt-4 lg:mt-6 ml-4 lg:ml-6 h-8 lg:h-12 drop-shadow-[3px_3px_10px_#fff6]"
            />
          </div>
          <div className="flex flex-col mt-8 lg:mt-16 mx-6">
            <div className="text-lg lg:text-3xl tracking-widest text-center">
              {displayNumber}
            </div>
            <div className="flex justify-between text-xs lg:text-sm tracking-widest lg:tracking-[.2em] mt-3 lg:mt-6">
              <div>{displayName.toUpperCase()}</div>
              <div>
                {displayMonth}/{displayYear}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inverse col-start-1 lg:col-start-2 lg:col-span-2 row-start-1 lg:row-start-2 lg:row-end-3 row-end-4 justify-self-end grid grid-cols-1 w-72 lg:w-[450px]">
        <img
          src={cardBack}
          alt="card back"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 pt-1 text-right mt-[4.15rem] lg:mt-[6.6rem] mr-8 lg:mr-14">
          <div className="text-xs lg:text-sm lg:tracking-[.2em]">
            {displayCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
