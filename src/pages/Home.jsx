import React from "react";
import Topbar from "../components/Topbar";
import Menubar from "../components/Menubar";
import SlideNews from "../components/SlideNews";
import Ad1 from "../components/Ad1";
import Packages from "../components/Packages";
import Ad2 from "../components/Ad2";
import SlidePromotions from "../components/SlidePromotions";
import SlidePrivilegeBig from "../components/SlidePrivilegeBig";
import SlidePrivilegeSmall from "../components/SlidePrivilegeSmall";
import SlideRewards from "../components/SlideRewards";
import Events from "../components/Events";
import UsefulLinks from "../components/UsefulLinks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Menubar />
      <SlideNews />
      <Ad1 />
      <Packages />
      <Ad2 />
      <SlidePromotions />
      <SlidePrivilegeBig />
      <SlidePrivilegeSmall />
      <SlideRewards />
      <Events />
      <UsefulLinks />
      <Footer />
    </div>
  );
};

export default Home;
