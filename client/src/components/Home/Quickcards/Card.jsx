import './card.css'




const Card = ({mealData}) => {

  const { name, image, content} = mealData

  console.log(mealData);

  return (

          <div className="inside-card">
            <div className="inside-card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-txt">
                <div className="card-heading">{name}</div>
                <p>{content}</p>
            </div>
          </div>
    
  )
}

export default Card