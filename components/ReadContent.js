import React, { useState } from "react";
import Pa from "../components/Pa";

const ReadContent = ({content}) => {

    const interpret = () => {
        // LINK
        const splt = content.split("[");
        //const prgrf = frst.map((b) => b.split(")")[0]);
        let i = 1;
        const result = [<p key={i}>{splt[0]}</p>];
        while (i < splt.length) {
            let bfr = splt[i].split(")")[0]
            result.push(<Pa key={i} href={bfr.split("(")[1]} text={bfr.split("]")[0]}/>)
            result.push(<p key={i}>{splt[i].split(")")[1]}</p>);
            i++;
        }
        return result;
    };

    return (
        <p>{interpret()}</p>
    );

}

export default ReadContent;