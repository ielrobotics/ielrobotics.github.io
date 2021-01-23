import {
  Redirect,
  Route,
  Switch,
  HashRouter as Router,
} from "react-router-dom";
import Admin from "./components/admin/sign in/Admin.js";
import Home from "./components/Home.js";
import { AuthProvider } from "./Auth/Auth";
import Panel from "./components/admin/panel/Panel.js";
import PrivateRoute from "./routes/PrivateRoute";
import React from "react";
import fire from "./firebase/fire";
const db = fire.firestore();
function App() {
  const [news, setNews] = React.useState([]);
  const [team, setTeam] = React.useState([]);
  const [lang, setLang] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      const newsCollection = await db.collection("news").get();
      setNews(
        newsCollection.docs
          .map((doc) => {
            return doc.data();
          })
          .sort((a, b) => b.Date - a.Date)
      );

      const teamCollection = await db.collection("team").get();
      setTeam(
        teamCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchData();
  }, []);
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute
            exact={true}
            path="/panel"
            component={(props) => (
              <Panel
                {...props}
                news={news}
                setNews={setNews}
                team={team}
                setTeam={setTeam}
                lang={lang}
                setLang={setLang}
              />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <Home
                {...props}
                news={news}
                setNews={setNews}
                team={team}
                setTeam={setTeam}
                lang={lang}
                setLang={setLang}
              />
            )}
            exact={true}
          />
          <Route path="/admin" component={Admin} exact={true} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
