import { useRef, useEffect } from "react";

export default function One({ setOne, setFirstime, mean, empty }) {
    const input = useRef(null);

    // if the emtpy button is clicked so empty the inputs
    useEffect(() => {
        if (empty) {
            input.current.value = "";
            setOne(0);
        }
    }, [empty, setOne]);

    //

    return (
        <div className="p-2 flex flex-col items-center  sm:p-4 rounded-lg shadow-xl bordered">
            <label
                htmlFor={mean}
                className="mb-2 text-sm sm:text-lg font-medium text-white uppercase"
            >
                {mean}
            </label>
            <input
                ref={input}
                type="number"
                max={60}
                min={0}
                placeholder="00"
                id={mean}
                className="w-14 sm:w-16 text-center  py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                onChange={(event) => {
                    let inputValue = event.target.value;
                    // set 0 as a default value when the input is empty
                    setOne(inputValue === "" ? 0 : parseInt(inputValue));
                    setFirstime(false);
                }}
            />
        </div>
    );
}
