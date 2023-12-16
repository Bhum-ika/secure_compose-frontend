import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Secure-compose",
  description: "Everything you need to know about Secure-compose",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
<<<<<<< HEAD
        description="Welcome to Secure-compose, where innovation meets excellence. We are dedicated, delivering cutting-edge solutions and exceptional service to meet your needs."
=======
        description="Welcome to Secure-Compose, your trusted ally in fortifying software projects with enhanced security and transparency."
>>>>>>> a4674f9e0f50d2380254fe90ca3491968e841f8b
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
