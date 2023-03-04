import React, { useState } from 'react';
import { NewComponent } from './NewComponent'


export type BtnType = 'Dollars' | 'RUBLS' | 'ALL';


export const CurrentMoney = () => {

	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	])

	let [btn, setBtn] = useState<BtnType>('ALL')

	let filteredMoney = money;
	if (btn === 'RUBLS') {
		filteredMoney = money.filter((m) => m.banknots === 'RUBLS')
	}
	if (btn === 'Dollars') {
		filteredMoney = money.filter((m) => m.banknots === 'Dollars')
	}
	if (btn === 'ALL') {
		filteredMoney = money;
	}

	const onClickHandler = (nameBtn: BtnType) => {
		setBtn(nameBtn);
		console.log('jdjdjdj');

	}

	return (

		<>
			<NewComponent arrMoney={filteredMoney} callBack={onClickHandler} />
		</>

		// <div style={{ minHeight: '60vh', background: 'grey' }}>
		// 	<h1>Exghange Money</h1>
		// 	<ul style={{ minHeight: '40vh' }}>
		// 		{filteredMoney.map((moneyArrayItem, i) => {
		// 			return (
		// 				<li key={i}>
		// 					<span>{moneyArrayItem.banknots}</span>
		// 					<span>{moneyArrayItem.value}</span>
		// 				</li>
		// 			)
		// 		})}
		// 	</ul>

		// 	<Button name={'ALL'} callBack={() => onClickHandler('ALL')} />
		// 	<Button name={'RUBLS'} callBack={() => onClickHandler('RUBLS')} />
		// 	<Button name={'Dollars'} callBack={() => onClickHandler('Dollars')} />
		// </div>
	)
} 