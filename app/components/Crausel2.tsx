import React from 'react'

export const Crausel2 = () => {
  return (
    <div>

           {/* Our Success */}
      <section className="relative py-20 md:py-32 bg-white">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12 px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            What Our Clients Say About Our Development Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover the experiences of our clients that inspire
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-4 md:px-6">
          <div className="flex animate-marquee gap-4 md:gap-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 md:w-[400px] bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6"
              >
                {/* Testimonial */}
                <p className="mb-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="text-xl md:text-2xl font-bold">“</span>I had
                  the pleasure of working with 2 Digit Innovations for a
                  React-Native development project, and I must say that his
                  performance was exceptional. His skills in React-Native
                  development were outstanding, and he demonstrated a strong
                  understanding of the principles and best practices of mobile
                  application development.{" "}
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-bold text-sm md:text-lg">Jayen Ashar</p>
                    <div className="flex gap-3 md:gap-4 mt-1">
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/assests/client.jpg"
                    alt="Client"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate cards for seamless loop */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 w-72 sm:w-80 md:w-[400px] bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6"
              >
                <p className="mb-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  <span className="text-xl md:text-2xl font-bold">“</span>
                  The testimonial will go here. The testimonial will go here.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-bold text-sm md:text-lg">Client Name</p>
                    <div className="flex gap-3 md:gap-4 mt-1">
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm md:text-base">22</p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Number Metrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/assests/client.jpg"
                    alt="Client"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
