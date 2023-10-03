
export default function BillInput({amount , setAmount}){
    return(
        <div>
            <span>How much was the bill?</span>
            <input type="number" value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            />
        </div>
    )
}