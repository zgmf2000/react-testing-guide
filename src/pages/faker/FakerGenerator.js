import React, { Component } from 'react';
import faker from 'faker';
import get from 'lodash/get';

const PLATFORMS = [
    'android',
    'ios'
];

class FakerGenerator extends Component {
    constructor() {
        super();
        this.state = {
            finalizedData: '',
            amountToGenerate: 0
        };
    }

    _generateFakeData = () => {
        console.log('GENERATING FAKE DATA...');

        const fakeData = {
            deviceId: faker.random.alphaNumeric(16),
            namedUserId: faker.random.alphaNumeric(6).toUpperCase(),
            deviceType: PLATFORMS[faker.random.number(1)],
            channelId: faker.random.uuid(),
            slot: 'user_slot_dummy'
        };

        return fakeData;
    }

    _generateFinalizedData = () => {
        const finalData = [];

        for (let x = 0; x < this.state.amountToGenerate; x++) {
            finalData.push(this._generateFakeData())
        }

        this.setState({
            finalizedData: JSON.stringify(finalData)
        });
    }

    _onAmountToGenerateChange = (event) => {
        const value = get(event, 'target.value', 0);
        this.setState({
            amountToGenerate: value
        });
    }

    render() {
        return <div>
            <textarea value={this.state.finalizedData} readOnly></textarea>
            <input value={this.state.amountToGenerate} onChange={this._onAmountToGenerateChange}></input>
            <button onClick={this._generateFinalizedData}>Generate JSON Data!</button>
        </div>
    }
};

export default FakerGenerator;
