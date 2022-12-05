import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from './../../components/layout/SectionTitle';

function calcFatorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

function isParImpar(n){
    if(n % 2 === 0) return 'Par';
    return 'Ímpar';
}

const UseEffect = () => {

    // Ex 01
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function(){
        setFatorial(calcFatorial(number));
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "Eita!!!"
        }
    }, [fatorial])

    // Ex 02
    const [num2, setNum2] = useState(0);
    const [parImpar, setParImpar] = useState("");

    useEffect(function(){
        setParImpar(isParImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input type="number" className="input" value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Par ou Impar: </span>
                    <span className="text red">{parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect;