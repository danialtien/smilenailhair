"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
  return (
    <div className="relative" id="aboutus-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        {/* <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src={'/images/Cook/burger.png'} alt="burger-image" width={463} height={622} />
                </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/aboutus.jpg"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
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
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  Learn more
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
