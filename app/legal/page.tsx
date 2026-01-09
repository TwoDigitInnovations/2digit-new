"use client";
import Image from "next/image";
import Link from "next/link"; // Add this import
export default function Legal() {


  return (
    <main className="min-h-screen bg-white relative overflow-hidden">


      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20 mb-6">
          Certificate of Incorporation
        </h1>

        {/* Image with black border */}
        <div className="inline-block border-1 border-black">
          <Image
            src="/images/certificate1.jpg"  // public folder path
            alt="Certificate"
            width={500}                     // image width
            height={900}                    // image height
            className="mx-auto block"
          />
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Pan Card
        </h1>
        <Image
          src="/images/pan.jpeg"  // public folder path
          alt="pan-card"
          width={500}                     // image width
          height={900}                    // image height
          className="mx-auto block"
        />

      </div>
      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20 mb-6">
          GST Certificate
        </h1>

        {/* Image with black border */}
        <div className="inline-block border-1 border-black">
          <Image
            src="/images/gst.png"  // public folder path
            alt="GST-Certificate"
            width={500}                     // image width
            height={900}                    // image height
            className="mx-auto block"
          />
        </div>
      </div>

    </main>
  );
}
