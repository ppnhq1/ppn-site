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

const page = () => {
  return (
    <PlaxLayout bg={false} margin={0}>
      <Banner
        title={
          <>
            Smarter Payment Solutions For
            <br />{" "}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "Business", // Display this word
                3000, // Wait 2 seconds
                "E-Commerce",
                3000,
                "Retail",
                3000,
                "Restaurants",
                3000,
                "Home Services",
                3000,
              ]}
              wrapper="span" // Wrapping element, e.g., <span>, <div>, etc.
              cursor={true} // Show cursor
              repeat={Infinity} // Loop the animation indefinitely
              style={{ color: "inherit" }} // Optional styling
            />
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
          overflow: "flex",
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
                <Testimonials1 />
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
