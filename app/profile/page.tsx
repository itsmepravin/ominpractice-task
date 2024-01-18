"use client";

import { useState } from "react";
import MessagesIcon from "../_components/MessagesIcon";

import Posts from "../_components/Posts";
import Followers from "../_components/Followers";
import Following from "../_components/Following";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const handleActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="p-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-24">
          <img
            className="object-cover w-20 h-20 rounded-full"
            src="https://i.ibb.co/xCvndYT/Screenshot-from-2024-01-05-12-39-14.png"
          />
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-semibold text-gray-600">
              Arjun Reddy
            </h2>
            <div className="flex flex-row gap-6 text-gray-400">
              <p>Posts: 511</p>
              <p>Followers: 511</p>
              <p>Following: 511</p>
            </div>
          </div>
        </div>

        {/* Below Navigation */}
        <div className="bg-white mt-12 flex w-[500px] items-center justify-center">
          <nav className="flex flex-col sm:flex-row w-full">
            <a
              className={`cursor-pointer flex gap-4 flex-row w-full py-4 px-6 text-gray-400 focus:outline-none border-t-2 font-medium hover:text-gray-700 ${
                activeTab === "posts" ? "border-gray-400" : "border-gray-200"
              }`}
              onClick={() => handleActiveTab("posts")}
            >
              <MessagesIcon currentlyActive={false} />
              Posts
            </a>
            <a
              className={`cursor-pointer flex gap-4 w-full py-4 px-6 text-gray-400 focus:outline-none border-t-2 font-medium hover:text-gray-700 ${
                activeTab === "followers"
                  ? "border-gray-400"
                  : "border-gray-200"
              }`}
              onClick={() => handleActiveTab("followers")}
            >
              <MessagesIcon currentlyActive={false} />
              Followers
            </a>
            <a
              className={`cursor-pointer flex gap-4 w-full py-4 px-6 text-gray-400 focus:outline-none border-t-2 font-medium hover:text-gray-700 ${
                activeTab === "following"
                  ? "border-gray-400"
                  : "border-gray-200"
              }`}
              onClick={() => handleActiveTab("following")}
            >
              <MessagesIcon currentlyActive={false} />
              Following
            </a>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "posts" ? (
          <Posts />
        ) : activeTab === "followers" ? (
          <Followers />
        ) : (
          <Following />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
