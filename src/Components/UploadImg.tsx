import React, { useEffect, useState } from "react";
// import {ReactComponent as Cloud} from '../assets/svgs/cloud.svg'
// import {ReactComponent as ADDPHOTO} from "../assets/svgs/addimg.svg";

interface IMG {
  heightimg?: any;
  widthimg?: any;
  defaultImg?:any;
  setGetImg?:any;
}
const UploadImg:React.FC<IMG> = ({heightimg,widthimg,defaultImg,setGetImg}) => {
  const [selectedImages, setSelectedImages] = useState<any>(
    []
  );

  const onSelectFile = (event: any) => {
    setSelectedImages([]);
    const selectedFiles = event.target.files;
    const selectedFilesArray: any = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file: any) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imagesArray)
    event.target.value = "";
  };
  return (
    <section className=" relative">

      <label  className={`  mx-auto  my-0 flex  flex-col justify-center items-center rounded-md cursor-pointer text-lg     overflow-hidden font-[SF-Pro-Text-Medium]`}>
        <input
          type="file"
          name="images"
          className="imgupload w-full h-full absolute opacity-0"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <div className="h-full flex justify-center w-full">
        {selectedImages == "" ? (
        <div className=" py-4 px-4 rounded-md">
          <h1 className="text-xl font-[700]">Drap and drop a file here or click</h1>
          <div className="text-center">ICON</div>
        </div>
        ) : (
          selectedImages[0] && (
            <div className="w-full min-h-[120px]  max-h-[auto] p-2 image h-full flex justify-center">
              <img src={selectedImages[0]}   style={{maxWidth:'100%',height:'auto'}}  alt="upload" />
              <div className="w-full h-full   absolute left-[0%] flex justify-center items-center top-0  ">
             <div className="bg-gray rounded-full  p-2 w-12 h-12 flex justify-center items-center">
             {/* <Cloud/> */}
             </div>
              </div>
            </div>
          )
        )}
        </div>
      </label>
    </section>
  );
};

export default UploadImg;
