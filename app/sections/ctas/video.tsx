'use client'
import React, { useState,useEffect } from "react";
import style from '@/sections/ctas/video.module.css';
import { Icons } from "@/components/UI/icons";

const embedID = "w-bYHrIDj7Q";

const Embed = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const onThumbnailClick = () => {
    setImageClicked(true);
  };

  useEffect(()=>{
    const playImg = document.querySelector("#play-button");

    playImg!.addEventListener("click",onThumbnailClick,{once:true});
  },[])

  return (
    <div className='group relative flex justify-center items-center rounded-2xl hover:bg-card hover:rounded-lg hover:cursor-pointer'>
      <div className={style.video}>
        {!imageClicked ? (
          <>
            {/* <Image
              src={Content}
              height={360}
              alt="yt thumbnail"
              priority
              className="rounded-2xl z-0"
            /> */}
            <div className="flex flex-col gap-2 text-muted-foreground items-center">
              <Icons.play className="z-10 h-24 w-24 transition duration-150 ease-in-out group-hover:translate-x-1 group-hover:scale-150" id="play-button"/>
              <p>Watch a 1-minute Explainer.</p>
            </div>
            {/* <Image
              id="play-button"
              src={Youtube}
              alt="youtube play"
              width={200}
              className={style.play}
              priority
          /> */}
            
          </>
        ) : (
          <iframe
            allow="autoplay"
            allowFullScreen
            src={
              imageClicked
                ? `https://www.youtube.com/embed/${embedID}?rel=0&showinfo=0&autoplay=1`
                : ""
            }
            title="youtube video"
          />
        )}
      </div>
    </div>
  );
};
export default Embed;
