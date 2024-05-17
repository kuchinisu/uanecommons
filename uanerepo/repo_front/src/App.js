import store from "./store";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/err/Error404";
import Home from "./containers/pages/Home";
import Login from "./containers/auth/Login";
import Imagen from "./containers/pages/Imagen";
import SubirFile from "./containers/pages/SubirFile";
import Imagenes from "./containers/pages/Imagenes";
import Signup from "./containers/auth/Signup";
import Documentos from "./containers/pages/Documentos";
import Documento from "./containers/pages/Documento";
import Audios from "./containers/pages/Audios";
import Audio from "./containers/pages/Audio";



function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
          <Route path="/imagen/:slug" element={<Imagen/>}/>
          <Route path="/documento/:slug" element={<Documento/>}/>
          <Route path="/audio/:slug" element={<Audio/>}/>


          <Route path="/subir_archivo" element={<SubirFile/>}/>

          <Route path="/imagenes" element={<Imagenes/>}/>
          <Route path="/documentos" element={<Documentos/>}/>
          <Route path="/audios" element={<Audios/>}/>
          
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;