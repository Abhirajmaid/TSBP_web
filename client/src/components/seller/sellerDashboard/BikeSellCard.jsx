import { Icon } from "@iconify/react";
import { ConfirmationModal } from "@src/components/common";
import { Toast } from "@src/context/ToastContex";
import listingsAction from "@src/lib/actions/listings.action";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tag = ({ tag }) => {
  return (
    <p className="p-1 px-[6px] bg-[#E8E8E8] text-black rounded-lg ">{tag}</p>
  );
};

const BikeSellCard = ({ data }) => {
  const { success } = Toast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const deleteListingItem = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");
    listingsAction.deleteListing(token, data?.id).then();
    success("Listing removed successfully!");
    setIsModalOpen(false); // Close modal after successful deletion
    router.refresh();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-2 h-fit transition-all bg-white rounded-xl overflow-hidden border p-2">
      <div className="h-[55%] relative">
        <Image
          src={data?.attributes?.img?.data[0]?.attributes?.url}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="tsbp"
        />
        <div className="absolute top-2 right-2 flex gap-3 items-center">
          <Icon
            icon="material-symbols:edit-sharp"
            width={40}
            className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
          />
          <Link href={`/listings/${data?.attributes?.slug}/${data?.id}`}>
            <Icon
              icon="carbon:view-filled"
              width={40}
              className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
            />
          </Link>
          <Icon
            icon="material-symbols:delete-sharp"
            onClick={openModal} // Open modal on delete icon click
            width={40}
            className="p-2 bg-primary rounded-[100px] text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 pb-4">
        <span className="flex justify-between">
          <h2 className="font-bold text-base">{data?.attributes?.name}</h2>
          <p>{data?.attributes?.manufacturing_year}</p>
        </span>
        <span className="flex items-center gap-1">
          <Icon icon="ep:location" width={20} height={20} />
          <p>{data?.attributes?.city}</p>
        </span>
        <span className="flex items-center gap-3 text-[0.7vw]">
          <>
            <Tag tag={`${data?.attributes?.km_ridden} kms`} />
          </>
          <>
            <Tag tag={`${data?.attributes?.owner_name} Owner`} />
          </>
          <>
            <Tag tag="BS-6" />
          </>
        </span>
        <span className="flex justify-between text-[#666666] font-semibold text-[15px]">
          <p className="flex text-start flex-col">
            <span>EMI Option:</span> <span>₹{data?.attributes?.emi}</span>
          </p>
          <p className="flex text-end flex-col">
            <span>Expected Price:</span>{" "}
            <span>₹{data?.attributes?.expected_price}</span>
          </p>
        </span>
      </div>

      {/* Modal for confirming deletion */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={deleteListingItem}
      />
    </div>
  );
};

export default BikeSellCard;
