import { AboutSection, ContactForm, Hero, ProjectCard, ServiceCard } from "@/components";
import { Projects } from "@/utils/vendor";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Hero />
      <main>
        {/* About Section */}
        <AboutSection />
        <section
          id="service-section"
          className="w-full overflow-hidden py-20 bg-slate-200"
        >
          <div className="container space-y-12">
            <h3 className="text-3xl text-center font-semibold">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-10">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </section>
        <section id="projects-section" className="w-full py-20">
          <div className="container space-y-10">
            <h3 className="text-3xl text-center font-semibold">My Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-10">
              {Projects.map((item, index) => (
                <ProjectCard key={index} data={item} />
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <Link
                href=""
                className="relative w-fit px-10 py-3 z-10 text-white after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-primary after:-z-10 hover:after:scale-95 after:transition-all after:duration-300 after:rounded"
              >
                See More
              </Link>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact-section"
          className="bg-slate-800 bg-[url('/images/hero-bg-3.jpg')] bg-no-repeat bg-scroll bg-center bg-cover overflow-hidden"
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-[3px] py-20">
            <div className="container flex flex-col items-center justify-center gap-10">
              <h3 className="text-3xl text-center font-semibold text-white">
                Connect With Me
              </h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
