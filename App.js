import { Text, View } from 'react-native';
import BottomNavigator from './Navigation/BottomNavigator'
import Routes from './Navigation/Routes';
import RideAndPaymentDetails from './Screens/RideAndPaymentDetails/RideAndPaymentDetails';


export default function App() {
  return (
    <View>
           <Routes/>
           {/* <RideAndPaymentDetails /> */}
    </View>
  );
}


