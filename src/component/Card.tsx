import React from "react";

interface CardProps {
    name: string;
    title: string;
    check:boolean;
    
}

const Card = ({ name, title, check }: CardProps) => {
    return <>
        <div>
            name:{name}
            title:{title}
            check : {check}
        </div>
    </>
}

export default Card;