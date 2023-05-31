import {
 ArrowPathIcon,
 CloudArrowUpIcon,
 FingerPrintIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

const features = [
 {
  name: "Low Testosterone Treatment",
  description:
   "Testosterone replacement therapy (TRT) can help increase low testosterone levels in your body to normal, healthy ranges. Our team diagnoses and treats low testosterone along with other health conditions. Customized treatment plans from our team at Low T Center are customized to each patient’s specific needs.",
  icon: ArrowPathIcon,
  image: "/images/low-t-vegas-clinic.jpg",
  href: "/low-testosterone-treatment-las-vegas",
 },
 {
  name: "Weight Loss",
  description:
   "If you’re ready to be at your ideal weight, our personalized weight loss plan can help you get there. Using a scientific medical weight loss approach that considers your specific body’s needs, we will guide you through a custom plan step-by-step, making sure you hit your goals.",
  icon: ArrowPathIcon,
  image: "/images/weight-loss-lv.jpg",
  href: "/weight-loss-las-vegas",
 },

 {
  name: "Pain Management",
  description:
   "We understands a life of pain is not a quality a life. Our continual goal is to understand our patients, and their needs. By doing so, we exceed the highest standards in Pain Management by providing optimal, thorough, and compassionate medical care to our patients",
  icon: CloudArrowUpIcon,
  image: "/images/fibromayalgia.avif",

  href: "/pain-treatment-in-las-vegas",
 },

 {
  name: "Facials Treatment",
  description:
   "Facials are treatments designed to rejuvenate and improve the health of the skin by removing impurities, unclogging pores, and providing hydration",
  icon: FingerPrintIcon,
  image: "/images/facials-vegas.jpg",
  href: "/facials-las-vegas",
 },
 {
  name: "Immigration Physical",
  description:
   "We offer USCIS (U.S. Citizenship and Immigration Services) medical exams for obtaining an immigrant visa as typically required by United States.Our immigration doctors are here to provide compassionate care and analysis during your immigration physical.",
  icon: FingerPrintIcon,
  image: "/images/immigrants.jpg",
  href: "/immigration-physical-las-vegas",
 },

 {
  name: "Acoustic Therapy",
  description:
   "Shockwave therapy is a cutting-edge non-invasive treatment that has proven to be effective in treating various musculoskeletal conditions, including chronic pain and injuries. If you're looking for a reliable shockwave therapy provider in Las Vegas, look no further than our clinic.",
  icon: FingerPrintIcon,
  image: "/images/shock-wave-las-vegas.avif",
  href: "/shockwave-therapy-in-las-vegas",
 },
];

const mobileData = [
 { name: "Pain Management", href: "/pain-treatment-in-las-vegas" },
 { name: "Peptide Therapy", href: "/peptide-therapy-las-vegas" },
 {
  name: "Hormone Therapy for Menopause",
  href: "/hormone-therapy-menopause-las-vegas",
 },
 {
  name: "Chronic Fatigue Syndrome",
  href: "/chronic-fatigue-syndrome-las-vegas",
 },
 {
  name: "Low Testosterone Treatment",
  href: "low-testosterone-treatment-las-vegas",
 },
 {
  name: "Shockwave Therapy",
  href: "/shockwave-therapy-in-las-vegas",
 },
 { name: "Fibromyalgia", href: "/fibromyalgia-treatment-las-vegas" },
 { name: "Weight Loss", href: "/weight-loss-las-vegas" },
 { name: "Facials", href: "/facials-las-vegas" },
];
function ServicesSection() {
 return (
  <section className="py-24 bg-sky-100 sm:py-32">
   {/* mobile */}
   <div className="text-gray-600 md:hidden body-font">
    <div className="container px-5 py-16 mx-auto">
     <div className="mb-20 text-center">
      <p className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
       Our Specialties
      </p>
      <p className="px-4 mx-auto text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4">
       From traditional medical treatments to cutting-edge therapies, we offer a
       holistic approach to enhance your well-being.
      </p>
     </div>
     <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
      {mobileData.map(({ name, href }) => (
       <div className="w-full p-2 sm:w-1/2" key={name}>
        <Link href={href} passHref>
         <div className="flex items-center h-full p-4 bg-white rounded">
          <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="3"
           className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500"
           viewBox="0 0 24 24"
          >
           <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
           <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="font-medium title-font">{name}</span>
         </div>
        </Link>
       </div>
      ))}
     </div>

     <div className="text-center">
      <Button
       text="Request Consultation"
       href="https://cal.com/thevegasclinic/appointment"
       icon=<svg
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
      />
     </div>
    </div>
   </div>

   {/* desktop */}
   <div className="hidden w-full px-6 mx-auto md:block lg:px-4">
    <div className="max-w-2xl mx-auto lg:text-center">
     {/* <p className="text-base font-semibold leading-7 text-indigo-600">
      Our Specialties
     </p> */}
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Our Specialties
     </p>
     <p className="py-4 mt-6 text-lg leading-8 text-center text-gray-600">
      From traditional medical treatments to cutting-edge therapies, we offer a
      holistic approach to enhance your well-being.
     </p>
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
     <div className="flex flex-wrap justify-center">
      {features.map((feature) => (
       <div
        key={feature.name}
        className="relative mb-6 mr-6 group w-96 bg-stone-600 hover:opacity-100"
       >
        <Image
         className="object-cover w-full"
         src={feature.image}
         alt="services"
         width={450}
         height={500}
         quality={100}
        />
        <div className="absolute px-4 py-2 bg-gray-800 bottom-10 left-5 right-5 opacity-70">
         <h3 className="text-xl font-bold text-center text-white">
          {feature.name}
         </h3>
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 p-4 duration-500 bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100">
         <p className="p-3 overflow-hidden text-sm text-justify text-white">
          {feature.description}
         </p>
         <Link
          className="px-8 py-3 mt-5 duration-300 rounded-full bg-amber-400 hover:bg-amber-600"
          href={feature.href}
         >
          Learn More
         </Link>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

export default ServicesSection;
