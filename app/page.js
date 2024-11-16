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

const page = () => {
  return (
    <PlaxLayout bg={false} margin={0}>
      <Banner
        title="Smart Payment Solutions for Businesses"
        img="img/home-3/1.png"
        style={{ maxWidth: "100%" }}
      />
      <Brands />
      <FeaturesLeft />
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
