import './feed.css'
import * as React from 'react';
import { api } from '../services/api';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Avatar, Box, Button, Container, Fade, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextareaAutosize, Typography } from '@mui/material'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import TagIcon from '@mui/icons-material/Tag';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Feed (){

    const posts = [
    {
      user: "Growdev",
      handle: "@growdev",
      avatar: "assets/avatar-default.png",
      time: "3h",
      content: "Esta é uma demonstração da aplicação inspiradora do Bloco Intermediário - Programa Starter :)",
      likes: 1,
      comments: 0
    },
    {
      user: "Michael Scott",
      handle: "@michael__scott",
      avatar: "/avatars/michael.png",
      time: "3h",
      content: "Prefiro ser temido ou amado? Fácil. Ambos. Quero que as pessoas tenham medo do quanto me amam ;)",
      likes: 0,
      comments: 0
    },
    {
      user: "Daphne Dog",
      handle: "@daphne",
      avatar: "/avatars/daphne.png",
      time: "3h",
      content: "Hoje comi a comidinha que a mamae fez, mas eu amo mais o meu papai",
      likes: 2,
      comments: 0
    },
    {
      user: "Forrest Gump",
      handle: "@forrest",
      avatar: "/avatars/forrest.png",
      time: "3h",
      content: "Minha mãe sempre disse: Você tem que deixar o passado para trás antes de seguir em frente.",
      likes: 0,
      comments: 0
    },
  ]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
    };

    const [conteudo, setConteudo] = React.useState("");

    async function HandleNewTwetts(){

    if(!conteudo.trim()){
        alert("Escreva algo antes de publicar seu tweet.")
        return;
    }

    const token = localStorage.getItem("token");

    if(!token){
        alert("Você precisa estar logado para publicar um tweet")
        return;
    }

    try {
        const response = await api.post('/tweets',
            { conteudo, tipo: "tweet"},
            { headers: {Authorization: `Bearer ${token}`}}
        )

        alert("Twett publicado com sucesso!")
        console.log(token)
        setConteudo("");
        handleClose();

        console.log(response)
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const mensagem = error.response.data
        console.log(mensagem)
        
    }
    

    }


    return(
        <>
            <Container>
                <Grid container>
                    <Grid component={"aside"} size={3} className='sidebar'>
                        <Box>
                            <img src='assets/logo_growtweet.svg' alt='Logo GrowTweet' className='logo' />
                            <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <HomeFilledIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Página Inicial" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <TagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Explorar" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <PersonOutlineOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Perfil" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            </nav>
                            <Button onClick={handleOpen} variant="contained" className='tweet-button' disableElevation>Twettar</Button>
                        </Box>
                        <Box className='profile-box'>
                            <Box className='user-profile-box'>
                                <Stack direction="row" spacing={2} className='avatar-user'>
                                    <Avatar alt="Remy Sharp" src='assets/avatar-default.png' />
                                </Stack>
                                <Box className="user-info">
                                    <strong>Remy Sharp</strong>
                                    <p>@remysharp</p>
                                </Box>
                            </Box>
                            <a href="#" className='logout'>Sair</a>
                        </Box>
                    </Grid>
                    <Grid component={"main"} size={6} className='feed'>
                        <h1>Página Inicial</h1>
                            {posts.map((post, i) => (

                            <Grid key={i} className='tweet'>
                                <Avatar alt={post.user} src={post.avatar} className='avatar-content' />
                                <Box className="post-content">
                                    <Typography component={"strong"}>{post.user} </Typography>
                                    <Typography component={"span"}>{post.handle} - {post.time}</Typography>
                                    <Typography component={"p"}>{post.content}</Typography>
                                    <Box className='actions-content'>
                                        <Box className="action-comments"><CommentIcon />{post.comments}</Box>
                                        <Box className='action-likes'><FavoriteBorderIcon/>{post.likes}</Box>
                                         
                                    </Box>
                                </Box>
                                
                            </Grid>

                            ))}

                    </Grid>
                    <Grid component={"aside"} size={3} className='trending'>
                        <Grid className='trending-content'>
                            <h1>O que está acontecendo?</h1>
                            <Box className='trending-list'>
                                <Typography className='trending-category' component={"span"}>Esportes - Há 45 min</Typography>
                                <Typography className='trending-item' component={"strong"}>Assunto sobre esportes</Typography>
                            </Box>
                            <Box className='trending-list'>
                                <Typography className='trending-category' component={"span"}>Assuntos no momento no Brasil</Typography>
                                <Typography className='trending-item' component={"strong"}>Assunto do Momento</Typography>
                            </Box>
                            <Box className='trending-list'>
                                <Typography className='trending-category' component={"span"}>Música - Assuntos no momento</Typography>
                                <Typography className='trending-item' component={"strong"}>Assunto sobre Música</Typography>
                            </Box>
                            <Box className='trending-list'>
                                <Typography className='trending-category' component={"span"}>Cinema - Assuntos no momento</Typography>
                                <Typography className='trending-item' component={"strong"}>Assunto sobre Filmes e Cinema</Typography>
                            </Box>
                            <a href="#">Mostrar mais</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Modal
                
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className='modal-content'>
                        <Button onClick={handleClose} variant="text" className='button-close'><CloseIcon/></Button>
                        <TextareaAutosize aria-label="empty textarea" placeholder="O que está acontecendo?" value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
                        <Button onClick={HandleNewTwetts} variant="contained" className='tweet-button' disableElevation>Postar</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}