import LoginUsuario from "./usuario/service/LoginUsuario";
import RegistarUsuario from "./usuario/service/RegistarUsuario";

const registar = new RegistarUsuario();
registar.executar({
    nome: "João",
    email: "joao@email.com",
    senha: "123456"
});


(async () => {
    const login = new LoginUsuario();
    const usuario = await login.executar({
        email: "joao@email.com",
        senha: "123456"
    });

    console.log(usuario);
})();
