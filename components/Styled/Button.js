import styled, { css } from 'styled-components'

export const Button = styled.button`
	padding: 8px 14px;
	font-weight: bold;
	width: 100%;
	color: #fff;
	border: 0;
	cursor: pointer; 	

	${props => props.blue && css`
		background: #3498db;
		&:hover{
			background: #2980b9;
		}
	`}	

	${props => props.dark && css`
		background: #57606f;
		&:hover{
			background: #2f3542;
		}
	`}	
`;