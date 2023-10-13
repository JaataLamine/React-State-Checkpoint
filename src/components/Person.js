import { Component } from "react";

// Variables for inline style
const style = { maxWidth: "650px" };
const styleAlert = { width: "650px", fontSize: "1.3rem" };
const styleBio = { fontSize: "1.1rem" };

/**
 * description: The class base component mange a state of show to display or not the information of the person
 * @param {string} fullName
 * @param {string} bio
 * @param {string} imgSrc
 * @param {string} profession
 * @param {boolean} shows
 * @param {number} date
 */
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Lamine Diatta",
      bio: "Lamine Diatta is a Full Stack JS Developper at Google with 1 years helping people with optimizing web app. Specializing in creating web app, Lamine uses that experience to deals with the visible parts of a website that users interact with, and back-end, which handles the behind-the-scenes data and functionality.",
      imgSrc: require("../images/img.jpg"),
      profession: "Full Stack JS Developper",
      shows: false,
      date: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // function to toggle the state of shows
  handleClick() {
    this.setState({ shows: !this.state.shows });
  }

  // We call componentDidMount to set a timer if the component is mounted
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // We call componentWillUnmount to reset the timer if the component is unmounted
  componentWillUnmount = () => {
    if (!this.state.shows) {
      clearInterval(this.timerID);
    }
  };

  render() {
    const { fullName, bio, imgSrc, profession, shows, date } = this.state;

    return (
      <div className="person">
        <button
          type="button"
          className="btn btn-primary button"
          onClick={this.handleClick}
        >
          {!shows ? "Show" : "Hide"} person
        </button>
        {shows && (
          <div className="card mb-3" style={style}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={imgSrc}
                  alt="my profile"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{fullName}</h4>
                  <h5 className="card-text">{profession}</h5>
                  <p className="card-text" style={styleBio}>
                    {bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={styleAlert} class="alert alert-info" role="alert">
          {shows ? (
            <p>The last component was mounted since: {date} secondes.</p>
          ) : (
            <p>The last component was umounted.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Person;
