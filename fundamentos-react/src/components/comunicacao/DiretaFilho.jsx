export default ({nome, idade, nerd}) => {
    return (
        <div>
            <span>{nome} </span> 
            <span><strong>{idade}</strong> </span> 
            <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}