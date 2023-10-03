import { useState } from "react"
import BillInput from "./BillInput"
import Output from "./Output"
import SelectPercentage from "./SelectPercentage"
import Reset from "./Reset"

export default function App(){
  const [amount , setAmount] = useState("")
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(0)

  function calcAverage(){
    return (Number(percent1) + Number(percent2)) / 2
  }
  function handleReset(){
    setAmount('')
    setPercent1(0)
    setPercent2(0)
  }
  return(
    <div>
      <BillInput amount={amount} setAmount={setAmount}/>
      <SelectPercentage text={"How did you like the service"} 
       percent={percent1} setPercent={setPercent1}/>
      <SelectPercentage text={"How did your friend like the service"}
       percent={percent2} setPercent={setPercent2}/>
      <Output amount={amount} tip={calcAverage()}/><br/>
      <Reset handleReset={handleReset}> Reset </Reset>
    </div>
    
  )
  
}