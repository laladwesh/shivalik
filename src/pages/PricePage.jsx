import React from "react";
import { useOrder } from "../context/order";
import AccordionWithOptions from "../components/Accordion";
import { useLocation, useNavigate } from "react-router-dom";

const PricePage = () => {
  const order = useOrder();
  const navigate = useNavigate();
  const location = useLocation();
  const steps = [
    { label: "Requirements", path: "/price" },
    { label: "Address", path: "" },
    { label: "Payment", path: "" },
    { label: "Confirmation", path: "" },
  ];
  return (
    <div className=" flex px-4 md:px-16 lg:px-28 gap-x-8 bg-gray-100 font-montserrat">
      <div className="bg-white  shadow-xl w-full rounded-3xl px-6 md:px-12 lg:px-16 py-16">
      <div className="px-3">
      <div className="flex items-center space-x-2">
      {steps.map((step, index) => (
        <div key={step.path} className="flex items-center">
          {/* Link */}
          <span
            className={`text-base font-medium font-['Montserrat'] leading-none ${
              location.pathname === step.path ? "text-[#5230b2]" : "text-[#3d3d3d]"
            }`}
          >
            <a href={step.path} className="">
              {step.label}
            </a>
          </span>

          {/* ">" icon except for the last item */}
          {index < steps.length - 1 && (
            <span className="mx-2 text-[#3d3d3d]">{">"}</span>
          )}
        </div>
      ))}
    </div>
      <div class="text-[#1a0066] text-5xl font-bold font-['Montserrat'] my-10 leading-10">Book printing</div>
      <div class="text-[#3d3d3d] text-base font-normal font-['Montserrat'] leading-snug">Choose options according to your requirements</div>
      </div>
        <div className="w-full flex-grow">
          <AccordionWithOptions
            is={true}
            title="Print Colour"
            category="printcolour"
          />
          <AccordionWithOptions
            is={false}
            title="Paper Size"
            category="papersize"
          />
          <AccordionWithOptions is={false} title="GSM" category="gsm" />
          <AccordionWithOptions
            is={false}
            title="Binding Type"
            category="bindingtype"
          />
        </div>
      </div>
      <div className="w-3/6 space-y-6 rounded-3xl md:px-12 lg:px-0">
        <div className=" shadow-xl rounded-3xl px-4 md:px-12 lg:px-11 py-8 bg-white w-full max-w-sm p-4 shadow-3xl flex-grow">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <ul className="space-y-2">
            {Object.entries(order.order).map(([key, value]) => (
              <li className="flex justify-between" key={key}>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span>${value.price}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between font-semibold">
            <span>TOTAL</span>
            <span>
              $
              {Object.values(order.order).reduce(
                (total, item) => total + item.price,
                0
              )}
            </span>
          </div>
        </div>
        <button
              type="button"
              onClick={() => navigate("/address")}
              className="w-full max-w-sm px-6 py-6 bg-primary text-white text-lg font-bold rounded-2xl hover:bg-purple-800 transition mt-auto"
            >
              Place Order
            </button>
      </div>
    </div>
  );
};

export default PricePage;
