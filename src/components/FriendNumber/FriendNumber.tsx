// @flow
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
} from "react-native"; 
import { Custom } from "../../styles";
import Style from "./Style";
import Clipboard from '@react-native-community/clipboard' 
// svg 
import Copy from "../../assets/svg/Copy.svg";

interface FriendNumberProps {
  friendNumber: string;
}

const FriendNumber = ({ friendNumber }: FriendNumberProps) => {

  const copyToClipboard = () => {
    Clipboard.setString(friendNumber)
  }

  return (
    <View style={Style.container}>
      <View style={[Custom.row,Style.actionContainer]}>
        <Text style={Style.subHeading}>FRIEND'S ACCOUNT NUMBER</Text>
        <View style={[Custom.row, Style.actions]}> 
          <TouchableOpacity onPress={copyToClipboard}>
            <Copy />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[Custom.mt10,Style.numberText]}>{friendNumber}</Text>
    </View>
  );
};

export default FriendNumber;
