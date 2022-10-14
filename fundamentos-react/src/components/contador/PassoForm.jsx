export default function PassoForm({passo, setPasso}){
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label> 
            <input type="number" id="passoInput" value={passo}  onChange={e => setPasso(+e.target.value)} />
        </div>
    )
}