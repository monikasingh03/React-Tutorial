import React from "react";
import ReactDOM from "react-dom/client";

    let Header =()=>(<h1>This is React Element inside function</h1>);
   let root =ReactDOM.createRoot(document.getElementById("root"));

   let Functional=()=>
   {
      return (<div>
         <h1>This is functional component</h1>
       
       {Header()}
      </div>);
   }
   root.render(<Functional/>)