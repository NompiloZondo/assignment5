import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Questionaire from "./Questionaire";
import Createq from "./Createq";
import Edit from "./Edit";
import Delete from "./Delete";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Dashboard/>}/>
            <Route path="/questions" element={<Questionaire/>}/>
            <Route path="/create" element={<Createq/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/delete/:id" element={<Delete/>}/>
        </Routes>
    </Router>
  )
}

export default App