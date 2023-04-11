import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Wellness Medical Center in Las Vegas",
 description:
  "Take charge of your health and wellness with our comprehensive medical services in Las Vegas - our expert team can help you achieve your health goals and improve your overall well-being.",
};

function About() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <article className="max-w-5xl mx-auto prose">
     <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      Our Mission
     </h1>
     <p className="px-4 py-5 mt-6 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Our mission at the{" "}
      <Link href="https://www.lasvegasnevada.gov/">Vegas</Link> Clinic is to
      provide the highest quality integrative medicine, aesthetics, and wellness
      services to our patients. We believe that health and beauty are
      inseparable, and we are committed to helping our patients achieve optimal
      health and vitality, inside and out.
      <br />
      Our goal is to empower our patients to take an active role in their own
      health and well-being by providing personalized care and education that
      addresses the root cause of their health concerns. We strive to create a
      warm, welcoming environment that promotes healing and supports our
      patients on their journey to wellness.
      <br /> At the Vegas Clinic, we are dedicated to providing innovative,
      evidence-based solutions that enhance the natural beauty and vitality of
      our patients, while also improving their overall health and well-being.
     </p>
     <div className="mt-4 md:mt-8">
      <Link
       href="/contact"
       className="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       Get in Touch
      </Link>
     </div>
    </article>

    <div className="flex justify-center mt-10">
     <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
       <div className="relative col-span-1 mt-12 overflow-hidden rounded-lg lg:order-last">
        <Image
         className=""
         alt="banner"
         src="/about-vegas-clinic1.jpg"
         width={400}
         height={600}
         quality={100}
        />
       </div>

       <article className="col-span-2 prose lg:text-xl">
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
         About Us
        </h1>
        <p className="text-justify">
         Welcome to the Vegas Clinic offering exceptional pain management,
         aesthetics, weight loss, and hormone therapies in Las Vegas. Our team
         of experienced medical professionals is dedicated to providing the
         highest quality care to help you achieve optimal health and wellness.
        </p>
        <p className="text-justify">
         At our clinic, we understand that pain can be debilitating, and that's
         why we offer a comprehensive pain management program tailored to meet
         your unique needs. We use the latest techniques and technology to help
         alleviate pain and improve your quality of life.
        </p>{" "}
        <p className="text-justify">
         In addition to pain management, we also offer a range of aesthetics
         services to help you look and feel your best. Whether you're interested
         in Botox, fillers, or other cosmetic treatments, our team can help you
         achieve your desired results.
        </p>{" "}
        <p className="text-justify">
         For those looking to lose weight, we offer a variety of weight loss
         programs designed to help you shed those extra pounds and keep them
         off. Our team of experts will work with you to develop a personalized
         plan that fits your lifestyle and goals.
        </p>{" "}
        <p className="text-justify">
         We also specialize in hormone therapies, helping patients manage
         hormonal imbalances that can lead to a range of health issues. Our
         hormone therapy program is designed to help balance hormones and
         improve overall health and wellbeing.
        </p>{" "}
        <p className="text-justify">
         At our clinic, we pride ourselves on providing compassionate,
         personalized care to every patient. We understand that every person is
         unique, and we tailor our treatments to meet your specific needs. We
         use the latest technology and techniques to ensure that you receive the
         best possible care.
        </p>{" "}
        <p className="text-justify">
         If you're looking for a medical service offering exceptional pain
         management, aesthetics, weight loss, and hormone therapies in Las
         Vegas, look no further. Contact us today to schedule your consultation
         and take the first step towards a healthier, happier you.
        </p>
       </article>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default About;
