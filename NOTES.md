Questions for Alister:
-are classes like objects?
-`super`
-props and dynamic state?
-database connection?
-api?

About React
-Component-Based, puts code into components, reuses components for DRY code
-Declarative, what the end result is as oposed to its function
-Data Model Synchronization, built in functionality for data Synchronization
-Virtual DOM, more effiecient than other frameworks
 -Creates a virtual DOM then
 -Compares Actual DOM to Virtual DOM then
 -Reconciliation: automatically recauclates changes 
 -REPEAT
-Single Page Applications
-JSX 
-Just a library
-VR!! ??

App template creator:

  `create-react-app` tool
  use command:
  `npx create-react-app help-queue` 
  -npx also bundles npm inside it
  -will still use npm for managing packages
    NOTE: using this command automatically downloads latest REACT version
    If you need to load an earlier version of REACT for compatability use:
      `npm install --save-exact react-scripts@3.2.0` to specify version
  Basic Template Settup And Notes
    -delete two app files
      -App.css
      -App.test.js
    -put App.js to /components folder
    -update index.js with move
    -delte logo.svg
    -Package.json 
      three depedencies
      -react: core library
      -react-dom: library for dom interaction
      -react-scripts: has some create scripts
      4 NPN commands
      -start : builds a webpack app, hidden
      -build
      -test
      -eject *** creates problems
      Also has yarn, but we use npm
    -Index.js 
      -ReactDOM.render() method calls App component
      -renders this in the root div id
      -App.js is what gets rendered
    
Components:
  -Functional Component
    A function that returns JSX code stored in a div
    -must export components inorder to use them
    -cannot change state, static
    -use whenever possible to keep thing clean
  -Class
    custom class
    -uses the `super` javascript term
    -`this.state = {}` what is a state?
    -must include `render()`
    -Child, Parent, Sibling relationships
JSX
  App.js
  -this is the Parent Componet of the App, if you add anything it has to be added to this file
  put expression inside {} just like Template Literal
  comments must be in {} avoid if possible

REACT PLANING
  Break UI into Component Hierarchy with differnt jobs
  -Filter: component (find something in the database)
  -searchbar: takes user input
  -ProductTable: displays filteralbe date
  -ProductCategoryRow: displays heading for each category
  -ProductRow: displays product in category

  Filterable
    -SearchBar
    -ProductTable
      -ProductCategoryRow
      -ProductRow
  Building a Static Site
    build components
    pass data using props : a way of passing data from parent to child
    build top down or bottom up

Props 
  Passing Data between components
  -include `import PropTypes from "prop-types"`
  -use JSX tags to do this
  -sort of a variable that's inside the Class name 
  -declare them in the Parent
  -pass props through the function to access it with dot
  `function Ticket(props){}`
  -dot notation to access them in the child `{prop.name}`
  -Props are read only
  -Assign strict typing because you are passing around different types of variables and it can mess things up
    `names: PropTypes.string` declares it a string
  -declare propTypes with LOWERCASE!!!!!!
    `ticket.proTypes = {}` NOTE LOWERCASE*******
    -keyvalue pairs:
    `names: PropTypes.string.isRequired` isRequired makes unable to be Null
    `ProTypes.array`
    `ProTypes.bool`
    `ProTypes.func`
    `ProTypes.number`
    `ProTypes.object`
    `ProTypes.string`
    `ProTypes.element`
    `ProTypes.arrayOf(PropTyes.number)` declare whats in an array (or object)
    `ProTypes.instanceOf(ExampleClassName)` declare it an instance of a class
  Looping with TicketList files
    map() loops through masterTicketList 
    makes a new Ticket on each itteration
    `{masterTicketList.map((ticket, indext)) =>`
      -takes an index and prop ticket
      -add a key value to each ticket corsponding to the current index MUST HAVE UNIQUE KEY









