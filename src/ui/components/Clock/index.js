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

export default class Clock extends React.PureComponent {
    state = {
        date: this.getDuration()
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
	}
	
	getDuration() {
		const startTime = moment()
		const end = moment('01/01/2019, 00:00:00')
		return moment.duration(end.diff(startTime))
	}

    tick() {
        this.setState({
            date: this.getDuration()
        })
    }

    render() {
        return (
			<Container>
				<ClockStyle>
					{
						this.state.date.asMilliseconds() > 0 ? moment.utc(this.state.date.asMilliseconds()).format('HH:mm:ss') : 'Happy new year!'
					}
				</ClockStyle>
			</Container>
		)
    }
}
