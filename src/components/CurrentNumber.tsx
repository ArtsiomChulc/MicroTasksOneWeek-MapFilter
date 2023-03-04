import React, { useState } from 'react';
import { Button } from './Button';
import './styles/CurrentNumber.css'

export const CurrentNumber = () => {

	// let a = 1;

	let [a, setA] = useState(1);

	const plusClick = () => {
		setA(++a)
	}
	const nullClick = () => {
		setA(0)
	}
	const minusClick = () => {
		if (a === 0) {
			return;
		} else {
			setA(--a)
		}

	}


	return (
		<div className='current-number'>
			<h1 className='number'>{a}</h1>
			<Button name={'PLUS'} callBack={plusClick} />
			<Button name={'MINUS'} callBack={minusClick} />
			<Button name={'0'} callBack={nullClick} />
		</div>
	)
}