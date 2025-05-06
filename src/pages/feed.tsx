import './feed.css'
import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import TagIcon from '@mui/icons-material/Tag';
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
                            <Button variant="contained" className='tweet-button' disableElevation>Twettar</Button>
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
        </>
    )
}