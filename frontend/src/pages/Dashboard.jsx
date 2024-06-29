import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'scheduleEvent':
        return <ScheduleEventForm />;
      case 'startEvent':
        return <UpcomingEvents />;
      default:
        return <DashboardStats />;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex h-screen bg-gray-100">
      {/* Left sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-6 fixed h-full">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => setActiveView('startEvent')}
                className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition duration-300"
              >
                Start Live Event
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('scheduleEvent')}
                className="w-full bg-green-500 hover:bg-green-600 py-2 px-4 rounded transition duration-300"
              >
                Schedule Event
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('dashboard')}
                className="w-full bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button className="w-full bg-red-500 hover:bg-red-600 py-2 px-4 rounded mt-8 transition duration-300">
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="w-4/5 ml-[20%] p-8">
        {renderContent()}
      </div>
    </div>
    </>
  );
};

const DashboardStats = () => (
  <>
    <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Total Events</h3>
        <p className="text-3xl font-bold">125</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Total Music</h3>
        <p className="text-3xl font-bold">500</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Total Followers</h3>
        <p className="text-3xl font-bold">10,000</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Rating</h3>
        <p className="text-3xl font-bold">4.8/5</p>
      </div>
    </div>
  </>
);

const ScheduleEventForm = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Schedule New Event</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3"></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option>Rock</option>
          <option>Pop</option>
          <option>Jazz</option>
          <option>Classical</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ticket Price</label>
        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Schedule Event
      </button>
    </form>
  </div>
);

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: "Rock Concert", date: "2023-07-15", genre: "Rock", ticketPrice: 50 },
    { id: 2, title: "Jazz Night", date: "2023-07-20", genre: "Jazz", ticketPrice: 35 },
    { id: 3, title: "Classical Symphony", date: "2023-07-25", genre: "Classical", ticketPrice: 75 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">Date: {event.date}</p>
            <p className="text-gray-600 mb-2">Genre: {event.genre}</p>
            <p className="text-gray-600 mb-4">Ticket Price: ${event.ticketPrice}</p>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Start Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;