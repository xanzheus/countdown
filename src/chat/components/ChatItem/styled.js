import styled, { css } from 'styled-components'

import React from 'react'

export const Profile = styled(({ color, src, isUser, ...rest }) => <div {...rest} />)`
	${({ color, src, isUser }) => css`
		background-color: ${color};
		background-image: url(${src});
		background-size: cover;
		background-position: center;
		${!isUser ? css`margin-right: 16px;` : css`margin-left: 16px;`};
	`};
	border-radius: 100%;
	width: 64px;
	height: 64px;
`

export const Container = styled(({ isUser, ...rest }) => <div {...rest} />)`
	display: flex;
	flex-direction: ${({ isUser }) => isUser ? 'row-reverse' : 'reverse'};
	margin: 16px 8px;
	${({ isUser }) => isUser && css`justify-content: end;`};
`

export const Name = styled(({ color, ...rest }) => <div {...rest} />)`
	${({ color }) => css`color: ${color};`};
	font-size: 18px;
`

export const Msg = styled(({ color, ...rest }) => <p {...rest} />)`
	${({ color }) => css`background: ${color};`};
	border-radius: 16px;
	color: white;
	padding: 8px;
	word-wrap: break-word
`

export const InfoWrapper = styled.div`
	flex: 1;
`
