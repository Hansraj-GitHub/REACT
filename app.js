        
import React, { createElement } from "react";    
import ReactDOM from "react-dom/client"; 


const Title = ()  =>  (
    <h1 className="head" tabIndex="1">
        React using JSX 
    </h1>
);

const HeadingComponents = () => (
    <div id="container">
        <Title /> 
        <h1 className="heading"> this is react funtional components</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);




