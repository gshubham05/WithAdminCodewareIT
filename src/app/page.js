import React from "react";
import Herosection from "./Components/Herosection";
import Aboutcompany from "./Components/Aboutcompany";
import Faq from "./Components/Faq";
import Courses from "./Components/Courses";
import Cstatistics from "./Components/Cstatistics";
function page() {
  return (
    <>
      <Herosection />
      <Aboutcompany />
      <Courses />
      <Cstatistics />
      <Faq />
    </>
  );
}

export default page;
