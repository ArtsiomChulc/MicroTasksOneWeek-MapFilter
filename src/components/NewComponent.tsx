import React from 'react'
import { BtnType } from './CurrentMoney'
// import { Button } from './Button'

type NewComponentPropsType = {
	arrMoney: ObjMoney[]
	callBack: (nameBtn: BtnType) => void
}
type ObjMoney = {
	banknots: string
	value: number
	number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
	return (
		<div style={{ minHeight: '60vh', background: 'grey' }}>
			<h1>Exghange Money</h1>
			<ul style={{ minHeight: '40vh' }}>
				{props.arrMoney.map((moneyArrayItem, i) => {
					return (
						<li key={i}>
							<span>{moneyArrayItem.banknots}</span>
							<span>{moneyArrayItem.value}</span>
						</li>
					)
				})}
			</ul>
			<button onClick={() => props.callBack('ALL')}>ALL</button>
			<button onClick={() => props.callBack('RUBLS')}>RUBLS</button>
			<button onClick={() => props.callBack('Dollars')}>Dollars</button>

			{/* <Button name={'ALL'} callBack={() => onClickHandler('ALL')} />
			<Button name={'RUBLS'} callBack={() => onClickHandler('RUBLS')} />
			<Button name={'Dollars'} callBack={() => onClickHandler('Dollars')} /> */}
		</div>
	)
}