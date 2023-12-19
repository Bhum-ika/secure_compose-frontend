import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Secure-compose",
  description: "Secure-compose and its policies",
  // other metadata
}

const PrivacyPolicy = () => {
    return (
      <>
        <Breadcrumb
          pageName="Privacy Policy"
          description="Welcome to Secure-Compose, your trusted ally in fortifying software projects with enhanced security and transparency."
        />
      </>
    );
  };
  
  export default PrivacyPolicy;