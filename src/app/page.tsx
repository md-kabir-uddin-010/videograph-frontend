import callto_bg from "@/assets/callto-bg.jpg";
import motion_icon from "@/assets/icons/si-1.png";
import editing_icon from "@/assets/icons/si-2.png";
import distribution_icon from "@/assets/icons/si-3.png";
import hosting_icon from "@/assets/icons/si-4.png";
import team_bg from "@/assets/team-bg.jpg";
import Responsive_Container from "@/components/Responsive_Container";
import Callto_bg from "@/components/ui/Callto_bg";
import Counters from "@/components/ui/Counters";
import Our_Blog from "@/components/ui/Our_Blog";
import Our_Services from "@/components/ui/Our_Services";
import Our_Team from "@/components/ui/Our_Team";
import Service_item from "@/components/ui/Service_item";
import Works from "@/components/ui/Works";

export default function Home() {
  return (
    <div className=" lg:px-4 xl-1200px:px-0">
      {/* services section */}
      <Responsive_Container>
        <div className=" py-28 grid grid-cols-1 lg-1000px:grid-cols-12 gap-8 ">
          <div className="lg-1000px:col-span-4  lg-900px:px-2">
            <Our_Services />
          </div>
          <div className="lg-1000px:col-span-8  lg-900px:px-2">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Service_item
                heading="Motion graphics"
                icon={motion_icon.src}
                text="W4ether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
              />
              <Service_item
                heading="Motion graphics"
                icon={editing_icon.src}
                text="W4ether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
              />
              <Service_item
                heading="Motion graphics"
                icon={distribution_icon.src}
                text="W4ether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
              />
              <Service_item
                heading="Motion graphics"
                icon={hosting_icon.src}
                text="W4ether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
              />
            </div>
          </div>
        </div>
      </Responsive_Container>
      {/* works section */}
      <section className=" 2xl:max-w-[1903px] 2xl:mx-auto px-2 sm-400px:px-4 ">
        <Works />
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

      {/* our blog section */}
      <Responsive_Container>
        <Our_Blog />
      </Responsive_Container>

      {/* callto section */}
      <section
        style={{ backgroundImage: `url(${callto_bg.src})` }}
        className=" bg-no-repeat bg-cover bg-top-center"
      >
        <Responsive_Container>
          <Callto_bg />
        </Responsive_Container>
      </section>
    </div>
  );
}
