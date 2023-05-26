import PropTypes from 'prop-types';

function Destucture({text,brandName,bgcolor,textColor,num}){
    return(
       
        <header style={{background:bgcolor,color:textColor}}> 
        <div>
        <h2>{text}{brandName}</h2>
        </div>   
        </header>

    )
}

Destucture.defaultProps={
text:"this is default props",
brandName:"priyanka",
 }
export default Destucture;

