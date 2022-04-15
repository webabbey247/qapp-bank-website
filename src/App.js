import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import {GlobalStyle} from "GlobalCss";
import {NoMatch, Homepage} from "pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
