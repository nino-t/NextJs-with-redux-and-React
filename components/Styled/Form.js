import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px 20px;
	height: 100%;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px 0;
	border: 0;
	margin-bottom: 10px;
	border-bottom: 2px solid #ddd;

	&:focus{
		outline: none;
		border-bottom: 2px solid #7f8c8d;
	}	
`;