import PageBanner from "@/components/UI/PageBanner";
import carboxy from "public/carboxytherapy-las-vegas.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Carboxy Therapy in Las Vegas",
 description:
  "Transform your skin with Carboxy Therapy at Las Vegas' premier non-invasive solution for cellulite, stretch marks, and dark under-eye circles.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Carboxytherapy"
    body="If you're seeking a non-invasive and effective solution for cellulite, stretch marks, or dark under-eye circles, Carboxy Therapy may be the answer. Our Las Vegas carboxy therapy service offers this innovative treatment that uses CO2 gas to improve blood flow, collagen production, and skin elasticity. With minimal downtime and noticeable results, Carboxy Therapy is a safe and affordable option to enhance your natural beauty. Contact us today to schedule a consultation and see how Carboxy Therapy can transform your skin."
    src={carboxy}
    height={400}
    width={400}
    alt="carboxy-therapy"
    btn={{
     href: "/telehealth",
     text: "Schedule An Appointment",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
  </div>
 );
}

export default page;