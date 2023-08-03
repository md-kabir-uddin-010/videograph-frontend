import Responsive_Container from "./Responsive_Container";
import Copyright from "./ui/Copyright";
import Footer from "./ui/Footer";
import Footer_Navbar from "./ui/Footer_Navbar";

export default function Footers() {
  return (
    <footer className=" bg-black py-10 lg:px-2">
      <Responsive_Container>
        <Footer_Navbar />
        <Footer />
        <Copyright />
      </Responsive_Container>
    </footer>
  );
}
