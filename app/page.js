"use client";

import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import FeaturesLeft from "@/components/FeatureLeft";
import FeaturesRight from "@/components/FeatureRight";
import TriFold from "@/components/TriFold";
import Facts from "@/components/Facts";
import FeatureBtmLft from "@/components/FeatureBtmLft";
import { CallToAction1 } from "@/components/CallToAction";
import Testimonials1 from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import GradientAnimation from "@/components/GradientAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const page = () => {
  return (
    <PlaxLayout bg={false} margin={0}>
      <Banner
        title={
          <>
            Smarter Payment Solutions For
            <br />
            Your Business
          </>
        }
        img="img/home-3/1.png"
        style={{ maxWidth: "100%" }}
      />
      <Brands />
      <FeaturesLeft />
      <div
        style={{
          position: "relative",
          height: "100px", // Height of the gradient animation stripe
          overflow: "hidden",
        }}
      >
        <GradientAnimation />
      </div>
      <FeaturesRight />
      <TriFold />
      <FeatureBtmLft />
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-1 mil-p-160-160">
            <div className="row justify-content-center">
              <div className="col-xl-7 mil-relative">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <blockquote className="mil-with-bg">
                      <svg
                        width={50}
                        height={32}
                        viewBox="0 0 50 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mil-mb-30 mil-up mil-accent"
                      >
                        <path
                          d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM25 45C13.402 45 4 35.598 4 24C4 12.402 13.402 3 25 3C36.598 3 46 12.402 46 24C46 35.598 36.598 45 25 45Z"
                          fill="#F6F8FF"
                        />
                      </svg>
                      <p className="mil-text-m mil-mb-30 mil-up">
                        Plax Standard has proven to be more than a card; it is
                        my financial defender. Proactive alerts give me
                        confidence that my security is in good hands.
                      </p>
                      <div className="mil-customer">
                        <img
                          src="img/faces/female.webp"
                          alt="Customer"
                          className="mil-up"
                        />
                        <h6 className="mil-up">Branka Berg</h6>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                  <SwiperSlide>
                    <blockquote className="mil-with-bg">
                      <svg
                        width={50}
                        height={32}
                        viewBox="0 0 50 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mil-mb-30 mil-up mil-accent"
                      >
                        <path
                          d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM25 45C13.402 45 4 35.598 4 24C4 12.402 13.402 3 25 3C36.598 3 46 12.402 46 24C46 35.598 36.598 45 25 45Z"
                          fill="#F6F8FF"
                        />
                      </svg>
                      <p className="mil-text-m mil-mb-30 mil-up">
                        The detailed notification history in the App gives me a
                        complete view of my financial activity. It's like having
                        a personal security assistant always.
                      </p>
                      <div className="mil-customer">
                        <img
                          src="img/faces/male.jpg"
                          alt="Customer"
                          className="mil-up"
                        />
                        <h6 className="mil-up">Karl Andreassen</h6>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Facts />
      <CallToAction1 />
    </PlaxLayout>
  );
};

export default page;
