"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
  return (
    <>
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-center px-4">
            <Image
              src="/assets/Cook/aboutus.jpg"
              alt="nothing"
              width={808}
              height={808}
              className="rounded-2xl shadow-md md:shadow-2xl "
              style={{ width: "90%", height: "100%" }}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center pt-0 pe-4">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Let us serve you
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Smile Nail and Hair.
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                We are a team of passionate people whose goal is to improve
                everyone&apos;s life through disruptive products. We provides a
                wide range of services to help you look and feel your best.
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                Smile Nail and Hair founded in 2000, with over 20 years of
                experiences. We confidently please our customers by providing
                our best services including nail beauty, spa and hair styles. To
                experience our services you can make a reservation on our
                website or on the Smile Nail and Hair app, or cotact us directly
                via mobile phone number: 0988099999
              </p>
              <div className="flex align-middle justify-center md:justify-center">
                <button className="text-md font-medium rounded-xl py-3 px-4 bg-pink ring ring-gray-600">
                  Learn more
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
