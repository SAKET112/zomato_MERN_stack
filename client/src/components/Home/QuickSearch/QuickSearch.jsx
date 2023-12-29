import './QuickSearch.css';
import Card from '../Quickcards/Card'

const mealTypes = [
  {
      "_id": "1",
      "name": "Breakfast",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/D4d5Jpg/shutterstock-1154073754-2x.png"
  },
  {
      "_id": "2",
      "name": "Lunch",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/vjrnsqs/shutterstock-1130181932-2x.png"
  },
  {
      "_id": "3",
      "name": "Dinner",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/dGXS2J3/shutterstock-476864884-2x.png"
  },
  {
      "_id": "4",
      "name": "Snacks",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/RHCwb6F/shutterstock-351721442-2x.png"
  },
  {
      "_id": "5",
      "name": "Drinks",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/GvSLk85/shutterstock-305270834-2x.png"
  },
  {
      "_id": "6",
      "name": "NightLife",
      "content": "Start your day with exclusive breakfast options",
      "image": "https://i.ibb.co/Nyv7fL7/shutterstock-1304064250-2x.png"
  }
]

const QuickSearch = () => {
  return (
    <div>
        <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <div className="cards">
            {
              mealTypes.map(item => (
                
                  <Card mealData = {item} key={item._id} />
                
              ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default QuickSearch