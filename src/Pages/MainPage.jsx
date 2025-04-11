

import About from "../Sections/About";
import Navbar from "../Sections/Navbar";
import Blessings from "../Sections/Blessings";
import Contact from "../Sections/Contact";
import CountdownTimer from "../Sections/Counter";
import Footer from "../Sections/Footer";
import Hero from "../Sections/Hero";
import StorySec from "../Sections/StorySec";
import WeddingEvents from "../Sections/WeddingEvents";

function MainPage() {


    return (

        <>

            <Navbar />
            <Hero />
            <About />
            <CountdownTimer />
            <WeddingEvents />
            <StorySec />
            <Blessings />
            <Contact />
            <Footer />


        </>
    )
};
export default MainPage;