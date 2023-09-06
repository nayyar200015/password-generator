import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/use-password-generator'
import StrengthChecker from './components/StrengthChecker'
import Button from './components/Button'
import CheckBox from './components/CheckBox'

function App() {
  const [length, setLength] = useState(4)
  const [copied, setCopied] = useState(false)
  const [checkBoxData, setCheckboxData] = useState([
    { title: "Include Uppercase letters", state: false },
    { title: "Include Lowercase letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ])

  const handleCheckboxChange = (index) => {
    setCheckboxData(prev => prev.map((checkbox, ind) => ({
      ...checkbox, state: (ind === index) ? !checkbox.state : checkbox.state
    })))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  const { password, errorMessage, generatePassword } = usePasswordGenerator()

  return (
    <div className="container">
      {/* password text and copy btn */}
      {password && <div className="header">
        <div className="title">Password: {password}</div>
        <Button
          text={copied ? "Copied" : "Copy"}
          onClick={handleCopy}
          customClass="copy-btn" />
      </div>}

      {/* character length */}
      <div className="char-length">
        <span>
          <label htmlFor="">Character Length</label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={e => setLength(e.target.value)} />
      </div>

      {/* checkboxes */}
      <div className="checkboxes">
        {checkBoxData.map((checkbox, index) => <CheckBox key={index}
          {...checkbox}
          index={index}
          onChange={() => handleCheckboxChange(index)} />)}
      </div>

      {/* strength */}
      {password && <StrengthChecker length={password.length} />}

      {/* error handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* generate button */}
      <Button
        text="Generate Password"
        onClick={() => generatePassword(checkBoxData, length)}
        customClass="generate-btn" />
    </div>
  )
}

export default App
