import React from "react";
import BannerTop from "../Components/BannerTop";
import ServicesAccordian from "../Components/ServicesAccordian";

function ServicesPage() {
  return (
    <div>
      <BannerTop
        heading={"Services"}
        route={["Student's Affairs", "Services"]}
      />
      <ServicesAccordian />
    </div>
  );
}

export default ServicesPage;
