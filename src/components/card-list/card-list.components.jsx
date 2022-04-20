import Card from '../card/card.component' 
import './card-list.style.css'
const CardList = (props) => {
    const {monsters} = props
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster,idx) => <Card 
                                     key = {idx}
                                    id = {monster.id}
                                    name = {monster.name} 
                                    email = {monster.email}
                                />
                )
            }
        </div>
        
    )
}
export default CardList