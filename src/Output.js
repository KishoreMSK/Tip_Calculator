
export default function Output({amount,tip}){
    return(
        <>
        {amount > 0 && <span>You pay ${amount + tip} (` ${amount} +  ${tip} tip`)</span> }
         </>
    )
}