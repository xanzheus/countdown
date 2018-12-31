import React from 'react'

const newYear = new Date('2019-01-01T00:00:00')
export default class Clock extends React.PureComponent {
    state = {
        date: newYear - Date.now()
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: newYear - Date.now()
        })
    }

    convertMS(ms) {
        let s = Math.floor(ms / 1000);
        let m = Math.floor(s / 60);
        s = s % 60;
        let h = Math.floor(m / 60);
        m = m % 60;
        let d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    };

    render() {
        const {
            h,
            m,
            s
        } = this.convertMS(this.state.date)
        return (<h1>
            {h}:{m}:{s}
        </h1>)
    }
}
