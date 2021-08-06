import React from 'react'
import MainGrid from '../src/componentes/MainGrid';
import Box from '../src/componentes/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault , OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/componentes/ProfileRelations'

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


//Adicionando seguidores por meio da API do Github
function ProfileRelationsBox(propriedades) {
  return (
     <ProfileRelationsBoxWrapper>
      <h2 className = "smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>

      <ul>
         {propriedades.items.map((itemAtual) => {
          return (
            <li key = {itemAtual.id}>
              <a href = {itemAtual.html_url}>
                <img src = {itemAtual.avatar_url} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          ); 
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}


export default function Home() {
  const usuario = 'vitoriasrcosta';
  const pessoasFavoritas = ['imKethy', 'omariosouto', 'Latrel', 'peas', 'juunegreiros', 'rafaballerini', 'jemaf'] 
  const [seguidores, setSeguidores] = React.useState([]);
  const [comunidades, setComunidades] = React.useState([]);
  const [verTotalDeItens, setVerTotalDeItens] = React.useState(false);
  const [verComunidades, setVerComunidades] = React.useState(false);
 

  //Utilizando a API do Github para adicionar os seguidores
  React.useEffect(function() {
    fetch('https://api.github.com/users/vitoriasrcosta/followers')

    .then(function (respostaDoServidor){
      return respostaDoServidor.json();
    })

    .then(function(respostaConvertida){
      setSeguidores(respostaConvertida);
    })

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '36f956b18e309958aa3b09c27756e8',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },

      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }` })
    })

    .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
    .then((respostaCompleta) => {
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
  }, [])



  return (
    <>

    <AlurakutMenu />

    <MainGrid>

      <div className = "profileArea" style = {{gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser = {usuario}/>
      </div>

      <div className = "welcomeArea" style = {{gridArea: 'welcomeArea'}}>
        <Box>

          <h1 className = "title">
            Bem-vindo(a), {usuario}
          </h1>

          <h2 className = 'frase'>
            Sorte de hoje: O melhor profeta do futuro é o passado
          </h2>

          <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className = "subTitle">O que você deseja fazer?</h2>

            <form onSubmit = {function handleCriaComunidade(e) {
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  title: dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('image'),
                  creatorSlug: usuario,
                }

                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)

                fetch('/api/comunidades', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },

                  body: JSON.stringify(comunidade)
                })

                .then(async (response) => {
                  const dados = await response.json();
                  console.log(dados.registroCriado);
                  const comunidade = dados.registroCriado;
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas)
                })
            }}>


            <button className = 'botao'>
              Criar comunidade
            </button>

            <button style = {{
              background: '#D9E6F6', 
              color: '#2E7BB4', 
              alignItems: 'center',
              padding: '9px 12px',
              position: 'static',
              width: '160px',
              height: '32px',
              fontFamily: 'Verdana', 
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              marginTop: '4px',
              marginLeft: '8px',
              marginBottom: '8px'}}>
              
              Escrever depoimento
            </button>

            <button style = {{
              background: '#D9E6F6', 
              color: '#2E7BB4', 
              alignItems: 'center',
              padding: '9px 12px',
              position: 'static',
              width: '160px',
              height: '32px',
              fontFamily: 'Verdana', 
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              marginTop: '4px',
              marginLeft: '8px',
              marginBottom: '8px'}}>
              
              Deixar um scrap
            </button>

            

              <div>
                <input 
                  placeholder = "Qual vai ser o nome da sua comunidade?" 
                  name = "title" 
                  aria-label = "Qual vai ser o nome da sua comunidade?"
                  type = "text"
                />
              </div>

              <div>
                <input 
                  placeholder = "Insira uma URL para usarmos de capa" 
                  name = "image" 
                  aria-label = "Insira uma URL para usarmos de capa"
                />
              </div>
            </form>
          

        </Box>
      </div>
      
      <div className = "profileRelationsArea" style = {{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className = "smallTitle">
            Comunidades ({comunidades.length})
          </h2>
            
          <ul>
            {!verComunidades && comunidades.slice(0, 3).map((itemAtual) => {
              return (
                <li key = {itemAtual.id}>
                  <a href = {`https://www.google.com/search?q=${itemAtual.title}`}>
                    <img src = {itemAtual.imageUrl} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
                
              )
            })}

            {verComunidades && comunidades.map((itemAtual) => {
              return (
                <li key = {itemAtual.id}>
                  <a href = {`https://www.google.com/search?q=${itemAtual.title}`}>
                    <img src = {itemAtual.imageUrl} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
                
              )
            })}
          </ul>

          <hr />

          <button style = {{
              background: 'transparent', 
              color: '#2E7BB4', 
              fontFamily: 'Verdana', 
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              textAlign: 'left',
              paddingLeft: '1px'}} 
              
              onClick = {
              function handleVerComunidades(){
                if(verComunidades) {
                  setVerComunidades(false);
                }

                else {
                  setVerComunidades(true);
                }
              }
            }>
            
              Ver todos
            </button>

        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className = "smallTitle">
            Meus amigos ({pessoasFavoritas.length})
          </h2>
            
          
          <ul> 
            {!verTotalDeItens && pessoasFavoritas.slice(0, 6).map((itemAtual) => {
                return (
                  <li key = {itemAtual}>
                    <a href = {`/users/${itemAtual}`}>
                      <img src = {`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>

                  </li>
                )
            })}

              {verTotalDeItens && pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key = {itemAtual}>
                    <a href = {`/users/${itemAtual}`}>
                      <img src = {`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}

            </ul>

            <hr/>

            <button style = {{
              background: 'transparent', 
              color: '#2E7BB4', 
              fontFamily: 'Verdana', 
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              textAlign: 'left',
              paddingLeft: '1px'}} 
              
              onClick = {
              function handleVerTotalDeItens(){
                if(verTotalDeItens) {
                  setVerTotalDeItens(false);
                }

                else {
                  setVerTotalDeItens(true);
                }
              }
            }>
              Ver todos
            </button>
            
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBox title = 'Seguidores' items = {seguidores}/>
        
      </div>
     
    </MainGrid>
    </>
  )
}
