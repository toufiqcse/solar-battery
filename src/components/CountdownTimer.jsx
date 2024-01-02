/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        // @ts-ignore
        const difference = nextMonth - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <h1>Countdown Timer</h1>
            {timeLeft.days > 0 && (
                <p>
                    {timeLeft.days} {timeLeft.days === 1 ? 'day' : 'days'}{' '}
                    {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </p>
            )}

            {timeLeft.days === 0 && timeLeft.hours > 0 && (
                <p>
                    {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </p>
            )}
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes > 0 && (
                <p>
                    {timeLeft.minutes}m {timeLeft.seconds}s
                </p>
            )}
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && (
                <p>{timeLeft.seconds}s</p>
            )}
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                <p>Countdown expired!</p>
            )}
        </div>
    );
};

export default CountdownTimer;
