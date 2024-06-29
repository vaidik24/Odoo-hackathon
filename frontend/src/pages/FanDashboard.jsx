import React from "react";
import Navbar from "../components/Navbar";

const FanDashboard = ({ user }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="flex items-center mb-4">
              <img
                src={`https://api.dicebear.com/6.x/initials/svg?seed=Vaidik`}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">Vaidik</p>
                <p className="text-gray-600">@Vaidik24</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              Edit Profile
            </button>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <ul className="space-y-4">
              {/* Replace with actual event data */}
              {[1, 2, 3].map((event) => (
                <li key={event} className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-800 font-medium px-3 py-1 rounded-md mr-3">
                    MAY {10 + event}
                  </div>
                  <div>
                    <p className="font-medium">Event Name {event}</p>
                    <p className="text-sm text-gray-600">Venue {event}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              View All Events
            </button>
          </div>

          {/* Favorite Musicians Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Favorite Musicians</h2>
            <ul className="grid grid-cols-3 gap-4">
              {/* Replace with actual musician data */}
              {[1, 2, 3, 4, 5, 6].map((musician) => (
                <li key={musician} className="text-center">
                  <img
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=musician${musician}`}
                    alt={`Musician ${musician}`}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Musician {musician}</p>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              Discover More
            </button>
          </div>
        </div>

        {/* Purchased Tickets Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Purchased Tickets</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Venue</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Replace with actual ticket data */}
                {[1, 2, 3].map((ticket) => (
                  <tr key={ticket} className="border-b">
                    <td className="p-3">Concert {ticket}</td>
                    <td className="p-3">May {15 + ticket}, 2024</td>
                    <td className="p-3">Venue {ticket}</td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default FanDashboard;