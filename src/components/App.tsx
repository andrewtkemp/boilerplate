import * as React from "react";

export interface AppProps { name:string }

export const App = (props: AppProps) => <h1>Hello World! My name is {props.name} </h1>;