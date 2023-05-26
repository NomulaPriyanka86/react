// the work of app component is to load all the other custom created components inside the DOM
//It will work in the sequence that they are specified in the app component
//this is the component required for react so we use with extension .js

import Header from "./components/header.jsx";
import Header1 from "./components/header1.jsx";
import Destucture from "./components/destructure.jsx";
import HeaderStyles from "./components/headerStyles.jsx";
function App() {
  return (
    <>
 <Header text="Feedback UI.." />
 <Header1 text="Feedback UI.." bgcolor="rgba(0,0,0,0.4)" textColor="pink"/>
 <Destucture text="Feedback UI.." bgcolor="rgba(0,0,0,0.4)" textColor="pink" />
<HeaderStyles text="Feedback UI.." bgcolor="rgba(0,0,0,0.4)" textColor="pink" num={10+10} string="10+10" />
</>
  );
}

export default App;
