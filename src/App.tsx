import React from 'react';
import ImgP from './componentes/ImgP';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Galeria Bonita</h1>
        <h2>Explore imagens com descrição e likes</h2>
        <nav className="nav-menu">
          <button>Home</button>
          <button>Favoritos</button>
          <button>Sobre</button>
          <button>Contato</button>
        </nav>
      </header>

      <main>
        <section className="imgp-gallery">
          <ImgP
            likes={34555}
            descricao="Pôr do sol magnífico na praia"
            imagem="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          />
          <ImgP
            likes={3455}
            descricao="Montanhas cobertas de neve"
            imagem="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          />
          <ImgP
            likes={999}
            descricao="Cidade iluminada à noite"
            imagem="https://images.unsplash.com/photo-1494526585095-c41746248156"
          />
          <ImgP
            likes={998}
            descricao="Cidade iluminada à dia"
            imagem="https://images.unsplash.com/photo-1494526585095-c41746248156"
          />
          <ImgP
            likes={997}
            descricao="Cidade iluminada à tarde"
            imagem="https://images.unsplash.com/photo-1494526585095-c41746248156"
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Galeria Bonita — Feito com ❤️ por você</p>
      </footer>
    </div>
  );
}

export default App;
