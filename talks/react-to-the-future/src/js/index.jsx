const React = require('react');
const App = require('./components/App.jsx');
const SlideManager = require('./components/SlideManager.jsx');
const SlideList = require('./components/SlideList.jsx');
const Welcome = require('./components/Welcome.jsx');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="slide" path="slide/:setIndex/:slideIndex" handler={SlideManager}/>
    <Route name="list" path="list" handler={SlideList}/>
    <DefaultRoute handler={Welcome}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.body);
});
