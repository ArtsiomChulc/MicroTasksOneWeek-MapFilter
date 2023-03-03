import React from 'react';


type FooterType = {
	itemForFooter: number
}

export const Footer = (props: FooterType) => {
	return (
		<p className='footer'>{props.itemForFooter}</p>
	)
}