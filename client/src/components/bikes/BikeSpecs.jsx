import { Icon } from "@iconify/react";
import React, { useState } from "react";

const BikeSpecs = ({ data }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0); // State to track selected variant
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const variants = data?.attributes?.variants?.data || [];
  const selectedVariant = variants[selectedVariantIndex]?.attributes;

  if (!selectedVariant) {
    return (
      <div className="text-xl font-semibold p-5 pl-0">
        No variant data available
      </div>
    );
  }

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Select a variant and close modal
  const handleVariantSelect = (index) => {
    setSelectedVariantIndex(index);
    closeModal();
  };

  return (
    <div className="w-full flex gap-5">
      <div className="bg-white rounded-lg w-[70%] overflow-hidden">
        {/* Modal for variant selection */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-[90%] max-w-md">
              <h2 className="text-lg font-bold mb-4">Select Variant</h2>
              <ul className="space-y-2">
                {variants.map((variant, index) => (
                  <li
                    key={index}
                    onClick={() => handleVariantSelect(index)}
                    className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
                  >
                    {variant.attributes?.name}
                  </li>
                ))}
              </ul>
              <button
                onClick={closeModal}
                className="mt-4 text-blue-500 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="text-lg font-bold mb-4 w-full p-5 bg-bg_dark">
          <p>Specs & Features</p>
          <div className="text-base font-medium flex items-center">
            {/* On click of the variant name, open modal */}
            Variant:{" "}
            <span
              onClick={openModal}
              className="cursor-pointer text-base text-[#65A2EC] ml-2"
            >
              {selectedVariant?.name}
            </span>
            <Icon
              icon="tdesign:edit"
              width="1em"
              height="1em"
              className="text-[#65A2EC] ml-1 -mt-1"
            />
          </div>
        </div>

        <div className="w-full p-5">
          <div className="mb-6">
            <div className="text-md font-semibold mb-2">Performance</div>
            <div className="grid grid-cols-2 gap-y-2">
              <div>Displacement</div>
              <div>{selectedVariant.displacement || "N/A"}</div>

              <div>Max Power</div>
              <div>{selectedVariant.max_power || "N/A"}</div>

              <div>Max Torque</div>
              <div>{selectedVariant.max_torque || "N/A"}</div>

              <div>Mileage - ARAI</div>
              <div>{selectedVariant.mileage || "-"}</div>
            </div>
            <a href="#" className="text-blue-500 text-sm mt-2 block">
              View More
            </a>
          </div>

          <div className="mb-6">
            <div className="text-md font-semibold mb-2">
              Break, Wheels & Suspension
            </div>
            <div className="grid grid-cols-2 gap-y-2">
              <div>Front Suspension</div>
              <div>{selectedVariant.front_suspension || "N/A"}</div>

              <div>Rear Suspension</div>
              <div>{selectedVariant.rear_suspension || "N/A"}</div>

              <div>Braking System</div>
              <div>{selectedVariant.braking_system || "N/A"}</div>

              <div>Front Brake Type</div>
              <div>{selectedVariant.front_brake || "N/A"}</div>
            </div>
            <a href="#" className="text-blue-500 text-sm mt-2 block">
              View More
            </a>
          </div>

          <div className="mb-6">
            <div className="text-md font-semibold mb-2">
              Dimensions & Chassis
            </div>
            <div className="grid grid-cols-2 gap-y-2">
              <div>Kerb Weight</div>
              <div>{selectedVariant.kerb_weight || "N/A"}</div>

              <div>Seat Height</div>
              <div>{selectedVariant.seat_height || "N/A"}</div>

              <div>Ground Clearance</div>
              <div>{selectedVariant.ground_clearance || "N/A"}</div>

              <div>Overall Length</div>
              <div>{selectedVariant.length || "-"}</div>
            </div>
            <a href="#" className="text-blue-500 text-sm mt-2 block">
              View More
            </a>
          </div>

          <div>
            <div className="text-md font-semibold mb-2">Features</div>
            <div className="grid grid-cols-2 gap-y-2">
              <div>Odometer</div>
              <div>{selectedVariant.odometer || "N/A"}</div>

              <div>Speedometer</div>
              <div>{selectedVariant.speedometer || "N/A"}</div>

              <div>Fuel Gauge</div>
              <div>{selectedVariant.fuel_gauge || "N/A"}</div>

              <div>Digital Fuel Gauge</div>
              <div>{selectedVariant.digital_fuel_gauge || "N/A"}</div>
            </div>
            <a href="#" className="text-blue-500 text-sm mt-2 block">
              View More
            </a>
          </div>
        </div>
      </div>
      <div className="bg-bg_dark w-[30%] rounded-lg h-max p-5">
        <h2 className="text-lg font-semibold mb-4">
          About {data?.attributes?.model_name}
        </h2>
        <div>
          {data?.attributes?.about?.map((parra, id) => {
            return (
              <p key={id} className="text-text_para text-base">
                {parra?.children[0]?.text}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BikeSpecs;
