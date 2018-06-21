import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      breedArray: [],
      gender: "",
      imgURL: [],
      specificBreeds: [],
      open: false,
      location: "",
      descriptions: "",
      age: "",
      favorite: []
    };
  }

  //get images

  componentDidMount() {
    // this.handleFavorite()
    this.handleBreedList();
    this.handleDogInfo();
  }

  //handle breed option
  handleBreedChange = e => {
    this.setState({breeds: e.target.value, specificBreeds: `https://dog.ceo/api/breed/${e.target.value}/images/random`})
  }

  handleBreedList = () => {
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(response => {
        console.log("The response: ", response.data.message)
        this.setState({breedArray: response.data.message});
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };

  //multiple images

  handleImages = () => {
    let arr = [];
    for (var i = 0; i <= 49; i++) {
      axios
        .get(this.state.specificBreeds)
        .then(response => {
          arr.push(response.data.message)
        })
        .then(() => {
          if (arr.length === 49) {
            this.setState({imgURL: arr})
            console.log('dogs',arr)
          }
        })
        .catch(err => {
          console.log("error fetching image");
        });
    }
  }

  //handle single profile image

  handleDogInfo = () => {
    axios
      .get('http://api.petfinder.com/pet.find?format=json&location=11379&animal=dog&size=S&key=203213e6abda7e78da0b4e1fa7969ac8')
      .then(response => {
        console.log('petfinder obj', response)

        this.setState({location: response.data.petfinder.pets.pet[0].contact.city.$t, age: response.data.petfinder.pets.pet[0].age.$t, gender: response.data.petfinder.pets.pet[0].sex.$t, descriptions: response.data.petfinder.pets.pet[0].description.$t})
      })
      .catch(err => {
        console.log('handleDogInfo response err', err)
      })
  }

  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };

  render() {
    const {
      breedArray,
      imgURL,
      open,
      location,
      descriptions,
      age,
      gender
    } = this.state;
    // console.log('imgURL:', imgURL) console.log(breedArray)

    let mappedImages = imgURL.map(el => {
      return <img className="dogImages" alt="" onClick={this.onOpenModal} src={el}/>
    })

    return (
      <div className='home'>

        <div className="filter-nav">
          <br/>
          <span>
            Choose dog by Breed:
          </span>
          <select className="filter-options" onChange={this.handleBreedChange}>
            {breedArray.map((breeds, key) => (
              <option key={key} value={breeds}>
                {breeds}
              </option>
            ))}
          </select>
          {" "}

          <button onClick={this.handleImages}>
            Retrieve Dog
          </button>

          <br/>

          <Modal open={open} onClose={this.onCloseModal} center>
            <div>

              <p>
                <br/> {" "}
                <span className="span">
                  Decription
                </span>
                : {descriptions}
                {" "}
                <br/>
                <span className="span">
                  Age: {age}
                </span>
                <br/>
                <span className="span">
                  Gender: {gender}
                </span>
                <br/>
                <span className="span">
                  Location:{location}
                </span>
                <br/>
                <img src={imgURL[0]} className="dog-profile-image"/>
              </p>

              <div className='modal-options'>
                <button className="filter-options">
                  <Link to="">
                    Share
                  </Link>
                </button>
                {" "}
                <button>
                  <Link to="/adopt">
                    Find Shelter
                  </Link>
                </button>

                {" "}

                <button onClick={this.handleFavorite} className="filter-options">
                  Favorite
                </button>

              </div>
            </div>
          </Modal>
          ---
          <br/> {mappedImages}
        </div>
        <br/>
        <br/>
        <div></div>

      </div>

    )
  }
}

export default Home;