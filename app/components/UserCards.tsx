import React from 'react';
import { View } from 'react-native';
import User from 'app/utils/user';

interface IUserCardsProps {
	users: User[]
}

export const UserCards = ({
	users
	}: IUserCardsProps) => {
	return (
		<View>
			
		</View>
	)
}

const $container: ViewStyle = {
	flex: 1,
	
}