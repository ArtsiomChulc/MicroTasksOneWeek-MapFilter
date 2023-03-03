import React from 'react';

type HeaderType = {
	text: ItemType[]
}
type ItemType = {
	title: string
	pos: string
	id: number
}


export const Header = (props: HeaderType) => {
	return (
		<div className='header'>{props.text.map((el) => {
			return (
				<>
					<div key={el.id}>
						<h1>{el.title}</h1>
						<span>{el.pos}</span>
					</div>

				</>
			)
		})}</div>
	)
}