"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function OctoberCounter() {
    const [day, setDay] = useState(0);
    const [ordinal, setOrdinal] = useState("th");
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // Set the start date - October 1, 2019
        const startDate = new Date(2019, 9, 1); // Month is 0-indexed, so 9 = October
        const today = new Date();

        // Calculate days difference
        const diffTime = Math.abs(today.getTime() - startDate.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Add 1 because October 1 is the first day
        const octoberDay = diffDays + 1;

        // Check for API request
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("api") === "json") {
            const response = {
                day: octoberDay,
                ordinal: getOrdinalSuffix(octoberDay),
                formatted: `${octoberDay}${getOrdinalSuffix(octoberDay)}`,
                text: `happy october ${octoberDay}${getOrdinalSuffix(octoberDay)}`,
            };

            // Replace entire document body to match legacy behavior exactly
            document.body.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
            document.body.style.fontFamily = "monospace";
            document.body.style.padding = "20px";
            document.body.style.backgroundColor = "#f5f5f5";
            document.body.style.color = "black";
            return; // Stop animation loop setup
        }

        // Start animation
        const targetNumber = octoberDay;
        let currentNumber = Math.max(1, targetNumber - 50);

        setDay(currentNumber);

        const interval = setInterval(() => {
            currentNumber++;
            setDay(currentNumber);

            if (currentNumber >= targetNumber) {
                clearInterval(interval);
                setIsAnimating(false);
                // Set ordinal suffix
                setOrdinal(getOrdinalSuffix(targetNumber));
                // Update document title
                document.title = `October ${targetNumber}${getOrdinalSuffix(targetNumber)}, 2019`;
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const getOrdinalSuffix = (number: number) => {
        if (number % 100 >= 11 && number % 100 <= 13) {
            return "th";
        }
        switch (number % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const handleShare = () => {
        const message = `happy october ${day}${ordinal}`;
        const smsLink = `sms:?&body=${encodeURIComponent(message)}`;
        window.open(smsLink, "_blank");
    };

    return (
        <Card className="group relative z-10 mx-auto mb-8 w-full max-w-[600px] overflow-hidden rounded-3xl border-none bg-background/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent from-0% via-white/5 via-50% to-transparent to-100% opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <CardContent className="p-8 sm:p-12 text-center">
                <h1 className="mb-8 text-2xl font-medium tracking-tight sm:text-[2rem]">Today is</h1>

                <div className="date my-8">
                    <h2 className="mb-1 text-[2.5rem] tracking-tight sm:text-[3.5rem] leading-none">
                        October{" "}
                        <span className="relative inline-block font-bold text-primary">
                            {day}
                            <span className="absolute bottom-[-5px] left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </span>
                        <sup className="text-[0.6em]">{ordinal}</sup>
                    </h2>
                    <p className="year text-2xl tracking-tight text-muted-foreground sm:text-[1.5rem]">2019.</p>
                </div>

                <div className="buttons mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-2">
                    <Button
                        onClick={handleShare}
                        className="rounded-xl gap-2 transition-all duration-200 hover:-translate-y-[2px] group/btn"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover/btn:-translate-y-[2px]"
                        >
                            <path d="M7 11l5-5 5 5" />
                            <path d="M12 6v13" />
                        </svg>
                        Share via SMS
                    </Button>

                    <Button
                        asChild
                        className="rounded-xl gap-2 transition-all duration-200 hover:-translate-y-[2px] group/link cursor-pointer"
                    >
                        <Link
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-200 group-hover/link:rotate-12"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                            Why?
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
