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
      <TouchableOpacity
        style={styles.TouchableOpacity_1_3}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_8"))
        }
      />
      <View style={styles.View_1_5}>
        <Text style={styles.Text_1_5}>Push This Button Gently</Text>
      </View>
      <View style={styles.View_1_6} />
      <View style={styles.View_1_7}>
        <Text style={styles.Text_1_7}>Push This Button Harder</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_1_3: {
    width: wp("62.77777777777778%"),
    minWidth: wp("62.77777777777778%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.61111111111111%"),
    top: hp("66.71875%"),
    backgroundColor: "rgba(240, 13, 13, 1)"
  },
  View_1_5: {
    width: wp("43.888888888888886%"),
    minWidth: wp("43.888888888888886%"),
    minHeight: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("68.59375%"),
    justifyContent: "flex-start"
  },
  Text_1_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_6: {
    width: wp("70.27777777777777%"),
    minWidth: wp("70.27777777777777%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%"),
    top: hp("25.46875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_7: {
    width: wp("52.22222222222223%"),
    minWidth: wp("52.22222222222223%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%"),
    top: hp("26.09375%"),
    justifyContent: "flex-start"
  },
  Text_1_7: {
    color: "rgba(0, 0, 0, 1)",
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
