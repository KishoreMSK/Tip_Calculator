
export default function Reset({handleReset, children}){
    return <>
     <button onClick={handleReset}>{children}</button> 
    </>
}