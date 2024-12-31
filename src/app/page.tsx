import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
// import Chatbot from "@/components/Chatbot";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            {/* <Chatbot/> */}
            <About />
            <Projects/>
            <Experience/>
            <Footer />
        </>
      );
  }
  