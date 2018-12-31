import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const ClockStyle = styled.h1`
    font-family: 'Digital-7';
    font-size: 96px;
    color: #FFFFFF;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const newYear = new Date(2019, 1, 1)
newYear.setTime(newYear.getTime() + newYear.getTimezoneOffset() * 60 *1000)
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
            date: newYear - Date.now() - new Date().getTimezoneOffset()
        })
    }

    render() {
        return (<Container>
            <ClockStyle>
                {
                    this.state.date > 0 ? moment(this.state.date).format('h:mm:ss') : 'Happy new year!'
                }
            </ClockStyle>
        </Container>)
    }
}
