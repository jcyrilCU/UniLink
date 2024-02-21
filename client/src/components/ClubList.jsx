import { useState, useEffect } from "react";

export default function ClubList() {
  const [postValue, setPostValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/clubs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPostValue(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if(postValue){
      console.log(postValue.clubArr); 
    }
    fetchData();
  }, []);
  return ( 

      <div className="w-[720px] box-border flex flex-col items-center justify-start py-0 px-5 gap-[30px_0px] border-r-[1px] border-solid border-darkslategray-100 border-l-[1px] lg:flex-col lg:gap-[30px_0px] md:w-auto md:[align-self:unset] md:flex-col sm:flex-1 sm:pl-0 sm:pr-0 sm:box-border">
        {postValue?.clubArr.map((club)=>(
          <div key={club.id} className="self-stretch flex flex-col items-center justify-start gap-[20px_0px] lg:w-auto lg:[align-self:unset] p-4 box-content rounded-md border-[1px] border-solid border-darkslategray-100">
          <img
            className="w-[400px] relative rounded-full h-[400px] object-cover"
            alt=""
            src={club.avatar}
          />
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-[15px_0px]">
              <div className="relative text-3xl font-medium">{club.clubName}</div>
              <div className="relative ">{club.postCount} Posts</div>
            </div>
            <button className="cursor-pointer [border:none] py-[5px] px-[50px] bg-mediumslateblue w-40 rounded-7xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border sm:py-1 sm:px-3 sm:box-border">
              <div className="relative text-9xl tracking-[0.09em] font-inter text-black text-left sm:text-base">
                Join
              </div>
            </button>
          </div>
        </div>
        ))}
      </div>
  );
}
