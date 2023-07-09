import { FormContextProvider } from "../FormContext";
import Card from "./Card";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";

function MainPage() {
  return (
    <>
      <FormContextProvider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:h-[900px] bg-mobile lg:bg-desktop bg-no-repeat">
          <Card />
          <Form />
        </div>
      </FormContextProvider>
    </>
  );
}

export default MainPage;
