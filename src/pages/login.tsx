import { Box, Button, Container, Grid, TextField } from '@mui/material'
import '../pages/login.css';
import { useState } from "react";
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export function Login (){
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent){
        e.preventDefault();
  
    try {
        const response = await api.post("/login", {
            emailOuUsername: username,
            senha: senha
        });

        const { token } = response.data.dados;

        localStorage.setItem("token", token);
            alert("Login realizado com sucesso!")

        navigate('/');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        alert(error?.response?.data?.message || "Erro ao fazer login");
    }
  }

    return(
        <>
        <Box className="body-login">
            <Container className='login-container'>
                <Grid container>
                    <Grid size={7} className="login-box info">
                        <h1>Growtwitter</h1>
                        <h4>Trabalho final do bloco intermediário</h4>
                        <p>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.</p>
                    </Grid>
                    <Grid size={5} className='login-form form'>
                        <h2>Entrar no Growtwitter</h2>
                        <Box component="form" onSubmit={handleLogin} sx={{ '& .MuiTextField-root': { width: '100%' } }} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Usuário" variant="outlined" sx={{marginBottom: 2}} value={username} onChange={(e) => setUsername(e.target.value)} />

                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <Button type="submit" variant="contained" disableElevation>Entrar</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    )
}