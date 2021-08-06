import {AlurakutMenu, AlurakutProfileSidebarMenuDefault} from '../src/lib/AlurakutCommons';
import Box from '../src/componentes/Box';
import styled from 'styled-components';
import { black } from 'color-name';

const GridComunidades = styled.main`
    width: 100%;
    grid-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
  
    .profileArea {
      display: none;
      @media(min-width: 860px){
        display: block;
      }
    }
  
    @media(min-width: 860px) {
      max-width: 1110px;
      display: grid;
      grid-template-areas: "profileArea communityArea";
      grid-template-columns: 190px 920px;
  
    }
`
function ProfileSidebar(propriedades) {
    return (
      <Box as = "aside">
        <img src = {`https://github.com/${propriedades.githubUser}.png`} style = {{borderRadius: '8px'}} />
        <hr />
        <p>
          <a className = "boxLink" href = {`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>

        <div style = {{
            fontFamily: 'Verdana',
            position: 'relative',
            color: '#999999',
            fontSize: '12px',
            textAlign: 'left',
            height: '48px',
            width: '61px',
            marginTop: '4px'}}> 

            <p>
                feminino,
            </p>

            <p>
                solteiro(a)
            </p>

            <p>
                Brasil
            </p>
        </div>

        <hr />
  
        <AlurakutProfileSidebarMenuDefault />
  
      </Box>
    )
}

export default function minhasComunidadesScreen() {
    const usuario = 'vitoriasrcosta';

    return (
        <main> 
            <AlurakutMenu/>

            <GridComunidades>
            
                <Box style = {{gridArea: 'profileArea'}}>
                    <ProfileSidebar githubUser = {usuario}/>
                    
                </Box> 

                <Box style = {{gridArea: 'communityArea'}}>
                   <h1 className = "title" style = {{fontSize: '28px', marginBottom: '12px'}}> 
                   Minhas comunidades 
                   </h1>

                   <h2 style = {{
                       color: '#2E7BB4', 
                       marginLeft: '2px', 
                       marginBottom: '20px',
                       fontSize: '14px', 
                       fontFamily: 'Verdana'}}> 
                       Início {">"} Minhas comunidades 
                    </h2>

                     <button className = 'botao'>
                        Criar comunidade
                            <hr style = {{
                                position: 'static', 
                                width: '700px',
                                height: '0px', 
                                marginLeft: '160px',
                                marginTop: '-5px'}}/>
                    </button>
                    
                    <div>
                        <p style = {{
                            fontFamily: 'Verdana', 
                            fontSize: '14px',
                            color: '#333333',
                            fontWeight: 'bold',
                            marginTop: '10px',
                            marginLeft: '2px'}}>
                        
                            mostrando 4-5 de 5
                        </p>

                        <p style = {{
                            fontFamily: 'Verdana', 
                            fontSize: '14px',
                            position: 'static',
                            marginTop: '-16px',
                            marginLeft: '630px',
                            color: '#333333'}}> 

                            primeira ǀ anterior ǀ próxima ǀ última
                        </p>
                        <div> 

                        </div>
                        <Box style = {{
                                background: '#D9E6F6',
                                position: 'absolute',
                                width: '891px',
                                height: '80px',
                                marginTop: '10px'
                            }}> 

                            <img src = "https://alurakut.vercel.app/capa-comunidade-01.jpg" style = {{
                                height: '64.16072082519531px',
                                width: '58.5714340209961px',
                                marginLeft: '-4.28570556640625px',
                                marginTop: '-9.3809814453125px',
                                borderRadius: '55px'
                            }}/>

                            <p style = {{
                                position: 'absolute',
                                fontSize: '14px',
                                marginTop: '-55px',
                                marginLeft: '80px',
                                color: '#2E7BB4'
                            }}>
                                Eu odeio acordar cedo
                                <p style = {{color: 'grey', marginTop: '2px'}}> 1 membro </p>
                            </p>
                            
                            <Box style = {{
                                background: '#F1F9FE',
                                position: 'absolute',
                                width: '891px',
                                height: '80px',
                                marginTop: '9px',
                                marginLeft: '-14px'
                            }}> 

                                <img src = "https://docereceita.com.br/blog/wp-content/uploads/2019/07/massa-de-coxinha.jpg" style = {{
                                    height: '64.16072082519531px',
                                    width: '58.5714340209961px',
                                    marginLeft: '-4.28570556640625px',
                                    marginTop: '-8.3809814453125px',
                                    borderRadius: '55px'
                                }}/>

                                <p style = {{
                                    position: 'absolute',
                                    fontSize: '14px',
                                    marginTop: '-55px',
                                    marginLeft: '80px',
                                    color: '#2E7BB4'
                                    }}>
                                    Comemos coxinha pela cabeça
                                    <p style = {{color: 'grey', marginTop: '2px'}}> 1 membro </p>
                                </p>

                        
                            </Box>

                            <Box style = {{
                                background: '#D9E6F6',
                                position: 'absolute',
                                width: '891px',
                                height: '80px',
                                marginTop: '89px',
                                marginLeft: '-14px'
                                }}> 

                                <img src = "https://http2.mlstatic.com/D_NQ_NP_935073-MLB40421109504_012020-O.jpg" style = {{
                                    height: '64.16072082519531px',
                                    width: '58.5714340209961px',
                                    marginLeft: '-4.28570556640625px',
                                    marginTop: '-8.3809814453125px',
                                    borderRadius: '55px'
                                }}/>

                                <p style = {{
                                    position: 'absolute',
                                    fontSize: '14px',
                                    marginTop: '-55px',
                                    marginLeft: '80px',
                                    color: '#2E7BB4'
                                    }}>
                                    Cachorro é melhor que gente
                                    <p style = {{color: 'grey', marginTop: '2px'}}> 1 membro </p>
                                </p>
                            </Box>

                            <Box style = {{
                                background: '#F1F9FE',
                                position: 'absolute',
                                width: '891px',
                                height: '80px',
                                marginTop: '169px',
                                marginLeft: '-14px'
                                }}> 

                                <img src = "https://avatars.githubusercontent.com/u/22198915?v=4" style = {{
                                    height: '64.16072082519531px',
                                    width: '58.5714340209961px',
                                    marginLeft: '-4.28570556640625px',
                                    marginTop: '-8.3809814453125px',
                                    borderRadius: '55px'
                                }}/>

                                <p style = {{
                                    position: 'absolute',
                                    fontSize: '14px',
                                    marginTop: '-55px',
                                    marginLeft: '80px',
                                    color: '#2E7BB4'
                                    }}>
                                    
                                    Mundinho Virginia BR
                                    <p style = {{color: 'grey', marginTop: '2px'}}> 7 bilhões </p>
                                </p>

                            </Box>

                        </Box>



                    </div>
                </Box>

                
            </GridComunidades>
        </main>

        



    )

}