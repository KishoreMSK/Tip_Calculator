
export default function SelectPercentage({text , percent , setPercent }){
    return(
        <div>
            <span>{text}</span>
            <select value={percent} 
            onChange={(e) => setPercent(e.target.value)}> 
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was Good (10%)</option>
            <option value={20}>Absolutely amazing (20%)</option>
            </select>
        </div>
    )
}