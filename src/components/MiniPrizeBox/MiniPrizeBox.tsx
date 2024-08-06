import React from "react";

interface props {
  title: string;
  body: string;
  prize: string;
  textColor: string;
  bgColor: string;
}

export default function MiniPrizeBox({
  title,
  body,
  prize,
  textColor,
  bgColor,
}: props) {
  return (
    <div className="flex gap-4 xs:gap-8 sm:gap-10">
      <div className="w-max space-y-2">
        <h4 className={`font-display text-md sm:text-lg ${textColor}`}>
          {title}
        </h4>
        <p className="max-w-md">{body}</p>
      </div>
      <div className={`flex flex-1 items-center p-2 xs:p-4 ${bgColor}`}>
        <h4 className="font-display text-xl sm:text-2xl text-black ml-auto mt-auto sm:mt-0">
          {prize}
        </h4>
      </div>
    </div>
  );
}
