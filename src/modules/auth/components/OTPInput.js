import React, { useRef, useState } from 'react'

const OTPInput = ({ length, onSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputsRef = useRef([]);

    const handleChange = (event, index) => {
        const value = event.target.value;
        if (!value || /^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
            }
        }
    };

    const handleBackspace = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const otpString = otp.join('');
        onSubmit(otpString);
    };

    const isButtonDisabled = otp.some((value) => value === '');
    return (
        <>
            <div className="flex space-x-2 justify-center">
                {otp.map((_, index) => (
                    <input
                        key={index}
                        ref={(ref) => (inputsRef.current[index] = ref)}
                        type="text"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        className="w-10 h-10 text-center rounded-md text-xl "
                    />
                ))}
            </div>

            <div className="mt-4 flex justify-center">
                <button
                    className={`w-72 py-2 rounded-md text-white font-semibold ${isButtonDisabled ? 'bg-gray-300' : 'bg-[#148ECE] hover:bg-cyan-600'}`}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                >
                    Confirm
                </button>
            </div>
        </>
    )
}

export default OTPInput