import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomization } from '../contexts/CustomizationContext';
import NavBar from '../components/navBar';
// Recharts imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts';

// Data for the BarChart
const dataBar = [
  { name: 'Tickets', Resolved: 1254, Active: 327 },
];

// Data for the LineChart
const dataLine = [
  { day: 'Mon', tickets: 40 },
  { day: 'Tue', tickets: 75 },
  { day: 'Wed', tickets: 60 },
  { day: 'Thu', tickets: 90 },
  { day: 'Fri', tickets: 120 },
];

// Colors for each bar in the BarChart
const barColors = {
  Resolved: '#3b82f6', // Tailwind "blue-500"
  Active: '#06b6d4',   // Tailwind "cyan-500"
};

const WelcomePage = () => {
  const { customization } = useCustomization();
  const navigate = useNavigate();

  // Navigation handlers
  const redirectToSignup = () => navigate('/register');
  const redirectToLogin = () => navigate('/login');

  return (
    <div
    style={{
      backgroundColor: customization.backgroundColor || '#ffffff',
      color: customization.fontColor || 'inherit',
      fontSize: `${customization.fontSize || 16}px`,
      minHeight: '100vh',
    }}
    className="mt-[80px]"  // Try increasing to 100px if needed
  >
  
    {/* Render your separate NavBar at the top */}
    <NavBar />

      {/* HERO SECTION */}
      <section id="home" className="bg-blue-100 px-4 sm:px-10">
        <div className="max-w-7xl w-full mx-auto py-16 grid lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="md:text-5xl text-4xl font-bold mb-6 leading-snug">
              Streamline Your Support Process with ECS Help Desk
            </h1>
            <p className="text-base leading-relaxed">
              Unlock the full potential of your support operations with advanced solutions 
              tailored for efficient ticketing, communication, and knowledge sharing.
            </p>
            <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
              <button
                className="bg-black hover:bg-gray-800 text-white font-semibold rounded-md px-5 py-4 flex items-center"
                onClick={redirectToSignup}
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-current ml-2"
                  viewBox="0 0 492.004 492.004"
                >
                  <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 
                    0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 
                    19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 
                    207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 
                    27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 
                    18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 
                    16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 
                    0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 
                    7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
                </svg>
              </button>
              <button
                className="border-2 border-gray-700 text-gray-700 hover:border- hover:text-white font-semibold rounded-md px-5 py-3"
                onClick={redirectToLogin}
              >
                Already have an account?
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="max-lg:mt-12 h-full">
            <img
              src="https://readymadeui.com/analtsis.webp"
              alt="Help Desk Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
<section className="px-4 sm:px-10 py-16 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading + Subheading */}
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="md:text-4xl text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-gray-600">
        Empower your organization with a robust help desk solution. 
        Below are four key services designed to streamline support 
        and enhance user satisfaction.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* 1. Ticket Management */}
      <div className="
  text-center
  bg-white
  shadow-md
  rounded-xl
  p-6
  transform           /* enable transforms */
  transition-transform /* smoothly animate transform */
  duration-200        /* 200ms animation */
  hover:scale-105     /* slightly enlarge on hover */
  hover:shadow-lg     /* optional extra shadow on hover */
">        <div className="flex justify-center mb-4">
          {/* Example Icon (replace as desired) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l.354-.354a3 3 0 014.242 0l.354.354m3 4.5h-12M5.25
               19.5h13.5m-13.5 0a2.25 2.25 0 01-2.25-2.25V9.75a2.25
               2.25 0 012.25-2.25h13.5a2.25
               2.25 0 012.25 2.25v7.5a2.25 
               2.25 0 01-2.25 2.25m-13.5 
               0v1.5a2.25 2.25 0 002.25 2.25h9a2.25
               2.25 0 002.25-2.25v-1.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3">Ticket Management</h3>
        <p className="text-sm text-gray-600">
          Efficiently track, categorize, and resolve all user issues 
          with an intuitive ticketing system.
        </p>
      </div>

      {/* 2. Knowledge Base */}
      <div className="
  text-center
  bg-white
  shadow-md
  rounded-xl
  p-6
  transform           /* enable transforms */
  transition-transform /* smoothly animate transform */
  duration-200        /* 200ms animation */
  hover:scale-105     /* slightly enlarge on hover */
  hover:shadow-lg     /* optional extra shadow on hover */
">        <div className="flex justify-center mb-4">
          {/* Example Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 7.5h.008v.008h-.008V7.5zm0 
               3.75h.008v.008h-.008v-.008zm-3.75 1.5h3.75m-3.75
               3h6.75m4.5-7.5l1.604-1.277a.75.75
               0 00.271-.585V5.04a.75.75
               0 00-.3-.6l-1.2-.9a.75.75
               0 00-.45-.15H5.25a.75.75 
               0 00-.75.75v13.5a.75.75 
               0 00.75.75H12"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3">Knowledge Base</h3>
        <p className="text-sm text-gray-600">
          Centralize FAQs and documentation, enabling users to solve common 
          issues on their own.
        </p>
      </div>

      {/* 3. Real-Time Communication */}
      <div className="
  text-center
  bg-white
  shadow-md
  rounded-xl
  p-6
  transform           /* enable transforms */
  transition-transform /* smoothly animate transform */
  duration-200        /* 200ms animation */
  hover:scale-105     /* slightly enlarge on hover */
  hover:shadow-lg     /* optional extra shadow on hover */
">        <div className="flex justify-center mb-4">
          {/* Example Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 9h9m-9 3h9m-4.5
               3h3.75m3 3.75v-1.82a2.25 2.25
               0 00-.659-1.591l-.912-.912a2.25 
               2.25 0 00-1.591-.659H6.75a2.25 
               2.25 0 00-2.25 2.25v2.691"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3">Real-Time Communication</h3>
        <p className="text-sm text-gray-600">
          Connect with customers via live chat and instant alerts for faster 
          resolution times.
        </p>
      </div>

      {/* 4. Reporting & Analytics */}
      <div className="
  text-center
  bg-white
  shadow-md
  rounded-xl
  p-6
  transform           /* enable transforms */
  transition-transform /* smoothly animate transform */
  duration-200        /* 200ms animation */
  hover:scale-105     /* slightly enlarge on hover */
  hover:shadow-lg     /* optional extra shadow on hover */
">        <div className="flex justify-center mb-4">
          {/* Example Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v3m0 12v3m3 
               0h12m3 0v-3m0-12V3M3 9h3m12 
               0h3M9 3h6m-4.5 6v3m0 3v3"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3">Reporting & Analytics</h3>
        <p className="text-sm text-gray-600">
          Gain insights into performance with advanced reporting tools 
          and data-driven analytics.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* STATISTICS SECTION (TWO CHARTS) */}
      <section className="px-4 sm:px-10 py-16 bg-white" id="statistics">
        <div className="max-w-7xl mx-auto">
          <h2 className="md:text-3xl text-2xl font-semibold mb-6">Website Statistics</h2>
          <p className="md:text-l text-l mb-6">
            Get insights into your ticket activity and resolutions at a glance.
          </p>
        

          {/* Two charts side-by-side (Tailwind grid) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: BAR CHART */}
            <div className="overflow-x-auto">
              <BarChart width={500} height={300} data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {Object.keys(barColors).map((key) => (
                  <Bar key={key} dataKey={key} fill={barColors[key]} />
                ))}
              </BarChart>
            </div>

            {/* RIGHT: LINE CHART */}
            <div className="overflow-x-auto">
              <LineChart width={500} height={300} data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="tickets"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-100 px-4 sm:px-10 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">
            Ready to Transform Your Support System?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join us in providing efficient support, enhancing communication, 
            and delivering exceptional user experiences with ECS Help Desk.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md"
            onClick={redirectToSignup}
          >
            Sign Up Now!
          </button>
        </div>
      </section>

      {/* OPTIONAL FEATURES SECTION */}
      <section className="px-4 sm:px-10 py-16" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="md:text-3xl text-2xl font-bold mb-6">Why ECS Help Desk?</h2>
          <p className="mb-6">
            Powerful features designed to streamline your workflow and put your clients first.
          </p>
          {/* Example feature cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Secure Ticketing</h3>
              <p className="text-sm text-gray-600">
                Keep user information and ticket data safe with robust security features.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Customizable Dashboard</h3>
              <p className="text-sm text-gray-600">
                Tailor your help desk appearance and workflows to match your organization's needs.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Instant Notifications</h3>
              <p className="text-sm text-gray-600">
                Stay updated on new or urgent tickets with real-time alerts and auto-reminders.
              </p>
            </div>
            {/* Add more cards if desired */}
          </div>
        </div>
      </section>
      <div class="px-4 sm:px-10 mt-28">
  <div class="max-w-7xl w-full mx-auto">

    <div class="grid md:grid-cols-3 gap-4">
      <div class="col-span-2">
        <p>
          Discover how ECS Help Desk has transformed support experiences 
          for teams of all sizes. Here’s what a few of our satisfied clients 
          have to share:
        </p>
      </div>
      <div class="flex space-x-4 items-end justify-end">
        <div
          class="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-[#333] inline" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52 
                 a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 
                 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 
                 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div
          class="bg-black w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52 
                 a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 
                 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 
                 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-10 mt-16">
      <div>
        <div class="flex items-center">
          <img src="https://readymadeui.com/team-1.webp" class="w-12 h-12 rounded-full" />
          <div class="ml-4">
            <h4 class="font-semibold">Alice Brown</h4>
            <p class="mt-1 text-xs text-gray-400">Founder of TechSage</p>
          </div>
        </div>
        <div class="mt-4">
          <p>
            “Using ECS Help Desk, we resolved tickets 60% faster. Our 
            customers love the quick turnaround, and our support agents 
            appreciate the intuitive interface!”
          </p>
        </div>
        <div class="flex space-x-2 mt-6">
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
        </div>
      </div>

      <div>
        <div class="flex items-center">
          <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full" />
          <div class="ml-4">
            <h4 class="font-semibold">Michael Green</h4>
            <p class="mt-1 text-xs text-gray-400">CEO at EverSupport</p>
          </div>
        </div>
        <div class="mt-4">
          <p>
            “Our team loves the real-time chat and alerts. ECS Help Desk 
            has been a game-changer—our response times have dropped 
            dramatically!”
          </p>
        </div>
        <div class="flex space-x-2 mt-6">
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
        </div>
      </div>

      <div>
        <div class="flex items-center">
          <img src="https://readymadeui.com/team-3.webp" class="w-12 h-12 rounded-full" />
          <div class="ml-4">
            <h4 class="font-semibold">Linda Wu</h4>
            <p class="mt-1 text-xs text-gray-400">CTO of BrightDesk</p>
          </div>
        </div>
        <div class="mt-4">
          <p>
            “ECS Help Desk’s analytics gave us critical insights to 
            improve our support workflow. Highly recommended for 
            growing teams!”
          </p>
        </div>
        <div class="flex space-x-2 mt-6">
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#facc15]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13"><path d="M7 0L9.4687 ... L7 0Z" /></svg>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* FOOTER */}
      <footer className="mt-12 bg-white">
        <div className="px-4 sm:px-10 pt-10 pb-6 max-w-7xl mx-auto">
          <div className="grid max-sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Column 1 */}
            <div>
              <img
                src="/enterprise_consultancy_services_logo.jpeg"
                
                className="w-40 mb-4"
              />
              <p className="mb-4 text-gray-600">
                ECS Help Desk is your trusted partner in delivering efficient, secure, 
                and user-friendly support services.
              </p>
            </div>

            {/* Footer Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#statistics" className="hover:text-blue-600">
                    Statistics
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Knowledge Base
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="hover:text-blue-600">
                    About ECS
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center text-gray-500 pb-6">
          © 2023 ECS Help Desk. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
