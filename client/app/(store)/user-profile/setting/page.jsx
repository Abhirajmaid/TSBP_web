"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import userAction from "@src/lib/actions/user.action";
import { Toast } from "@src/context/ToastContex";
import { Button } from "@src/components/ui/button";
import { getCookie } from "cookies-next";
import { ConfirmationModal } from "@src/components/common";

const EditUserSettingsPage = () => {
  const router = useRouter();
  const { warn, success } = Toast();
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile_number: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");
    userAction
      .fetchLoggedInUser(token)
      .then((resp) => {
        setUser({ ...resp.data });
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the confirmation modal
  };

  const confirmSubmit = () => {
    const token = JSON.parse(sessionStorage.getItem("jwt")) || getCookie("jwt");

    userAction
      .updateUserDetails(token, user)
      .then(() => {
        success("Profile updated successfully!");
        router.push("/user-profile");
      })
      .catch((error) => {
        console.log(error);
        warn(error);
      });

    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal on cancel
  };

  const onForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto md:p-6 p-2">
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_light"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_light"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile_number"
              value={user.mobile_number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_light"
              required
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>

        <div className="mt-4 flex items-center gap-5">
          <button className="mt-4 text-blue-500 hover:underline">
            Change password
          </button>
          <button
            onClick={onForgotPassword}
            className="mt-4 text-blue-500 hover:underline"
          >
            Forgot your password?
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmSubmit}
        actionType="save"
      />
    </div>
  );
};

export default EditUserSettingsPage;
