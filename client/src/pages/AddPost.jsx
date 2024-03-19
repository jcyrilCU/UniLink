import { useState } from "react";
import ImageUploading from "react-images-uploading";
export default function AddPost() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="w-[720px] flex flex-row items-start justify-start lg:flex-1 sm:w-auto sm:[align-self:unset]">
      <div className=" rounded-md flex-1 flex flex-col items-center justify-start py-0 px-5 border-solid border-darkslategray-100 border-[1px] lg:flex-col lg:gap-[30px] md:w-auto md:[align-self:unset] md:flex-col sm:flex-1 sm:pl-0 sm:pr-0 sm:box-border">
        <form>
          <div className="self-stretch rounded-lg h-[478.5px] flex flex-col items-center justify-between sm:items-center sm:justify-center">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="relative font-light sm:text-base mt-2 text-3xl">
                Title:
              </div>
              <input
                className="[outline:none] bg-gray-300 w-[600px] relative rounded-lg box-border h-10 border-[1px] border-solid border-mediumslateblue text-white"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative font-light sm:text-base text-3xl mt-2">
                Description:
              </div>
              <input
                className="[outline:none] bg-gray-300 w-[600px] relative rounded-lg box-border h-[130px] border-[1px] border-solid border-mediumslateblue"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[22px]">
              <div className="flex flex-col items-start justify-start gap-[21px]">
                <div className="relative font-light sm:text-base text-3xl mt-3">
                  Images / Videos:
                </div>
                <button className="cursor-pointer py-2 px-[283px] bg-gray-300 rounded-lg overflow-hidden flex flex-row items-start justify-start border-[1px] border-dashed border-mediumslateblue">
                  <img
                    className="w-[27px] relative h-[27.5px] object-cover"
                    alt=""
                    src="/group-21@2x.png"
                  />
                </button>
              </div>
              <div className="flex flex-row items-end justify-center gap-[8px] text-base">
                <input
                  className="m-0 w-5 relative box-border h-5 border-[2px] border-solid border-mediumslateblue"
                  type="checkbox"
                />
                <div className="relative sm:text-xs">Allow Comments</div>
              </div>
            </div>
            <button className=" mb-2 cursor-pointer [border:none] py-2.5 px-[119px] bg-mediumslateblue rounded-lg overflow-hidden flex flex-row items-center justify-center sm:items-center sm:justify-center sm:pl-[60px] sm:pr-[60px] sm:box-border">
              <div className="relative text-5xl font-medium font-inter text-black text-left sm:text-sm">
                Post
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
