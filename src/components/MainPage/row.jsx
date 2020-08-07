import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import getMovies from "../../axiosreq/MoviesAxios.js";
import "./row.css";
import { Link } from "react-router-dom";

class element extends Component {
  constructor() {
    super();
    this.state = { movies: {}, redirect: undefined };
  }

  async componentDidMount() {
    const movies = await getMovies(parseInt(this.props.name), this.props.query);
    movies.images = movies.images.map((link, index) => (
      <div className="image" key={index}>
        <Link
          to={{
            pathname: "/movie",
            state: {
              movie: movies.titles[index],
            },
          }}
          key={index}
        >
          <img
            src={link}
            alt="not found"
            onMouseOver={() => this.onHoverIn(index)}
            onMouseLeave={this.props.callBackOut}
          />
          <h4 className="dis">
            {movies.titles[index].title || movies.titles[index].original_name}
          </h4>
        </Link>
      </div>
    ));
    this.setState({ movies });
  }

  onHoverIn = (index) => {
    this.props.callBackIn(this.state.movies.titles[index].backdrop_path);
  };

  render() {
    if (this.state.redirect === undefined) {
      return (
        <Fragment>
          <h3 className="title">{this.props.title}</h3>
          <div className="flex-container">{this.state.movies.images}</div>
        </Fragment>
      );
    } else {
      return;
    }
  }
}

export default element;
