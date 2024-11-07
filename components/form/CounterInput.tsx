"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";

import { Button } from "../ui/button";
import { useState } from "react";

type CounterInputProps = {
    detail: string;
    defaultValue?: number;
}

const CounterInput = ({detail, defaultValue}: CounterInputProps) => {
    const [count, setCount] = useState<number>(defaultValue || 0);

    const increaseCount = () => {
        setCount((prevCount: number) => prevCount + 1);
    }

    const decreaseCount = () => {
        setCount((prevCount: number) => {
            if(prevCount > 0) {
               return  prevCount - 1
            }

            return prevCount
        })
    }

    return (
        <Card className="mb-4">
            <input type="hidden" name={detail} value={count} />
            <CardHeader className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex flex-col">
                        <h2 className="font-medium capitalize">{detail}</h2>
                        <p className="text-sm text-gray-500">Specify the number of {detail}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" type="button" onClick={decreaseCount}>
                            <LuMinus className="w-5 h-5 text-primary" size={20} />
                        </Button>
                        <span className="text-xl font-bold w-5 text-center">{count}</span>
                        <Button variant="outline" onClick={increaseCount}>
                            <LuPlus size={20} className="" />
                        </Button>
                    </div>
                </div>
            </CardHeader>

            </Card>
    )
}

export default CounterInput;