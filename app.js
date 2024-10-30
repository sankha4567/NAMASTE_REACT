/*
 <div id="parent">
  <div id="child">
  <h1> i am header <h1>
 </div>
 </div>

*/ 

const parent=React.createElement("div",
  {id:"parent"},[
  React.createElement("div",
  {
  id:"child"
},[
  React.createElement("h1",{
 
},"i am a header"),
React.createElement("h2",{
 
},"i am a header2"),
]),

React.createElement("div",
  {
  id:"child"
},[
  React.createElement("h1",{
 
},"i am a header3"),
React.createElement("h2",{
 
},"i am a header4"),
]),

]);

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);