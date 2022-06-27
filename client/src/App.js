import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/quotes").then((response) => {
      this.setState({
        quotes: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <h1>Inspiring sports quotes</h1>
        {this.state.quotes.map(({ id, text }) => (
          <blockquote key={id}>{text}</blockquote>
        ))}
      </>
    );
  }
}

export default App;
