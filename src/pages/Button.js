import React from "react";

export default function Button({ handlePlay, isPlay , handleEmpty}) {
    return (
        <div className="flex items-center justify-evenly w-[60%] mx-auto mt-[64px]">
            <button className="border bg-gray-400 rounded-[50%] size-[48px]">
                <i className="fa-solid fa-rotate-right"></i>
            </button>
            <button
                className="border bg-gray-400 rounded-[50%] size-[60px]"
                onClick={handlePlay}
            >
                {isPlay ? (
                    <i className="fa-solid fa-pause"></i>
                ) : (
                    <i className="fa-solid fa-play"></i>
                )}
            </button>
            <button
                title="Reset all to zero"
                onClick={handleEmpty}
                className="border bg-gray-400 rounded-[50%] size-[48px]"
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}
