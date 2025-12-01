import React from "react";
import Overlay from "./Overlay";

const Card = (prop) => {
    return (
        <div className=" w-1/3 rounded-4xl overflow-hidden relative shrink-0">
            <img
                className="w-full h-full object-cover "
                src={prop.image}
                alt=""
            />
            <Overlay btn={prop.btn} idx={prop.idx}/>
        </div>
    );
};

export default Card;
