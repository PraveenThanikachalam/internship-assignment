import Navbar from "./components/Navbar";
import { IoIosAddCircle } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BsCalendarCheckFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-5">
      <Navbar />
      <main className="max-w-4xl bg-white shadow-md rounded-lg mx-auto py-2 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-x-5 justify-center">
          <IoIosAddCircle className="w-10 text-[#0096C8] h-10" />
          <h1 className="text-3xl text-black font-bold text-center  mb-8">
            Add Your Listing
          </h1>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {[
            {
              title: "People",
              description:
                "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
              icon: <MdGroups className="w-10 h-10" />,
              color:
                "border-[#8064A2] border-2 text-black hover:bg-[#8064A2] hover:text-white",
              iconColor: "text-[#8064A2] group-hover:text-white",
            },
            {
              title: "Place",
              description:
                "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
              icon: <FaMapMarkerAlt className="w-8 h-8" />,
              color:
                "border-[#77933C] border-2 text-black hover:bg-[#77933C] hover:text-white",
              iconColor: "text-[#77933C] group-hover:text-white",
            },
            {
              title: "Product",
              description:
                "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
              icon: <BsCartFill className="w-8 h-8" />,
              color:
                "border-[#C0504D] border-2 text-black hover:bg-[#C0504D] hover:text-white",
              iconColor: "text-[#C0504D] group-hover:text-white",
            },
            {
              title: "Program",
              description:
                "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
              icon: <BsCalendarCheckFill className="w-8 h-8" />,
              color:
                "border-[#0096C8] border-2 text-black hover:bg-[#0096C8] hover:text-white",
              iconColor: "text-[#0096C8] group-hover:text-white",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-lg shadow-sm group transition-colors duration-300`}
            >
              <div className="flex items-center mb-6 gap-x-2">
                <div
                  className={`${item.iconColor} transition-colors duration-300`}
                >
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>

              <p className="text-sm font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
