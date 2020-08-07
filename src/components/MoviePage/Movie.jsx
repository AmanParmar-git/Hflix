import React, { Component } from "react";
import "./Movie.css";
import "font-awesome/css/font-awesome.css";
import { getDetails, getVideo } from "../../axiosreq/axiosGetDetails";
import "bootstrap/dist/css/bootstrap.css";

class MoviePage extends Component {
  state = {
    movie: [],
    link: "",
    download: false,
    torrents: [],
    loading: true,
  };

  async componentDidMount() {
    let { data } = await getDetails(this.props.location.state.movie);

    this.setState({ movie: data });
    let link = await getVideo(this.state.movie);
    this.setState({ link });
  }

  getBG = () => {
    if (this.state.movie.backdrop_path) {
      return {
        backgroundImage: `url(${
          "https://image.tmdb.org/t/p/w1280" + this.state.movie.backdrop_path
        })`,
      };
    } else {
      return {
        backgroundcolor: "#111",
      };
    }
  };

  getGeners = () => {
    if (this.state.movie.genres) {
      return this.state.movie.genres.map((genre) => genre.name + " | ");
    }
  };

  getDate = () => {
    if (this.state.movie) {
      if (this.state.movie.release_date) {
        return (
          <h4 className="white">
            Release Date : {this.state.movie.release_date}
          </h4>
        );
      } else {
        return (
          <h4 className="white">
            First Air Date : {this.state.movie.first_air_date}
          </h4>
        );
      }
    }
  };

  getTitle = (title, name) => {
    if (title) {
      if (title.length > 15) {
        return title.substring(0, 15) + "...";
      } else return title;
    }
    if (name) {
      if (name.length > 15) {
        return name.substring(0, 15) + "...";
      } else return name;
    }
  };

  getOverview = (overview) => {
    if (overview) {
      if (overview.length > 350) {
        return overview.substring(0, 350) + "...";
      } else return overview;
    }
  };

  render() {
    const { title, name, overview } = this.state.movie;
    return (
      <div className="main" style={this.getBG()}>
        <div className="float">
          <div className="leftdiv">
            <h3
              style={{
                color: "wheat",
                marginTop: "-100px",
                marginBottom: "30px",
                fontSize: "80px",
              }}
            >
              {this.getTitle(title, name)}
            </h3>
            <h3 className="Overview white">Overview :</h3>
            <p style={{ fontFamily: "monospace", fontSize: "13px" }}>
              {this.getOverview(overview)}
            </p>
            <h4 className="Genres white">Genres :</h4>
            <p style={{ fontFamily: "monospace", fontSize: "14px" }}>
              | {this.getGeners()}
            </p>
            <br></br>
            <br></br>
            <h4 className="Trailer white">
              Trailer :
              <a
                href={this.state.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-play m-2" aria-hidden="true">
                  {" "}
                </i>
              </a>
            </h4>
            <br></br>
            <h4 className="white">
              HomePage :<span> </span>
              <a
                href={this.state.movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-home" aria-hidden="true">
                  {" "}
                </i>
              </a>
            </h4>
            <br></br>
            {this.getDate()}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
