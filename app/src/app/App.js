import ContextProvider from "./Context";
import "./app.scss";
import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Grid container>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </ContextProvider>
  );
};

export default App;
