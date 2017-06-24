import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { uploadPhoto } from './utilities/api'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            lat: 0.,
            long: 0.,
            image: 'fuck you rashad'
        }
    }
    async componentWillMount() {
        if ('geolocation' in navigator) {
            try {
                const position = await this.getPosition()
                const { latitude, longitude } = position.coords
                this.setState({
                    lat: parseFloat(latitude),
                    long: parseFloat(longitude)
                })
            } catch(err) {
                console.error(err)
            }
        }
    }
    getPosition = () => {
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(pos => resolve(pos))
        })
    }
    uploadPhoto = async () => {
        const { lat, long, image } = this.state
        try {
            const res = await uploadPhoto(lat, long, image)
            console.log(res)
        } catch(err) {
            console.error(err)
        }
    }
    render() {
        const { lat, long } = this.state
        return (
              <div className="App">
                  <div>lat: { lat }</div>
                  <div>long: { long }</div>
                  <button onClick={ this.uploadPhoto }>upload photo</button>
              </div>
        )
    }
}
