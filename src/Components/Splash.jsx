import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Splash = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <>
        <div id="welcome" className="h-screen flex items-center justify-center bg-slate-400 place-items-center">
            <div className="text-7xl font-bold text-black ">Load..</div>
        </div>
        </>
    );
};

export default Splash;
