import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How SBOM Empowers Developers and Small Businesses",
    paragraph:
      "Discover how Secure-compose may help developers and small businesses ensure security, efficiency, and creativity in software development and business operations.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Janvi Choudhary",
      image: "/images/blog/author-01.jpg",
      designation: "Graphic Designer",
    },
    tags: ["empowering"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Future-Proofing Your Projects: Embracing the SBOM Revolution",
    paragraph:
      "The pivotal role of Software Bill of Materials (SBOM) in controlling vulnerabilities, providing transparency, risk assessment, and proactive security measures in software ecosystems.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Bhumika Sharma",
      image: "/images/blog/author-02.jpg",
      designation: "Content Writer",
    },
    tags: ["need"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "All you need to know about Secure-compose",
    paragraph:
      "It reinforces Secure-compose&apros;s role in providing transparency, facilitating vulnerability management, and supporting informed decision-making across the software development and procurement lifecycle.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Janvi Choudhary",
      image: "/images/blog/author-01.jpg",
      designation: "Graphic Designer",
    },
    tags: ["info"],
    publishDate: "2023",
  },
];
export default blogData;
