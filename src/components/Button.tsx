import React from 'react';


type ButtonPropsType = {
	name: string
	callBack: () => void
}


export const Button = (props: ButtonPropsType) => {

	// const myFoo1 = () => {
	// 	console.log(100200);
	// }
	// const myFoo2 = (num: number) => {
	// 	console.log(num);

	// function onClickHandler(name: string) {
	// 	console.log(name);

	// }

	const onClickHandler = () => {
		props.callBack();
	}

	return (
		<>
			{/* <button onClick={(event) => myFoo1()}>Click me</button>
		<button onClick={(event) => myFoo2(100300)}>Click me</button> */}
			{/* <button onClick={(event) => onClickHandler("Vasya")}>MyYouTubeChanel</button>
			<button onClick={(event) => onClickHandler("Dima")}>MyYouTubeChane2</button> */}
			<button onClick={onClickHandler}>
				{props.name}
			</button>
		</>

	)
}