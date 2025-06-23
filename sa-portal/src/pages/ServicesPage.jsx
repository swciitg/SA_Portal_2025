import React, { useEffect, useState } from "react";
import BannerTop from "../Components/BannerTop";
import ServicesAccordian from "../Components/ServicesAccordian";
import sendApiRequest from "../services/apiService";

function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesRes = await sendApiRequest("/services", "GET");

        console.log({ servicesRes });

        setServices(servicesRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BannerTop
        heading={"Services"}
        route={["Student's Affairs", "Services"]}
      />
      <ServicesAccordian services={services} />
    </div>
  );
}

export default ServicesPage;
