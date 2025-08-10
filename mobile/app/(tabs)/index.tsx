import { View, Text, Button } from 'react-native'
import { useClerk } from '@clerk/clerk-expo';

const HomeScreen = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  )
}

export default HomeScreen