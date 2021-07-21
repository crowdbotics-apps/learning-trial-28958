import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
import { Picker } from '@react-native-picker/picker';

export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_9}>
        <Text style={styles.Text_1_9}>Second Screen</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_10}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      />
      <View style={styles.View_1_11}>
        <Text style={styles.Text_1_11}>Push Button to Go Back</Text>
      </View>
    </ScrollView>
  )
}
const App = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View >
      <Text > Demo Form </Text>
      <View>
        <TextInput 
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Picker
          selectedValue={currency}
          onValueChange={currentCurrency => setCurrency(currentCurrency)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="NGN" value="Naira" />
        </Picker>
        <Text>
          Selected: {currency}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1_9: {
    width: wp("54.72222222222223%"),
    minWidth: wp("54.72222222222223%"),
    minHeight: hp("11.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.27777777777778%"),
    top: hp("20.625%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_10: {
    width: wp("60.27777777777777%"),
    minWidth: wp("60.27777777777777%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("31.406250000000004%"),
    backgroundColor: "rgba(216, 30, 30, 1)"
  },
  View_1_11: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.27777777777778%"),
    top: hp("32.96875%"),
    justifyContent: "flex-start"
  },
  Text_1_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
