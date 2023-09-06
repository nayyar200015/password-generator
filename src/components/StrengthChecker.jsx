import React from 'react'

const StrengthChecker = ({ length }) => {
    const getPasswordStrength = () => {

        return (length < 1) ? "" :
            (length < 4) ? "Very Weak" :
                (length < 8) ? "Poor" :
                    (length < 12) ? "Medium" :
                        (length < 16) ? "Strong" : "Very Strong";
    }

    const passwordStrength = getPasswordStrength()

    return (!passwordStrength) ? <React.Fragment /> :
        <div className="password-strength">
            Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
        </div>
}

export default StrengthChecker
