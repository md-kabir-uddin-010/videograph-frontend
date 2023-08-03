import testimonial_bg from "@/assets/about/testimonial-bg.jpg";
import team_bg from "@/assets/team-bg.jpg";
import Responsive_Container from "@/components/Responsive_Container";
import About_Videograph from "@/components/ui/About_Videograph";
import Counters from "@/components/ui/Counters";
import Our_Team from "@/components/ui/Our_Team";
import Testimonial from "@/components/ui/Testimonial";

export default function About_Page() {
  return (
    <>
      {/* about section */}
      <Responsive_Container>
        <About_Videograph />
      </Responsive_Container>

      {/* testimonial section */}
      <section
        style={{ backgroundImage: `url(${testimonial_bg.src})` }}
        className=" mt-40 w-full min-h-[600px] bg-no-repeat bg-cover bg-top-center"
      >
        <Testimonial />
      </section>

      {/* counter section */}
      <Responsive_Container>
        <Counters />
      </Responsive_Container>

      {/* our team section */}
      <section
        style={{ backgroundImage: `url(${team_bg.src})` }}
        className=" w-full min-h-[600px] bg-no-repeat bg-cover bg-top-center"
      >
        <Responsive_Container>
          <Our_Team />
        </Responsive_Container>
      </section>
    </>
  );
}
