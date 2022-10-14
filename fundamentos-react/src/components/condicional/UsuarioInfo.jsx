import If, { Else } from './if';

export default function UsuarioInfo({usuario}){
    const user = usuario || {}
    return(
        <div>
            <If test={user && user.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>amigão</strong>!
                </Else>
            </If>
        </div>
    )
}