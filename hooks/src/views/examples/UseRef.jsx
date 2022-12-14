import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function(){
        count.current = count.current + 1;
    }, [value1]);

    useEffect(function(){
        count.current++
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1}
                    onChange={e => setValue1(e.target.value)} ref={myInput1}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input" value={value2}
                    onChange={e => setValue2(e.target.value)} ref={myInput2}
                />
            </div>
        </div>
    )
}

export default UseRef
