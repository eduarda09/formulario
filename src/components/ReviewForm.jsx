import React from 'react';
import './ReviewForm.css';
import {
         BsEmojiFrownFill,
         BsEmojiNeutralFill,
         BsEmojiSmileFill,
         BsEmojiHeartEyesFill,
 } from 'react-icons/bs';

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required checked ={data.review === "unsatisfied"} onChange={(e)=>updateFieldHandler("review",e.target.value)}/>
          <BsEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required checked ={data.review === "neutral"} onChange={(e)=>updateFieldHandler("review",e.target.value)}/>
          <BsEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required checked ={data.review === "satisfied"} onChange={(e)=>updateFieldHandler("review",e.target.value)} />
          <BsEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required checked ={data.review === "very_satisfied"} onChange={(e)=>updateFieldHandler("review",e.target.value)}/>
          <BsEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea name="comment" id="comment" placeholder="Como foi a sua experiência com o produto..." required
        value={data.comment || ""}
        onChange ={(e)=>updateFieldHandler("comment",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm;
