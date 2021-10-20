import React from "react";
import PropTypes from 'prop-types';
import Star from "./star";

class StarRating extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            starsSelected: 0,
        };
        //this.onClick = this.onClick.bind(this);
        //you need this if you just want to have a normal function in onClick
        //onClick={this.onClick}
    }

    change(starsSelected){ 
        //console.log('clicked');
        //console.log(this.state.selected);
        this.setState({starsSelected});
    }
    render(){
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        const starsRatingArray = Array(totalStars).fill(null).map((star,i) => {
            return (<Star key={i}
                selected={i<starsSelected}
                 onClick={() => this.change(i+1)}/>)
        })
        //console.log(starsRatingArray);
        return (
            <div>
                {starsRatingArray}
                <br />
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number,
}

StarRating.defaultProps = {
    totalStars: 5,
}

export default StarRating