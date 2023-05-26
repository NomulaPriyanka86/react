import PropTypes from 'prop-types';

function Header1(props){
    return(
       
        <header style={{background:props.bgcolor,color:props.textColor}}> 
        <div>
        <h2>{props.text}</h2>
        </div>
              
        </header>

    )
}
Header1.propTypes={
    text:PropTypes.string,
}

Header1.defaultProps={
text:"this is default props",
brandName:"priyanka",
 }
export default Header1;

//for single styles    <header style={{background:bgcolor,color:textcolor}}>
