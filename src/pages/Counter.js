import { useState, useEffect } from "react";

export default function Counter({ total, isPlay, handleEmpty, reset }) {
    const [T, setT] = useState(total);
    const [H, setH] = useState(Math.floor(total / 3600));
    const [M, setM] = useState(Math.floor((total % 3600) / 60));
    const [S, setS] = useState(total % 60);

    // to reset the initial value of the counter
    useEffect(() => {
        if (reset) setT(total);
    }, [reset, total]);

    // set the total whenever change
    useEffect(() => {
        setT(total);
    }, [total]);

    // calculate the hours , minutes and seconds when the total change
    useEffect(() => {
        setH(Math.floor(T / 3600));
        setM(Math.floor((T % 3600) / 60));
        setS(T % 60);
    }, [T]);

    // count down
    useEffect(() => {
        let interval;
        if (isPlay) {
            interval = setInterval(() => {
                setT((prevT) => {
                    if (prevT > 0) {
                        return prevT - 1;
                    } else {
                        clearInterval(interval);
                        handleEmpty();
                        return prevT;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlay]);

    return (
        <div className="flex items-center justify-evenly w-[60%] p-4 rounded-md mx-auto mt-[64px] bg-gradient-to-r from-blue-600 to-violet-500 text-white">
            <span className="text-[28px] sm:text-[44px] ">
                {String(H).padStart(2, "0")}
            </span>{" "}
            :
            <span className="text-[28px] sm:text-[44px] ">
                {String(M).padStart(2, "0")}
            </span>{" "}
            :
            <span className="text-[28px] sm:text-[44px] ">
                {String(S).padStart(2, "0")}
            </span>
        </div>
    );
}
