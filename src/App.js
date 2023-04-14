import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'

function App() {
  return (
      <div style={{margin: '5%'}}>
        <Panel header="Ovo je CMS dio" className="custom-panel">
          Ovo je CMS dio!
        </Panel>
      </div>

  );
}
export default App;
