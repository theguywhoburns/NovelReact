import React from 'react';
import { ImageStyle, TextStyle, View, ViewStyle, Image } from 'react-native';
import { Text } from '../Text';

interface IUserCardProps {
	imageUri: string;
	isPopular: boolean;
	name: string;
	description: string;
	age: number;
	job?: string;
	distance?: string;
}

export const UserCard = ({
	imageUri, 
	isPopular,
	name, 
	description, 
	age, 
	job, 
	distance
	}: IUserCardProps) => {
	return (
		<View style={card}>
			<Image style={image} source={{uri: imageUri}} />
				{isPopular && <Text style={tag}>Popular</Text>}
				<View style={infoContainer}>
					<View style={nameAndAge}>
						<Text>{name}</Text>
						<Text>{age}</Text>
					</View>
					<Text style={text}>{description}</Text>
					<Text style={text}>{job}</Text>
					<Text style={text}>{distance}</Text>
				</View>
		</View>
	)
}

const card: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  maxWidth: 320,
  maxHeight: 460,
	borderRadius: 16,
};

const image: ImageStyle = {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
	borderRadius: 16,
};

const infoContainer: ViewStyle = {
  position: 'absolute',
  left: 10,
  bottom: 20,
};

const nameAndAge: ViewStyle = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	gap: 10,
	marginBottom: 10,
};

const tag: TextStyle = {
	position: 'absolute',
	top: 20,
	right: 20,
  fontSize: 14,
  color: '#fff',
  fontWeight: 'bold',
};

const text: TextStyle = {
  fontSize: 16,
  color: '#fff',
};
