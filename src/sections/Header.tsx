// import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//         <Link href="#hero"className="nav-item">Home</Link>
//         <Link href="#projects"className="nav-item">Projects</Link>
//         <Link href="#about"className="nav-item">About</Link>
//         <Link href="#contact"className="nav-item">Contact</Link>
//       </nav>
//     </div>
//   );
// };

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

export const Header = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay before removing the loader
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 z-50">
          <HashLoader color="#ffffff" size={100} />
        </div>
      ) : (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
            <Link href="#hero" className="nav-item">Home</Link>
            <Link href="#projects" className="nav-item">Projects</Link>
            <Link href="#about" className="nav-item">About</Link>
            <Link href="#contact" className="nav-item">Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
};