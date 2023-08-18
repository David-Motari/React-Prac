import  React  from "react";
import DigitalClock from "../src/DigitalClock"
import styles from "../src/DigitalClock.module.css"

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        time: new Date().toLocaleTimeString()
    }  
    }
    

    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleTimeString()
            })
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    render () {
        return <div className={styles['digitalBody']}>
            <DigitalClock time={this.state.time} />
        </div>
    }
};

export default Index;