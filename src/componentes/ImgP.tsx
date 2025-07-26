import React, { useState } from 'react';
import './ImgP.css';

type ImgPProps = {
  descricao: string;
  imagem: string;
  likes: number;
};

const ImgP: React.FC<ImgPProps> = ({ descricao, imagem, likes }) => {

  const [numero, mudarNumero] = useState(likes);
  const aumentar = () => {
    mudarNumero(numero+1);
  }

  return (
    <div className="imgp-card">
      <div className="imgp-image-wrapper">
        <img src={imagem} alt={descricao} className="imgp-image" />
      </div>
      <div className="imgp-content">
        <p className="imgp-description">{descricao}</p>
        <button className="imgp-likes" onClick={aumentar}>
          ❤️ {numero}
        </button>
      </div>
    </div>
  );
};

export default ImgP;
