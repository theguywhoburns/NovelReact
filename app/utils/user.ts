type User = {
  id: string;
  imageUri: string;
  isPopular: boolean;
  name: string;
  description: string;
  age: number;
  job?: string;
  distance?: string;
};

export default User;