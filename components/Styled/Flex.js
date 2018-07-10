import styled, { css } from 'styled-components'

export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	overflow: hidden;
	flex-wrap: wrap;

	${props => props.center && css`
		justify-content: center;
		align-items: center;	
	`}	
`;

export const FlexItem = styled.div`
	flex: ${props => props.md};
	height: ${props => props.height};
`;