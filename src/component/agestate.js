import React , {Component} from 'react' ;

import Party from '../party-popper.jpeg' ;

class AgeState extends Component {

    time(date){
        console.log(date) ;
        let today = new Date().getTime() ;
        let previousday = new Date(date).getTime() ;
        let diff = Math.abs(today - previousday) ;

        let days = Math.floor(diff / (1000*3600*24)) ;
        let years = Math.floor(days/365) ;
        days -= years*365 ;
        let month = Math.floor(days/31) ;
        days -= month*31 ;

        return `${years} years , ${month} months , ${days} days`
    }
    
    render(){
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.time(this.props.date)}! </h4>
                <img src={Party} alt = 'WoW its a Good News'className='party' /> 
            </div>
        )
    }
}

export default AgeState ;