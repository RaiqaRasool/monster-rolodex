import Card from "../card-component/card.component";
import "./card-list.styles.css";

export default function CardList(props){
  return (<div className="card-list">
       {props.monsters.map(monster=><Card monster={monster}/>)}
  </div>);

}