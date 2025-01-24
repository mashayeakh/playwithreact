import React, { useEffect, useState, useRef } from "react";

const Practice = () => {
    //variables
    const [length, setLength] = useState(5);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    const [password, setPassword] = useState("");

    const pswRef = useRef(null);
    console.log(pswRef)
    const copyToClipboard = () => {

        pswRef.current?.select();
        // passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    const generatedPsw = () => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let addPsw = "";

        if (number) {
            str += "0123456789";
        }
        if (character) {
            str += "!@#$%^&*(())}{:?><";
        }
        for (let i = 1; i <= length; i++) {
            //generating random pass
            let randomIdx = Math.floor(Math.random() * str.length + 1);
            // console.log(str[randomIdx]); -> random char corresponding to random index
            addPsw += str[randomIdx];
        }
        setPassword(addPsw);
        console.log(password);
        // console.log(addPsw)
    };

    useEffect(() => {
        generatedPsw();
    }, [length, number, character, setPassword]);

    return (
        <>
            <div class="text-white text-4xl">Password Generator</div>
            <div className="grid grid-cols-8 gap-2 w-full my-5 max-w-[23rem] mx-auto">
                <input
                    type="text"
                    className="col-span-6 bg-gray-50 
                    border border-gray-300 
                    text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5
                    dark:border-gray-600
                    dark:placeholder-gray-400 text-black
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    ref={pswRef}
                    readonly
                />

                <button

                    type="submit"
                    className="col-span-2 text-white 
                    bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium 
                    rounded-lg text-sm w-full sm:w-auto 
                    py-2.5 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                    items-center inline-flex justify-center"
                    onClick={copyToClipboard}
                >
                    <span id="default-message">Copy</span>

                </button>

                <div className="text-white flex gap-2">

                    <input
                        id="minmax-range"
                        type="range"
                        min={5} max={100}
                        value={length}
                        // className="items-center me-4"
                        style={{ width: '100px' }}
                        onChange={(e) => (setLength(e.target.value))}
                    />
                    Length:
                    <span htmlFor="" >{length}</span>

                    <div className="flex">
                        <div
                            className="flex items-center me-4">
                            <input
                                id="inline-checkbox"
                                type="checkbox" defaultChecked={number}
                                className="w-4 h-4 text-blue-600
                                bg-gray-100 border-gray-300
                                rounded focus:ring-blue-500
                                dark:focus:ring-blue-600
                                dark:ring-offset-gray-800
                                focus:ring-2 dark:bg-gray-700
                                dark:border-gray-600"
                                onChange={() => { setNumber((prev) => !prev) }}
                            />
                            <label
                                for="inline-checkbox"
                                className="ms-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300">
                                Numbers
                            </label>
                        </div>
                        <div
                            className="flex items-center me-4">
                            <input
                                id="inline-2-checkbox"
                                type="checkbox"
                                defaultChecked={character}
                                className="w-4 h-4 
                                text-blue-600 bg-gray-100
                                border-gray-300 rounded
                                focus:ring-blue-500 dark:focus:ring-blue-600
                                dark:ring-offset-gray-800 focus:ring-2
                                dark:bg-gray-700 dark:border-gray-600"
                                onChange={() => { setCharacter((prev) => !prev) }}
                            />
                            <label
                                for="inline-2-checkbox"
                                className="ms-2 text-sm font-medium
                                text-gray-900 dark:text-gray-300">
                                Characters
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <button className="text-white" onClick={generatedPsw}>
                Click Me
            </button>
        </>
    );
};

export default Practice;
