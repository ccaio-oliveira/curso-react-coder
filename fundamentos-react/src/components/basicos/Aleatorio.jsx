export default function Aleatorio({min, max}) {
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return (
        <div id="aleatorio">
            <h2>Valor Aleatório</h2>
            <p>Valor mínimo: {min} </p>
            <p>Valor máximo: {max}</p>
            <p>Resultado: {resultado}</p>
        </div>
    )
}