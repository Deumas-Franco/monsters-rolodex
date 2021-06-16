import Card from '../card/card';
import './card-list.css';

const CardList = (props) => (
    <div className="card-list">
        {
            props.monsters.map(monster => <Card key={monster.id} monster={monster}/> )     
        }
    </div>
);

export default CardList;

