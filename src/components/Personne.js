class PersonProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: 'John Doe',
        bio: 'Description de la personne',
        imgSrc: 'url-de-l-image.jpg',
        profession: 'Développeur Web',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateElapsedTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateElapsedTime = () => {
    this.setState((prevState) => ({
      elapsedTime: prevState.elapsedTime + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { Personne, show, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{Personne.fullName}</h1>