import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Contact/>
     
      
        {/* <ModeToggle/> */}
  
    </div>
  );
}
