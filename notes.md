## Create-React-App

- used for creating base of app (webpack & babel set up for you!) & comes w/ ESlint
- command line:
  create-react-app

## Senior phase

- e-commerce: group project (3 days)
- stackathon: solo or pair project (5 days?)

## IRL

- semantic UI / web designers used for styling in real-world teams; as a web devloper, you rarely do front-end yourself

## app structure

- deciding whether to break apart components & multiple reducers (in separate files)... makes error-handling easier
- import combinedReducer from 'redux' to do this ^^
- ideal: 1 reducer per component
- can do axios req inside an action creator --> dispatch to reducer
- pro tip: redux DevTools!!! need to put a line of code in to work
- using VSC: debug back-end w/ VSC debugger
- Fork: GUI for git!
- use <Fragment> rather than <div> as a wrapper before rendering! import {Fragment} from 'react
