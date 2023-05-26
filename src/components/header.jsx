import PropTypes from 'prop-types';

function Header(props){
    return(
       
        <header> 
      
            <h2>{props.text}{props.brandName}</h2>
        </header>

    )
}
Header.propTypes={
    text:PropTypes.string,
}

Header.defaultProps={
text:"this is default props",
brandName:"priyanka",
 }
export default Header;

//for single styles    <header style={{background:bgcolor,color:textcolor}}>
