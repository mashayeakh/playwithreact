import React from 'react'

function Card({ userName, btnTxt = "visit me" }) {   // If anyone forgets to pass props in btnTxt then the btnTxt should have set his default name in this way -> btnTxt ="visit me "
    // console.log("Props -> ", props);
    // console.log("Props -> ", props.userName);
    return (
        <>
            <div>Card</div>
            {/* <div>Card</div> */}
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {/* {props.userName} */}
                            {userName}
                        </div>
                    </figcaption>
                    <button type="button">
                        {/* {props.btnTxt} */}
                        {btnTxt}
                    </button>
                </div>
            </figure>
        </>
    )
}

export default Card