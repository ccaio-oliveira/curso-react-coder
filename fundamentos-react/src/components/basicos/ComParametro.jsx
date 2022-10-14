export default function ComParametro({titulo, aluno, nota}){
    const status = nota >= 7 ? 'aprovado' : 'reprovado';
    nota = Math.ceil(nota);
    return (
        <div>
            <h2>{ titulo }</h2>
            <h3><strong>{ aluno }</strong> tem nota { nota } e está { status }</h3>
        </div>
    )
}