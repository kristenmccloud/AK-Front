import React, { Component } from 'react';
import { getApartment } from '../api'


class Apartment extends Component {
  constructor(props){
    super(props)

    this.state = {
      aptInfo: [],
      longDesc: ""
    }
  }
  render() {
    let stillLoading;
    if(this.state.aptInfo.length == 0){
      stillLoading = true
    }else{
      stillLoading = false
    }
    let { aptInfo,longDesc } = this.state
    return (
      <div className="pageviewContainer">
        {!stillLoading && <div className="pageview">
          <div>
            <img className="pageview" src="https://png.pngtree.com/element_origin_min_pic/20/16/02/0156af774ba6864.jpg" />
            <div id="contactInfo">
              <h4>Contact {aptInfo.manager_name} today!</h4>
              <p>{`Contact: ${aptInfo.phone}`}</p>
              <p>{`Hours: ${aptInfo.hours}`}</p>
            </div>
          </div>
          <div className="pageviewInfo">
            <div>
              <h1 className="text-info">{`${aptInfo.street_a} at ${aptInfo.street_b}`}</h1>
              <h4>{`${aptInfo.city}, ${aptInfo.state} ${aptInfo.postal_code}, ${aptInfo.country}`}</h4>
              <p>{`${longDesc}`}</p>
            </div>
          </div>
        </div>}
        {stillLoading && <img id="loading" src="https://www.pedul.com/images/loading.gif" />}
      </div>
    );
  }

  componentDidMount() {
    let info = this.getLongDesc()
    getApartment(this.props.match.params.id)
    .then(apt => {
      this.setState({aptInfo: apt,longDesc: info})
    })
  }

  getLongDesc = () => {
    return(
      "Lorem ipsum dolor amet health goth shaman deep v, XOXO art party mlkshk gochujang. Fixie PBR&B knausgaard, air plant four loko hoodie marfa aesthetic. Pok pok chambray cornhole jianbing readymade beard knausgaard. Retro raw denim raclette tbh edison bulb pitchfork. Pour-over artisan polaroid glossier etsy brooklyn. Kickstarter pour-over offal, vice single-origin coffee snackwave cornhole chia locavore gastropub hexagon PBR&B. Prism yuccie godard, glossier synth kickstarter craft beer PBR&B humblebrag ethical.Adaptogen affogato PBR&B, food truck drinking vinegar polaroid pork belly. Pour-over hoodie gochujang, scenester four loko yuccie literally. Master cleanse poutine snackwave adaptogen. Migas next level swag bitters, bicycle rights live-edge scenester raw denim. Butcher stumptown cloud bread food truck narwhal mixtape art party chillwave heirloom fanny pack yr godard.Bushwick semiotics gochujang hoodie taxidermy vaporware lo-fi pickled trust fund pitchfork PBR&B tilde chambray everyday carry craft beer. Cred air plant thundercats woke distillery. Organic iceland sartorial semiotics marfa slow-carb ugh. Microdosing shaman celiac, tilde food truck twee sustainable fam pork belly mumblecore franzen. Freegan bespoke pork belly aesthetic thundercats. Skateboard pok pok gochujang, mixtape meggings before they sold out meh. Sustainable VHS taxidermy taiyaki, cardigan dreamcatcher craft beer yuccie yr af listicle before they sold out kickstarter biodiesel."
    )
  }
}

export default Apartment;
