import React from "react";
import Herosection from "../components/home/hero";
import Cards from "../components/home/cards";
import Footer from "../components/footer/footer";
import Webcard from "../components/home/webcard";
import Contactus from "../components/Contact us/contactus";
import Contactsection from "../components/Contact us/contactsection";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Cards />
      <Webcard />
      {/* <Contactus /> */}
      <Contactsection />
      <Footer />
    </div>
  );
};

export default Home;
