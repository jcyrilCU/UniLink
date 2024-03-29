import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ClubInfoBar() {
  let { id } = useParams();
  const [clubValue, setClubValue] = useState({
    clubs: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/club/${id}`);
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
    <div className="flex flex-col items-start justify-start gap-[15px_0px] text-13xl lg:hidden">
      <div className="w-[260px] flex flex-col items-start justify-start py-0 px-[18px] box-border">
        <h2 className="m-0 w-[222px] relative text-inherit font-normal font-inherit inline-block">
          Club
        </h2>
        <div className="flex flex-row items-end justify-center gap-[0px_12px] text-sm text-mediumslateblue">
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src="/club-info-card-divclubcarddivclubheadingdivmembersicon@2x.png"
          />
          <div className="relative">No. of Members</div>
        </div>
      </div>
      <img
        className="self-stretch relative rounded-111xl max-w-full overflow-hidden h-[260px] shrink-0 object-cover"
        alt=""
        src="/club-carddivcontainerimage@2x.png"
      />
      <div className="w-[260px] flex flex-col items-center justify-center py-0 px-[13px] box-border gap-[15px_0px] text-sm">
        <div className="w-[233px] relative inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
        <button className="cursor-pointer py-[9px] px-14 bg-[transparent] rounded-full overflow-hidden flex flex-row items-center justify-center border-[1.7px] border-solid border-red-600">
          <div className="relative text-sm font-inter text-red text-left text-slate-200">
            Leave Club
          </div>
        </button>
      </div>
      <div className="w-[260px] flex flex-col items-start justify-start py-0 px-[30px] box-border gap-[10px_0px] text-base">
        <div className="relative">Clubs Guidelines:</div>
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li className="mb-0">Lorem ipsum</li>
          <li className="mb-0">Lorem ipsum</li>
          <li className="mb-0">Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </div>
  );
}
