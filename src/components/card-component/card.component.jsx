import "./card.styles.css";

export default function Card(props){
    return (
        <div className="card"  key={props.monster.id}>
        <img src={`https://robohash.org/${props.monster.id}?set=10&size=180x180`} alt="monster"/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>);
}