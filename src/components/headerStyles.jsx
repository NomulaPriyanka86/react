import PropTypes from 'prop-types';

function HeaderStyles({text,brandName,bgcolor,textcolor,num,string}){ 
const headerStyles={
    background:bgcolor,
    color:textcolor,
}
    return(
     
        <header style={headerStyles}> 
            <div className="container">
            <h2>{text}{num}{string}</h2>
            </div>
        </header>
        
    )
} 

HeaderStyles.propTypes={
    text:PropTypes.string,
}

HeaderStyles.defaultProps={
    text:"this is default props",
    brandName:"priyanka",
}
export default HeaderStyles;

//for single styles    <header style={{background:bgcolor,color:textcolor}}>
