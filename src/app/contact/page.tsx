import location from "@/assets/icons/location.png";
import phone from "@/assets/icons/phone.png";
import Responsive_Container from "@/components/Responsive_Container";
import Contact_Form from "@/components/ui/Contact_Form";
import Contact_info from "@/components/ui/Contact_info";

export default function Contact_Page() {
  return (
    <Responsive_Container>
      <div className=" w-full flex items-center justify-center">
        <div className=" my-20 flex items-center flex-wrap gap-y-2">
          <Contact_info
            icon={phone.src}
            title="Address"
            text="Los Angeles Gournadi, 1230 Bariasl"
          />
          <Contact_info
            icon={location.src}
            title="Hotline"
            text="1-677-124-44227 • 1-688-356-66889"
          />
          <Contact_info
            icon={location.src}
            title="Email"
            text="Support@gmail.com"
          />
        </div>
      </div>
      <div className=" py-20 px-1 md-800px:px-3 w-full sm-600px:w-[500px] sm-600px:mx-auto md-800px:w-full grid grid-cols-1 md-800px:grid-cols-2 md-800px:gap-8">
        {/* google map */}
        <div className=" uppercase">
          <div className="mapouter ">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe w-full min-h-[400px]"
                width="100%"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dimla&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        {/* form */}
        <div className=" mt-10 md-800px:mt-0">
          <h2 className="uppercase font-bold text-2xl">Get in touch</h2>
          <Contact_Form />
        </div>
      </div>
    </Responsive_Container>
  );
}
