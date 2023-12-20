import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
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
        <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
         
          <div className="w-full px-4 ">
           
              <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
              We understand the importance of your privacy and want to be transparent about how we collect, use, and share your information. 
              This privacy policy applies to our software bill of materials (SBOM) generation tool and associated services.
                </p>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Information we may collect from you
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-2">
                We collect different types of information depending on how you interact with our tool:
                </p>
                <ul className=" flex flex-col mb-10 list-inside list-disc text-body-color gap-1">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Basic Account Information: If you choose to create an account using Google authentication, 
                  we collect your Google email address and profile picture.</li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Software Dependency Information: We collect information about the dependencies mentioned in your provided files, such as:
                    <ul className="list-[square] list-inside ">
                      <li className="ml-6 mt-2 mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">For Python: Package and version from requirements.txt</li>
                      <li  className="ml-6 mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">For JavaScript: Package and version from package.json and package-lock.json</li>
                      <li className="ml-6 mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">For Java: Package and version from pom.xml</li>
                      <li  className="ml-6 mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">For Zip Upload: All dependencies and associated files extracted from the uploaded zip file</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Please note that we do not collect the actual source code of your project, regardless of the method you choose for SBOM generation.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                How We Use Your Information
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-4">
                We use the information we collect for the following purposes:
                </p>
                <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                Generate SBOMs: We use the dependency information to generate accurate and detailed SBOMs for your software project.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                Improve our services: We may use your information to improve our tool&apros;s accuracy, functionality, and user experience.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                Communicate with you: We may use your email address to send you updates about our tool, new features, and relevant security information.
                </li>
                </ul>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Data Security
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
                We take appropriate security measures to protect your information from unauthorized access, disclosure, 
                alteration, or destruction. These measures include encryption, security reviews, and access controls.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Changes to this Policy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. 
                You are advised to review this privacy policy periodically for any changes.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl pb-2">
                Contact Us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                If you have any questions about this privacy policy, please contact us by creating a ticket.
                </p>
              </div>
           
          </div>
        </div>
      </div>
    </section>
      </>
    );
  };
  
  export default PrivacyPolicy;