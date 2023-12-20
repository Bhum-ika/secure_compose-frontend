import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Security | Secure-compose",
  description: "Secure-compose and its policies",
  // other metadata
}

const ApplicationSecurity = () => {
    return (
      <>
        <Breadcrumb
          pageName="Application Security"
          description="Welcome to Secure-Compose, your trusted ally in fortifying software projects with enhanced security and transparency."
        />
        <div className="flex relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 justify-center p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-base font-medium italic text-body-color w-3/4 flex flex-col text-center">
                    <strong className="text-primary dark:text-white">
                      What is Application Security?
                    </strong><br/>
                    Application security is a critical aspect of software development, aimed at identifying, fixing, and preventing security vulnerabilities within applications. 
                    It involves implementing a secure software development life cycle, with the ultimate objective of enhancing security practices and ensuring the integrity, confidentiality, and availability of data.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
        <div className="container mx-auto pb-16">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Information we may collect from you
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
        Applications, especially those that are cloud native, are a gateway to servers and networks and present an ideal attack vector for malicious actors. 
        Since malicious actors continue to refine their methods to penetrate software, it&apros;s crucial that security is an ongoing activity that&apros;s deeply embedded in the development process. 
        Application security best practices help uncover vulnerabilities before attackers can use them to breach networks and data. 
        It&apros;s also important to consider application data security to ensure that sensitive data such as customer information is secure.
        Vulnerabilities can originate from something as simple as a configuration error or using a software component that contains a known vulnerability. 
        </p>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        What are the challenges of modern application security?
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
        Modern application security is a wide and complex topic. We’ve boiled it down to five main challenges organizations commonly encounter:
        </p>
        <ul className=" flex flex-col mb-10 list-inside list-disc text-body-color gap-1">
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Inherited vulnerabilities</li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Third-party and open source vulnerabilities</li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Adopting a DevSecOps approach</li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Finding qualified experts</li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Lack of a centralized management tool</li>
          </ul>
          <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[87/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/applicationsecurity/application.png"
                        alt="image"
                        fill
                        className=" object-center"
                      />
                    </div>
          </div>
          <h3 className="mb-4 mt-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Inherited vulnerabilities
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
        Developers need to be aware of vulnerabilities they may introduce during the coding process, but some vulnerabilities are inherent in modern applications. These inherited vulnerabilities exist for a few reasons:
        </p>
        <ul className=" flex flex-col mb-10 list-inside list-disc text-body-color gap-1">
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
          Software systems experience entropy — they are constantly changing, increasing in complexity, and in need of updating and improvement.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
          Prioritizing which fixes, updates, and maintenance activities are most important is a vital and ongoing effort.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
          Legacy code continues to play an important role in many organizations’ environments, and security teams need to scan this code and prioritize the most important fixes. 
          Older code is less exciting than shiny new application code, so fewer people are interested in working with it, but it still requires careful consideration pertaining to security.
          </li>
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
          The newest security tools are often not licensed to deal with legacy code. 
          Problems build up over time if the code isn’t maintained and secured.
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          How do you secure an application?
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pb-6">
        Application security starts from the earliest stages of planning, where threat modeling and secure-by-design principles can ensure security is built into the application. 
        It continues to the development and testing stages, where scanning tools can integrate into developer workflows to automate security testing. 
        Since developers are increasingly responsible for the containers and infrastructure used to run the application, that environment also needs to be secured.
        </p>
        </div>
      </>
    );
  };
  
  export default ApplicationSecurity;