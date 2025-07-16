"use client";
import { useState } from "react";
import {add} from "@/utils/lib";
import Image from "next/image";
import Form from "next/form";
import {useRouter} from "next/navigation";
export default function Home() {



	const [a, setA] = useState(0);
	const [b, setB] = useState(0);






	return (
		<div>
			<form className="m-2">
				<input
					className="border-2 inline-block"
					type="number"
					onChange={(event) => setA(Number(event.target.value))}
				/>
				<p className="inline-block">+</p>
				<input
					className="border-2"
					type="number"
					onChange={(event) => setB(Number(event.target.value))}
				/>
				<p className="inline-block">={add(a, b)}</p>
</form><p>使い方：入力ボックスに数字を入力してね







		</p>
		</div>
	);
}
