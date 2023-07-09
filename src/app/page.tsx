import React from "react";
import { Services } from "@/utils/vendor";
import PortfolioSection from "@/components/portfolio-section";
import { AboutSection, CTASection, ContactForm, Hero, Navbar, ServiceCard } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full">
      <Hero />
        {/* ABOUT SECTION */}
        <AboutSection />
        {/* SERVICES SECTION */}
        <section
          id="service"
          className="w-full overflow-hidden py-20 container space-y-12"
        >
          <h2 className="text-3xl text-center text-primary-title font-bold">
            What I Do
            <span className="block text-base text-primary-lightText font-normal">
              My services
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-10">
            {Services.map((_, i) => (
              <ServiceCard
                key={i}
                title={_.title}
                icon={_.icon}
                description={_.description}
              />
            ))}
          </div>
        </section>
        {/* PORTFOLIO SECTION */}
        <PortfolioSection />
        {/* CALL TO ACTION */}
        <CTASection />
        {/* Contact Section */}
        <section
          id="contact"
          className="overflow-hidden py-20 container space-y-12"
        >
          <h2 className="text-3xl text-center text-primary-title font-bold">
            Contact Me
            <span className="block text-base text-primary-lightText font-normal">
              Let&#39;s get in touch
            </span>
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
