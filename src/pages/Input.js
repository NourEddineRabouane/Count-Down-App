import { useEffect, useState } from "react";
import One from "./One";

export default function Input({ firsTime, setFirstime,click, setTotal , empty ,total}) {
    const [Hours, setHours] = useState(0);
    const [Mins, setMins] = useState(0);
    const [Secs, setSecs] = useState(0);

    useEffect(() => {
        setTotal(Hours * 3600 + Mins * 60 + Secs);
    }, [Hours , Mins , Secs ,setTotal]);

    return (
        <>
            <div className="flex justify-around mt-16">
                <One
                    setOne={setHours}
                    setFirstime={setFirstime}
                    mean={"HH"}
                    empty={empty}
                ></One>
                <One
                    setOne={setMins}
                    setFirstime={setFirstime}
                    mean={"MM"}
                    empty={empty}
                ></One>
                <One
                    setOne={setSecs}
                    setFirstime={setFirstime}
                    mean={"SS"}
                    empty={empty}
                ></One>
            </div>
            {click ? (
                total ? (
                    ""
                ) : (
                    <p className="text-red-500 text-center">
                        please fill in fieslds{" "}
                    </p>
                )
            ) : (
                ""
            )}
        </>
    );
}
