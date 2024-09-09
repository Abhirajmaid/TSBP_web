import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, actionType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">
          {actionType == "save"
            ? "Are you sure you want to save changes?"
            : "Are you sure you want to delete this listing?"}
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 ${
              actionType == "save" ? "bg-primary" : "bg-red-600"
            }  text-white rounded-md`}
          >
            {actionType == "save" ? "Save" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
