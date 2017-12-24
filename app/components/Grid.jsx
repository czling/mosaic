import React, { Component } from 'react';
import './Grid.scss';

const SIZE = 25;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class Grid extends Component {
	renderRow() {
		const { floor, random } = Math;
		const row = [];

		for (let i = 0; i < SIZE; i++) {
			row.push(
				<div className='grid__cell' key={ `cell-${i}` }>
					{ LETTERS[floor(random()*LETTERS.length)] }
				</div>
			);
		}
		return row;
	}

	render() {
		const rows = [];
		for (let i = 0; i < SIZE; i++) {
			rows.push(
				<div className='grid__row' key={ `row-${i}` }>
					{ this.renderRow() }
				</div>
			);
		}

		return (<div className='grid'>
			{ rows }
		</div>);
	}
};
