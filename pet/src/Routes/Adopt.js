import React, {Component} from 'react';
import axios from 'axios';

class adopt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/shelters')
      .then(res => {
        console.log('shelters frontend', res.data.data)
        this.setState({shelter: res.data.data})
      })
  }

  render() {
    const {shelter} = this.state;
    let mapped = shelter.map((el) => {
      return <p>
        <span>
          Shelter:
        </span>
        {" "}
        {el.name}
        <span>
          shelter address:
        </span>
        {" "}
        {el.address}
      </p>
    })
    console.log('dog shelters in render', shelter)
    return (
      <div >
        <div className='adopt'>
          Contact these shelters:{mapped}

        </div>
      </div>
    )
  }
}

export default adopt;