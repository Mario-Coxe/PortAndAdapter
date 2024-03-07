import CasoDeUso from "../../shared/CasoDeUso";
import ColecaoUsuario from "../data/ColecaoUsuario";
import Usuario from '../model/Usuario';

export default class RegistarUsuario
    implements CasoDeUso<Required<Usuario>, void> {
    async executar(usuario: Required<Usuario>): Promise<void> {
        const senhaCripto = usuario.senha.split('').reverse().join('');
        const usuarioCripto = { ...usuario, senha: senhaCripto }
        
        const colecao = new ColecaoUsuario()
        await colecao.adicionar(usuarioCripto)
    }
}