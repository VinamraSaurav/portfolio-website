import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Vinamra Saurav",
  description: "I craft end-to-end solutions that resonate with users, creating products they truly enjoy.My expertise spans languages such as C++, C, Python, JavaScript, React, Next Js, HTML, CSS, and SQL. With touch typing skills and a typing speed of around 80+ words per minute, I am passionate about exploring and applying technology to solve real-world problems. My field of interest includes building new Web Technologies, developing applications, and creating products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
      </head>
      <body>
      <Navbar/>
      {children}
      <Footer/>
     
      </body>
    </html>
  );
}
