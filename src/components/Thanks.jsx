import React from 'react';
import "./Thanks.css";
import {
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from 'react-icons/bs';

const emojiData = {
  unsatisfied: <BsEmojiFrownFill/>,
  neutral: <BsEmojiNeutralFill/>,
  satisfied: <BsEmojiSmileFill/>,
  verySatisfied: <BsEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Falto pouco...</h2>
        <p>A sua opnião é muito importante, em breve você ganhará um cupom de 10%
          de desconto para sua próxima compra.
        </p>
        <p>Para concluir sua avalição clique no botão enviar abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação {data.name}: </h3>
        <p className="review-data">
          <span>Satisfação do produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário: {data.comment}</span>
        </p>
    </div>
  )
}

export default Thanks
