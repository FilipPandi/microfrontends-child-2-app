import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'

import { Image } from 'primereact/image';

import {Link} from "react-router-dom";
import {Button} from "primereact/button";

function App() {
  return (
      <React.Fragment>
        <Panel style={{margin: '4%'}} header="Ovo je CMS dio" className="custom-panel">

            <h2><Link className={"link"} to="/com1"><Button severity="secondary" icon="pi pi-desktop" label={"Component 1 - Routing"}/></Link></h2>
            <div style={{paddingTop: "2%"}}></div>

          Ovo je CMS dio!
        </Panel>
          <Image style={{margin: '1%'}} src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"  alt="Image" preview width="100%" />
      </React.Fragment>

  );
}
export default App;
