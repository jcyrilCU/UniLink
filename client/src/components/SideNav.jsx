import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SideNav() {
  const [clubValue, setClubValue] = useState({
    clubs: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setClubValue(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" sticky w-[235px] flex flex-col items-center justify-start gap-[24px] lg:hidden sm:hidden">
      <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
        {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[12px]">
          <img
            className="w-[29px] relative h-[23px] object-cover"
            alt=""
            src="/side-nav-bardivoptionsbuttonhomeicon@2x.png"
          />
          <h3 className="m-0 flex-1 relative text-base font-normal font-inter text-white text-left">
            <Link to="/" className=" text-inherit no-underline">
              Home
            </Link>
          </h3>
        </button> */}
        <Link
          to="/home"
          className=" text-inherit no-underline cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[12px]"
        >
          <img
            className="w-[29px] relative h-[23px] object-cover"
            alt=""
            src="/side-nav-bardivoptionsbuttonhomeicon@2x.png"
          />
          <h3 className="m-0 flex-1 relative text-base font-normal font-inter text-white text-left">
            Home
          </h3>
        </Link>
        <Link
          to="/profile"
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[16px] text-inherit no-underline"
        >
          <img
            className="w-[22.4px] relative h-[21.3px] object-cover"
            alt=""
            src="/side-nav-bardivoptionsbuttonprofileicon@2x.png"
          />

          <h3 className="m-0 flex-1 relative text-base font-normal font-inter text-white text-left">
            Profile
          </h3>
        </Link>
        <Link
          to="/announcements"
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[16px] text-inherit no-underline"
        >
          <img
            className="w-[22px] relative h-[19px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/side-nav-bardivoptionsbuttonannouncementsicon@2x.png"
          />
          <h3 className="m-0 flex-1 relative text-base font-normal font-inter text-white text-left">
            Announcements
          </h3>
        </Link>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[1.9px] shrink-0 object-contain"
        alt=""
        src="/side-nav-bardivider@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
        <div className="self-stretch flex flex-row items-end justify-between">
          <div className="flex-1 flex flex-row items-center justify-start gap-[15px]">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/side-nav-bardivclubsclubactionsbuttonclubsicon@2x.png"
            />
            <Link to="/clubs" className="relative text-inherit no-underline">
              <h2 className="m-0 flex-1 relative text-5xl font-normal font-inter text-white text-left">
                Clubs
              </h2>
            </Link>
          </div>
          <Link to="/clubs" className="relative text-inherit no-underline">
            See All
          </Link>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base text-gray-100 font-abeezee">
          <div className="self-stretch h-[23px] flex flex-col items-start justify-between">
            <button className="cursor-pointer [border:none] py-0 px-1 bg-[transparent] self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative text-xs font-abeezee text-gainsboro text-left">
                My Clubs
              </div>
            </button>
            <div className="w-20 relative box-border h-0.5 border-t-[2px] border-solid border-gray-300" />
          </div>
          {clubValue.clubs.slice(0, 5).map((club) => (
            <a
              key={club.clubid}
              href="#"
              className="self-stretch relative no-underline text-inherit"
            >
              {club.clubname}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
