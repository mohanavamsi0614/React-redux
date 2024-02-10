import { useDispatch, useSelector } from "react-redux"
import Action from "./act"

function Like() {
    const count=useSelector((state)=>state)
    const dispatch=useDispatch()
    return(
        <>
            <h1>Likes:{count}</h1>
            <button onClick={()=>{dispatch(Action.Increment())}}>+</button>
            <button onClick={()=>{dispatch(Action.Decrement())}}>-</button>
        </>
    )
    
}
export default Like;