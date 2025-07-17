import {add} from "@/utils/lib";
import {expect, it} from "vitest";


it("add",() =>{
    expect(add(1,2)).toBe(3)
    expect(add(3,3)).toBe(6)
})

it("success",()=>{
    expect(add(1,1)).toBe(2)
})