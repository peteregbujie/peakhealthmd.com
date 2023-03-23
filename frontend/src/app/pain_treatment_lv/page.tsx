import Head from "next/head";
import Link from "next/link";

import AppointmentCTA from "@/components/AppointmentCTA";
import {
 CalendarDaysIcon,
 PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

function Pain() {
 return (
  <div>
   <Head>
    <title>
     Affordable Pain Treatment in Las Vegas | Pain Treatment Specialists at the
     Vegas Clinic
    </title>
    <meta
     name="description"
     content=" Get Affordable Pain Treatment in Las Vegas. We are a top pain specialists in Las Vegas. Our pain treatment specialist will diagnose your pain and create an individualized plan to help for you recover."
     key="desc"
    />
    <meta
     name="keywords"
     content="best pain treatment in las vegas, pain specialists in las vegas, top pain center in Vegas"
    />
   </Head>

   {/* start of header */}
   <header className="relative bg-blue-600">
    <div className="absolute inset-x-0 bottom-0">
     <svg
      viewBox="0 0 224 12"
      fill="currentColor"
      className="w-full -mb-1 text-white"
      preserveAspectRatio="none"
     >
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
     </svg>
    </div>
    <div className="px-4 pt-16 pb-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     <div className="lg:max-w-5xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
      {/* <div className="flex justify-between pb-4 my-6 text-lg font-bold text-white align-baseline">
       <p>
        Got Pain? Our pain specialist in Las Vegas are available to help you.{" "}
       </p>
       <span className="flex">
        <PhoneIcon className="w-8 h-8" />
        <Link
         href="tel:7026254334"
         // onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
        >
         <p className="text-xl font-bold">(702) 625-4334</p>
        </Link>
       </span>
      </div> */}

      <h1 className="my-8 font-sans text-3xl font-bold tracking-tight text-center text-white md:my-12 sm:text-4xl sm:leading-none">
       Pain Management
      </h1>
     </div>
    </div>
   </header>

   {/* end of header */}
   <div className="grid grid-cols-4">
    <article className="col-span-3 mx-auto mt-8 prose prose-slate lg:prose-lg">
     <h2>About Pain</h2>
     <p className="lead">
      Pain is a complex sensory and emotional experience that is felt in
      response to tissue damage, injury, or inflammation. It can range from mild
      discomfort to severe agony and can affect individuals physically,
      emotionally, and psychologically.
     </p>
     <h3>There are two main types of pain:</h3>
     <li>
      <strong>Acute Pain</strong> This type of pain occurs suddenly and is
      usually caused by tissue damage or injury. It is often described as sharp
      or stabbing and is typically localized to the area of injury. Acute pain
      usually subsides once the underlying cause is treated or healed.
     </li>
     <li>
      <strong>Chronic Pain</strong> This type of pain persists for more than 12
      weeks and is often associated with conditions such as arthritis, nerve
      damage, or cancer. Chronic pain can be dull or throbbing and may be
      accompanied by other symptoms such as fatigue, depression, and anxiety.
     </li>
     <blockquote>
      <h4 className="py-10">
       {" "}
       WE ARE THE GO TO{" "}
       <span className="relative inline-block px-2">
        <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
        <span className="relative text-white">
         PAIN TREATMENT CENTER IN LAS VEGAS
        </span>
       </span>
      </h4>
     </blockquote>
     <h3>Paint Treatment Options</h3>
     <p>There are several treatment options for pain, including:</p>
     <h4>Medications</h4>{" "}
     <p>
      Over-the-counter pain relievers such as acetaminophen or ibuprofen can be
      effective for mild to moderate pain. Prescription medications such as
      opioids may be used for severe pain but are associated with risks and
      potential side effects.
     </p>
     <h4>Physical Therapy</h4>{" "}
     <p>
      This can include exercises, stretching, and other techniques to improve
      mobility, reduce pain, and prevent further injury.
     </p>
     <h4>Injections</h4>{" "}
     <p>
      Injections of local anesthetics or steroids may be used to reduce
      inflammation and pain in specific areas of the body.
     </p>
     <h4>Surgery</h4>{" "}
     <p>
      In some cases, surgery may be necessary to treat the underlying cause of
      the pain, such as a herniated disc or damaged joint.
     </p>
     <h4>Alternative therapies</h4>{" "}
     <p>
      These can include acupuncture, massage, yoga, and meditation. While
      research is limited, some people may find these therapies helpful in
      managing pain.
     </p>
     <p>
      It's important to remember that pain is a complex and individual
      experience, and treatment may vary depending on the underlying cause and
      the individual's response to therapy. If you are experiencing pain, it is
      always best to consult with a healthcare professional to determine the
      best course of treatment for you.
     </p>
     <h2 className="pt-4">Las Vegas Pain Treatment Specialist</h2>
     <p>
      We have some of the best pain spcialist in Las Vegas. They specializes in
      the diagnosis and treatment of pain. They can help you manage pain by
     </p>
     <h4>Conducting a thorough evaluation</h4>{" "}
     <p>
      A pain management expert will assess your pain by asking questions about
      your medical history, performing a physical examination, and using
      diagnostic tests if necessary. This will help them to identify the
      underlying cause of your pain
     </p>
     <h4>Developing a treatment plan</h4>{" "}
     <p>
      Once the cause of your pain is identified, the pain management expert will
      develop a personalized treatment plan that may involve a combination of
      pharmacological and non-pharmacological therapies. The treatment plan may
      include medications, physical therapy, interventional procedures,
      psychological therapy, and lifestyle modifications.
     </p>
     <h4>Monitoring and adjusting treatment</h4>{" "}
     <p>
      A pain management expert will regularly monitor your progress and adjust
      your treatment plan as needed. This may involve changes to medication
      dosages or the addition of new therapies.
     </p>
     <h4>Providing education and support</h4>{" "}
     <p>
      Be rest assured you will be in the care of some of the best pain doctors
      in Las Vegas. They will educate you about your pain and provide support to
      help you manage your pain. This may include education about.
     </p>
     <h4>Coordinating Care</h4>{" "}
     <p>
      {" "}
      Looking for the best pain treatment center in Las Vegas? Our team will
      work with other healthcare providers involved in your care to ensure that
      you receive comprehensive and coordinated treatment. Overall, we can help
      you manage your pain by providing comprehensive care and a personalized
      treatment plan that takes into account your individual needs and goals.
      They will also provide education, support, and ongoing monitoring to help
      you achieve the best possible outcomes.
     </p>
    </article>

    <aside className="flex flex-col">
     <div>
      <p className="max-w-[300px] mt-5 text-2xl  text-left text-blue-600">
       Got Pain? <br />
       Our team of pain specialists in Las Vegas are available to help you.
      </p>
     </div>
     <div className="flex flex-col justify-center mt-5">
      <Link
       href="/telehealth"
       className="rounded-md p-4 cursor-pointer tracking-wider text-md  w-[300px] flex justify-center
              items-center
              text-center bg-blue-600 text-white font-bold hover:bg-blue-600 hover:shadow-blue mt-3 hover:scale-90
            "
      >
       <CalendarDaysIcon className="w-8 h-8 mr-4 text-white" />
       Request An Appointment
      </Link>
      <Link
       href="tel:7026254334"
       className="rounded-md p-4 cursor-pointer tracking-wider text-md w-[300px] justify-center flex hover:scale-90
              items-center
              text-center bg-blue-600 text-white font-bold hover:bg-blue-600 hover:shadow-blue mt-3
            "
      >
       <PhoneArrowUpRightIcon className="w-6 h-6 mr-4 text-white" /> Contact Us
      </Link>
     </div>
    </aside>
   </div>

   <AppointmentCTA />
  </div>
 );
}

export default Pain;
