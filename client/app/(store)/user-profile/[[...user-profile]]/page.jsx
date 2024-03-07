"use client";

import { UserProfile } from "@clerk/nextjs";
import { Icon } from "@iconify/react";

const CustomPage = () => {
  return (
    <div>
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
  );
};

const UserProfilePage = () => (
  <div className="w-full min-h-screen flex justify-center items-center py-[150px] -mb-[60px] bg-bg_dark">
    <UserProfile path="/user-profile" routing="path">
      <UserProfile.Page label="account" />
      <UserProfile.Link
        label="Sell Your Bike"
        url="/seller"
        labelIcon={<Icon icon="ri:motorbike-fill" width={18} />}
      />
      <UserProfile.Page label="security" />
      <UserProfile.Page
        label="Help Center"
        url="help-center"
        labelIcon={<Icon icon="clarity:help-solid" width={17} />}
      >
        <CustomPage />
      </UserProfile.Page>
    </UserProfile>
  </div>
);

export default UserProfilePage;
