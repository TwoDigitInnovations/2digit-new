"use client";

import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Refund() {
 

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      {/* NAVBAR WITH MOBILE MENU */}

      {/* Section On TERMS */}

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Return and Refund Policy
        </h1>
        <p className="text-4xl  text-[#000]   relative z-20">
          Last updated: March 24, 2024
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Thank you for shopping at 2digitinnovations. If, for any reason, You
          are not completely satisfied with a purchase We invite You to review
          our policy on refunds and returns. The following terms are applicable
          for any products that You purchased with Us.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Interpretation and Definitions
        </h1>
        <p className="text-4xl  text-[#000]   relative z-20">Interpretation</p>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight relative z-20">
          Definitions
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4">
          For the purposes of this Return and Refund Policy:
        </p>

        <ul className="text-black text-base md:text-lg leading-relaxed list-disc list-inside mb-4 text-left max-w-4xl mx-auto">
          <li>
            <strong>Company</strong> refers to 2Digit Innovations Pvt Ltd, 236,
            Banjariya Purvi.
          </li>
          <li>
            <strong>Goods</strong> refers to the items offered for sale on our
            website.
          </li>
          <li>
            <strong>Orders</strong> means a request by you to purchase goods
            from us.
          </li>
          <li>
            <strong>Service</strong> refers to the website operated by the
            Company.
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the
            Service, or the company or other legal entity on behalf of which
            such individual is accessing or using the Service.
          </li>
        </ul>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight relative z-20">
          Your Order Cancellation Rights
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4">
          You are entitled to cancel Your Order within 14 days without giving
          any reason for doing so. The deadline for cancelling an Order is 14
          days from the date on which You received the Goods or on which a third
          party you have appointed, who is not the carrier, takes possession of
          the product delivered. In order to exercise Your right of
          cancellation, You must inform Us of your decision by means of a clear
          statement. You can inform us of your decision by:
        </p>

        <ul className="text-black text-base md:text-lg leading-relaxed list-disc list-inside mb-4 text-left max-w-4xl mx-auto">
          <li>By email: 2digitinnovations@gmail.com</li>
        </ul>
        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4">
          We will reimburse You no later than 14 days from the day on which We
          receive the returned Goods. We will use the same means of payment as
          You used for the Order, and You will not incur any fees for such
          reimbursement.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight relative z-20">
          Conditions for Returns
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4">
          In order for the Goods to be eligible for a return, please make sure
          that:
        </p>

        <ul className="text-black text-base md:text-lg leading-relaxed list-disc list-inside mb-6 text-left max-w-4xl mx-auto">
          <li>The Goods were purchased within the last 14 days.</li>
          <li>
            The Goods are in their original packaging and in the same condition
            as received.
          </li>
        </ul>

        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4">
          The following Goods cannot be returned:
        </p>

        <ul className="text-black text-base md:text-lg leading-relaxed list-disc list-inside mb-6 text-left max-w-4xl mx-auto">
          <li>Goods made to Your specifications or clearly personalized.</li>
          <li>
            Goods which by their nature are not suitable for return, deteriorate
            rapidly, or have passed their expiry date.
          </li>
          <li>
            Goods that are not suitable for return due to health protection or
            hygiene reasons and were unsealed after delivery.
          </li>
          <li>
            Goods which, after delivery, are inseparably mixed with other items.
          </li>
        </ul>

        <p className="text-gray-600 text-base md:text-lg mb-6 mt-4 max-w-4xl mx-auto">
          We will reimburse You no later than 14 days from the day on which We
          receive the returned Goods. The reimbursement will be processed using
          the same payment method used for the Order, and You will not incur any
          fees for such reimbursement.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Returning Goods
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6">
          You are responsible for the cost and risk of returning the Goods to
          Us. You should send the Goods at the following address: Hyde Park
          Crown First Floor, FF-14-21 Plot No GH-03 Sector-78, Noida, Uttar
          Pradesh 201306 We cannot be held responsible for Goods damaged or lost
          in return shipment. Therefore, We recommend an insured and trackable
          mail service. We are unable to issue a refund without actual receipt
          of the Goods or proof of received return delivery.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Gifts
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6">
          If the Goods were marked as a gift when purchased and then shipped
          directly to you, You'll receive a gift credit for the value of your
          return. Once the returned product is received, a gift certificate will
          be mailed to You. If the Goods weren't marked as a gift when
          purchased, or the gift giver had the Order shipped to themselves to
          give it to You later, We will send the refund to the gift giver.
        </p>
      </div>

      <div className="text-center mt-10 md:mt-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl text-[#000] font-bold leading-tight relative z-20">
          Contact Us
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6">
          If you have any questions about our Returns and Refunds Policy, please
          contact us:
        </p>

        <ul className="text-black text-base md:text-lg leading-relaxed list-disc list-inside mb-6 text-left max-w-4xl mx-auto">
          <li>By email: 2digitinnovations@gmail.com</li>
        </ul>
      </div>

      {/* Footer */}

      <Footer />
    </main>
  );
}
