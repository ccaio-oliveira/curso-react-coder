import { useState } from "react";
import './Mega.css';

const Mega = ({qtde}) => {

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }
    
    function gerarNumeros(qtde){
    
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2);
    
        return numeros;
    }

    const [quantidade, setQtde] = useState(qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(', ')}</h3>
            <div>
                <label htmlFor="">Quantidade de números</label>
                <input type="number" value={quantidade} onChange={e => {
                        setQtde(+e.target.value);
                        setNumeros(gerarNumeros(+e.target.value));
                    }} min="6" max="15" />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar números</button>
        </div>
    )
}

export default Mega;