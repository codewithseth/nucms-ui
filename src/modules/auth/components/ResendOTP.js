import React, { useEffect, useState } from "react";
import useAuth from "../core/action";

function ResentOtp() {
    const [seconds, setSeconds] = useState(60);

    const { onResendOpt } = useAuth();

    const resendOTP = () => {
        setSeconds(60);
        onResendOpt();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
        <div className="container">
            <div className="countdown-text flex justify-between my-5">
                {seconds > 0 ? (
                    <div className="text-sm">Please wait {seconds < 10 ? `0${seconds}` : seconds} seconds</div>
                ) : (
                    <div className="text-sm">Didn't receive the code?</div>
                )}

                <button
                    disabled={seconds > 0}
                    style={{
                        color: seconds > 0 ? "#DFE3E8" : "#148ECE"
                    }}
                    className="text-sm"
                    onClick={resendOTP}
                >
                    Resend OTP
                </button>
            </div>
        </div>
    );
}

export default ResentOtp;
