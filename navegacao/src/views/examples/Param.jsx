import { useParams } from 'react-router-dom';

const Param = () => {
    const { id } = useParams();
    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param;