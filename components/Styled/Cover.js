import styled from 'styled-components'


const ContainerCover = styled.div`
	background: url(${props => props.url});
	background-size: cover;
	position: relative;
	height: 100%;
	width: 100%;
`;

const WrapCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	color: #fff;
	position: absolute;	
	height: 100%;
	width: 60%;
	padding: 15px 20px;
`;

export const Cover = props => (
	<ContainerCover url={props.url}>
		<div style={{ 
			position:'absolute', 
			width: '100%', 
			height: '100%', 
			background:'rgba(109, 213, 237, 0.7)',
			background: '-webkit-linear-gradient(to bottom, rgba(109, 213, 237, 0.7), rgba(33, 147, 176, 0.7))',
			background: 'linear-gradient(to bottom, rgba(109, 213, 237, 0.7), rgba(33, 147, 176, 0.7))'
		}}></div>
		<WrapCover>
			{props.children}
		</WrapCover>
	</ContainerCover>
)