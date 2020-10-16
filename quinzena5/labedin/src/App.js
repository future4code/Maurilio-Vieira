import React from 'react';
import './App.css';
import imagemPerfil from './img/perfil.png';
import imagemLabenu from './img/labenu.png';
import imagemCodigo from './img/codigo.jpg';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem ={imagemPerfil} 
          nome="Maurílio" 
          descricao="Oi, eu sou o Maurílio. Sou um dos alunos, da primeira turma noturna, de Front-End da Labenu. Estudei alguns semestres, numa faculdade, tranquei e estou aqui. Conheço um pouco de Java e agora estou vendo JavaScript e React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
         rotulo= "E-mail:"
         valor= "meuemail@mail.com"
      />

      <CardPequeno
          rotulo= "Endereço:"
          valor= "Avenida Fake da Silva, n. 51, Operários, BH MG."
      />

      <div className="page-section-container">
        <h2>Experiências acadêmicas</h2>
        <CardGrande 
          imagem={imagemLabenu}
          nome="Labenu" 
          descricao="Curso prático com ênfase no Front-End, HTML5, CSS5, JS, React." 
        />
        
        <CardGrande 
          imagem={imagemCodigo}
          nome="Curso presencial tecnólogo (2019/2020)" 
          descricao="Análise e Desenvolvimento de Sistemas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
