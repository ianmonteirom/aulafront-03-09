import { useNavigate } from "react-router-dom"

const Cliente = () => {

    // HOOks - useNavigate - Ele redireciona para outros componentes
    const navigate = useNavigate();

    // Criando a função de logout 
    
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Bye Bye");
        navigate("/");
    }

    return (
        <>
            <h1>Área Privada</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Cliente