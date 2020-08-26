import React, { Component } from "react";
import { Admin, Resource,  } from "react-admin";
import {UserList, UserEdit} from "./users";
import GooglePanelInner from './Login'
import jsonServerProvider from "ra-data-json-server";


const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
    <>
      <Admin loginPage={GooglePanelInner} dataProvider={dataProvider} >
        <Resource name="users" list={UserList} edit={UserEdit} />
      </Admin>
    </>
    );
  }
}
export default App;