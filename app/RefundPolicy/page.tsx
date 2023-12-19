import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Secure-compose",
  description: "Secure-compose and its policies",
  // other metadata
}

const RefundPolicy = () => {
    return (
      <>
        <Breadcrumb
          pageName="Refund Policy"
          description="Welcome to Secure-Compose, your trusted ally in fortifying software projects with enhanced security and transparency."
        />
      </>
    );
  };
  
  export default RefundPolicy;