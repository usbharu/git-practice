"use client"
import Image from "next/image";
import {useState} from "react";
export default function Home() {

    const add = (a: number, b: number): number => {
        return a + b;
    }

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)


    return (
        <div>
            <form className="m-2">
                <input className="border-2 inline-block" type="number" onChange={event => setA(Number(event.target.value))}/>
                <p className="inline-block">+</p>
                <input className="border-2" type="number" onChange={event => setB(Number(event.target.value))}/>
                <p className="inline-block">={add(a, b)}</p>
            </form>
        </div>
    );
}
