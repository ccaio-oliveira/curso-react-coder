export default ({quandoClicar}) => {
    const gerarIdade = () => parseInt(Math.random() * (40) + 30);
    const gerarNerd = () => Math.random() > 0.5;

    function recebeInfo(){

        return quandoClicar('Joao', gerarIdade(), gerarNerd());

    }

    return (

        <div>

            <div>Filho</div>
            <button onClick={recebeInfo}>
                Fornecer Informações
            </button>

        </div>

    )
}