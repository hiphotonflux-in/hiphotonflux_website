import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ConceptSection from "@/components/sections/ConceptSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PhotonFlux Capital | Leading Quant & Proprietary Trading Firm</title>
        <meta
          name="description"
          content="PhotonFlux Capital is a leading quantitative and proprietary trading firm combining cutting-edge technology with deep market expertise across global financial markets."
        />
      </Helmet>
      <PageLayout>
        <HeroSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <ValuesSection />
        <ConceptSection />
      </PageLayout>
    </>
  );
};

export default Index;
