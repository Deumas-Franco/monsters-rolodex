import './search-field.css';
const SearchField = (props) => (
    <input type='search' className='search' placeholder={props.placeholderText} onChange={props.handleChange}/>
);

export default SearchField;