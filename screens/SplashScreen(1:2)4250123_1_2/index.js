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
      <View style={styles.View_2_68}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f3/9a66/80b94bbff1c06ca229b71abba8a255b7"
          }}
          style={styles.ImageBackground_2_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/144e/d1ac/f08c72793ff082a6d73dba7733214b5d"
          }}
          style={styles.ImageBackground_2_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c38/4d2c/45d3c4bcdc3c5ce9f177de3cc53e55ea"
          }}
          style={styles.ImageBackground_2_10}
        />
      </View>
      <View style={styles.View_2_9} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3749/53f6/3c7901e370566b795d5f5dc5c20c1ffe"
        }}
        style={styles.ImageBackground_2_64}
      />
      <View style={styles.View_2_8}>
        <Text style={styles.Text_2_8}>9:40</Text>
      </View>
      <View style={styles.View_2_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ba9/04cb/70fad332bd38dd109bc91e83f9ff5ccc"
          }}
          style={styles.ImageBackground_2_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ff/f543/5ae71cf7bd4376aa2a6311299cfca4b6"
          }}
          style={styles.ImageBackground_2_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa32/2f7e/11d8cd61132d467144268166483e191b"
          }}
          style={styles.ImageBackground_2_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7818/7d05/74d9438a403e7592dd05f4a847d92569"
          }}
          style={styles.ImageBackground_2_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7837/4190/8515b7ca6020db6fb13e0d7be3b5f859"
          }}
          style={styles.ImageBackground_2_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c00/089e/5e6267dcb85470ebd93446e6e047335c"
          }}
          style={styles.ImageBackground_2_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6667/9962/330d48956ebbed628366ee0d7d45a853"
          }}
          style={styles.ImageBackground_2_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4870/c3fd/af05a83f3b9fa1becd1c14cf55b98fa7"
          }}
          style={styles.ImageBackground_2_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4acc/9092/5e50a13186a7dad8077a54a0097edd12"
          }}
          style={styles.ImageBackground_2_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce6/d3cb/c9fa26f1129776eb310a666afb2f2f50"
          }}
          style={styles.ImageBackground_2_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce6/d3cb/c9fa26f1129776eb310a666afb2f2f50"
          }}
          style={styles.ImageBackground_2_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4870/c3fd/af05a83f3b9fa1becd1c14cf55b98fa7"
          }}
          style={styles.ImageBackground_2_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4acc/9092/5e50a13186a7dad8077a54a0097edd12"
          }}
          style={styles.ImageBackground_2_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ab/a245/64c60c2829e2738aedbc49097545dc98"
          }}
          style={styles.ImageBackground_2_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7837/4190/8515b7ca6020db6fb13e0d7be3b5f859"
          }}
          style={styles.ImageBackground_2_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_43}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461f/c990/87bcd17c8ebbb7038e048b31487d8f17"
          }}
          style={styles.ImageBackground_2_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0227/36b9/7f3dcb5fa655258b72a16a12ce2a6059"
          }}
          style={styles.ImageBackground_2_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc4/3aa8/f689468e9ea02daab461e3581f5d978a"
          }}
          style={styles.ImageBackground_2_58}
        />
      </View>
      <View style={styles.View_2_59}>
        <Text style={styles.Text_2_59}>Get things done with ToDo</Text>
      </View>
      <View style={styles.View_2_60}>
        <Text style={styles.Text_2_60}>
          When you have so many things to do that the notepad and paper are
          buried deep on your desk but you haven’t lost your phone...yet.{" "}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_66}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_179"))
        }
      >
        <View style={styles.View_2_61} />
        <View style={styles.View_2_62}>
          <Text style={styles.Text_2_62}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_2_68: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.551912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_2: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_6: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("0%")
  },
  ImageBackground_2_10: {
    flexGrow: 1,
    width: wp("6.66666259765625%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.4098360655737707%")
  },
  View_2_9: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("42.69125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_64: {
    width: wp("85.86666666666667%"),
    height: hp("37.704918032786885%"),
    top: hp("-15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_2_8: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "flex-start"
  },
  Text_2_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_21: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("27.732240437158467%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_22: {
    width: wp("28.811958821614585%"),
    height: hp("23.1628334587389%"),
    top: hp("0.0005524015166074037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.520453898111978%")
  },
  ImageBackground_2_23: {
    width: wp("27.133284505208334%"),
    height: hp("22.182941957901082%"),
    top: hp("0.5095810186667542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.46115315755208%")
  },
  ImageBackground_2_24: {
    width: wp("14.187736002604169%"),
    height: hp("4.414008093661949%"),
    top: hp("4.1433219701214625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.088867187499996%")
  },
  ImageBackground_2_25: {
    width: wp("15.081829833984376%"),
    height: hp("5.911819791533256%"),
    top: hp("9.609505908736772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93193155924479%")
  },
  ImageBackground_2_26: {
    width: wp("7.163592529296875%"),
    height: hp("3.0936788340083887%"),
    top: hp("8.179157027781336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.38788859049478%")
  },
  ImageBackground_2_27: {
    width: wp("8.073325602213542%"),
    height: hp("4.617676448300887%"),
    top: hp("13.840390815109508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.390885416666666%")
  },
  ImageBackground_2_28: {
    width: wp("8.073429361979166%"),
    height: hp("4.617708758578274%"),
    top: hp("15.143250637367132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.321122233072916%")
  },
  ImageBackground_2_29: {
    width: wp("2.01170654296875%"),
    height: hp("1.1289565289606813%"),
    top: hp("10.557918861264092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.37805786132812%")
  },
  ImageBackground_2_30: {
    width: wp("7.829042561848959%"),
    height: hp("1.5969260794217468%"),
    top: hp("11.174802311131216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.578525797526044%")
  },
  ImageBackground_2_31: {
    width: wp("3.55987548828125%"),
    height: hp("0.7943763107549949%"),
    top: hp("11.710025182838649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.259204101562492%")
  },
  ImageBackground_2_32: {
    width: wp("10.790484619140624%"),
    height: hp("2.140331789444053%"),
    top: hp("12.00990937446636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.75611775716145%")
  },
  ImageBackground_2_33: {
    width: wp("10.790486653645834%"),
    height: hp("2.1403328317110657%"),
    top: hp("12.545163514184175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.436637369791665%")
  },
  ImageBackground_2_34: {
    width: wp("2.0117106119791663%"),
    height: hp("1.1289565289606813%"),
    top: hp("4.899244881718538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.860072835286456%")
  },
  ImageBackground_2_35: {
    width: wp("7.829048665364584%"),
    height: hp("1.596924516021228%"),
    top: hp("5.516098105842296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.06064860026041%")
  },
  ImageBackground_2_36: {
    width: wp("3.559877522786458%"),
    height: hp("0.7943773530220074%"),
    top: hp("6.051350161026086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.741168212890624%")
  },
  ImageBackground_2_37: {
    width: wp("5.271378580729167%"),
    height: hp("2.020040105600826%"),
    top: hp("7.94212883287441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.968638102213536%")
  },
  ImageBackground_2_38: {
    width: wp("7.163592529296875%"),
    height: hp("3.093492789346664%"),
    top: hp("6.876412897162098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.45750528971354%")
  },
  ImageBackground_2_39: {
    width: wp("3.559873453776042%"),
    height: hp("0.7943690148859076%"),
    top: hp("14.744954552155377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.248378499348956%")
  },
  ImageBackground_2_40: {
    width: wp("3.559672037760417%"),
    height: hp("0.7944576075819672%"),
    top: hp("15.27051769319128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93463745117187%")
  },
  ImageBackground_2_41: {
    width: wp("3.559466552734375%"),
    height: hp("0.7942970984620474%"),
    top: hp("18.06199329146922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.97697143554687%")
  },
  ImageBackground_2_42: {
    width: wp("3.5602925618489585%"),
    height: hp("0.7944576075819672%"),
    top: hp("17.5363113319939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.290303548177075%")
  },
  ImageBackground_2_43: {
    width: wp("3.560294596354167%"),
    height: hp("0.7944534385139174%"),
    top: hp("9.117547540716785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.326534016927084%")
  },
  ImageBackground_2_44: {
    width: wp("3.560294596354167%"),
    height: hp("0.7944513539798924%"),
    top: hp("9.538485834507341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.058650716145834%")
  },
  ImageBackground_2_45: {
    width: wp("7.579683430989584%"),
    height: hp("16.34253413299394%"),
    top: hp("6.821379114369883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4326527913411375%")
  },
  ImageBackground_2_58: {
    width: wp("39.551570638020834%"),
    height: hp("0.06013463755122951%"),
    top: hp("23.163909078295767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_59: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("58.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_2_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_60: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("65.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_2_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_66: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("89.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_61: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_2_62: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
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
