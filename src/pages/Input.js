import { useEffect, useState } from "react";
import One from "./One";

export default function Input({
    firsTime,
    setFirstime,
    click,
    setTotal,
    empty,
    total,
}) {
    const [Hours, setHours] = useState(0);
    const [Mins, setMins] = useState(0);
    const [Secs, setSecs] = useState(0);

    useEffect(() => {
        setTotal(Hours * 3600 + Mins * 60 + Secs);
    }, [Hours, Mins, Secs, setTotal]);

    return (
        <div className="relative">
            <div className="flex justify-around mt-16  py-4 rounded-md">
                <One
                    setOne={setHours}
                    setFirstime={setFirstime}
                    mean={"Hours"}
                    empty={empty}
                ></One>
                <One
                    setOne={setMins}
                    setFirstime={setFirstime}
                    mean={"Minutes"}
                    empty={empty}
                ></One>
                <One
                    setOne={setSecs}
                    setFirstime={setFirstime}
                    mean={"Secondes"}
                    empty={empty}
                ></One>
            </div>
            {click ? (
                total ? (
                    ""
                ) : (
                    <p className="text-amber-300 text-center absolute ml-[33.3%] ">
                        please fill in fieslds{" "}
                    </p>
                )
            ) : (
                ""
            )}
        </div>
    );
}
