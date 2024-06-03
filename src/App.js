import { useEffect, useState } from "react";
import "./App.css";
import Button from "./pages/Button";
import Counter from "./pages/Counter";
import Input from "./pages/Input";

function App() {
    const [Firstime, setFirstime] = useState(true);
    const [isPlay, setPlay] = useState(false);
    const [total, setTotal] = useState(null);
    const [empty, setEmpty] = useState(false);
    const [click, setClick] = useState(false);
    const [reset, setReset] = useState(false);
    // handle the reset button
    const handleReset = () => {
        setReset(true);
        setTimeout(() => {
            setReset(false);
        }, 1000);
    };
    // handle the play button
    const handlePlay = () => {
        if (total) setPlay(!isPlay);

        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 1000);
    };

    // emty inputs when click the cross button
    const handleEmpty = () => {
        setEmpty(true);
        // if the inputs are empty you can't start coundting down
        setPlay(false);
        // after one second reset it to false
        setTimeout(() => {
            setEmpty(false);
        }, 1000);
    };

    // the main application
    return (
        <div className="p-4 bg-gradient-to-t from-indigo-500 to-blue-700 h-[100dvh] sm:w-1/2 sm:mx-auto sm:bg-transparent ">
            <h1 className=" text-center font-bold text-xl uppercase text-white">
                <i className="fa-solid fa-stopwatch m-1 sm:mx-4"></i>
                Count down
            </h1>

            <Counter total={total} isPlay={isPlay} handleEmpty={handleEmpty} reset={reset}/>

            <Input
                firsTime={Firstime}
                setFirstime={setFirstime}
                click={click}
                setTotal={setTotal}
                empty={empty}
                total={total}
            />

            <Button
                handlePlay={handlePlay}
                isPlay={isPlay}
                handleEmpty={handleEmpty}
                handleReset={handleReset}
            />
        </div>
    );
}

export default App;
