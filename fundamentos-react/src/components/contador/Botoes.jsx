export default function Button({ setInc, setDec }) {
    return (
        <div>
            <button onClick={setInc}>+</button>
            <button onClick={setDec}>-</button>
        </div>
    )
}