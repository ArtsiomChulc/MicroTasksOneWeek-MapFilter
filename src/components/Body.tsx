import React from 'react';
import { Button } from './Button';
import { CarTable } from './CarTable';



type BodyType = {
	titleForBody: string
	studentsBody: studentsBodyType[]
}

type studentsBodyType = {
	id: number
	name: string
	age: number
}

export const Body = (props: BodyType) => {

	const topCars = [
		{ manufacturer: 'BMW', model: 'X5' },
		{ manufacturer: 'Mersedes', model: 'MLS' },
		{ manufacturer: 'Audi', model: 'Q7' }
	]

	const chanelOneFoo = (nameClick: string) => {
		console.log(nameClick);
	}
	const chanelTwoFoo = (nameClick: string) => {
		console.log(nameClick);
	}
	const chanelThreFoo = (nameClick: string) => {
		console.log(nameClick);
	}

	return (
		<div className='body'>
			<h3>
				{props.titleForBody}
				<ul>
					{props.studentsBody.map((studentInfo) => {
						return (
							<li key={studentInfo.id}>
								<span>{studentInfo.name}</span>
								<span> --- {studentInfo.age} years old</span>
							</li>
						)
					})}
				</ul>
			</h3>

			<CarTable carsItem={topCars} />

			<Button name={"MyButton-1"} callBack={() => chanelOneFoo('Vasya')} />
			<Button name={"MyButton-2"} callBack={() => chanelTwoFoo('Ivan')} />
			<Button name={"MyButton-3"} callBack={() => chanelThreFoo('I am stupid button')} />

		</div>
	)
}