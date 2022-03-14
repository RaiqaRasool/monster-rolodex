import "./search-field.styles.css";
export default function SearchField(props)
{
    return (<input className="search-field" type="search" placeholder={props.placeholder} onChange={props.handleChange}></input>);

}