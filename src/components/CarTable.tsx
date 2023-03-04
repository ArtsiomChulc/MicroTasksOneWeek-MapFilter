import React from 'react';

type CarTableType = {
	carsItem: CarsArray[]
}

type CarsArray = {
	manufacturer: string
	model: string
}


export const CarTable = (props: CarTableType) => {
	return (
		<>
			<table>
				<tr>
					<th>manufacturer</th>
					<th>model</th>
				</tr>

				{props.carsItem.map((car, i) => {
					return (
						<tr key={i}>
							<td>{i + 1} - {car.manufacturer}</td>
							<td>{car.model}</td>
						</tr>
					)
				})}
			</table>
		</>
	)
}
