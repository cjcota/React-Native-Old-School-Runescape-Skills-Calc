////////////////////////////////////////////////////////////////////////////////
// Created By: Chris Cota, Last Modified: 12/20/2018
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import PropTypes from 'prop-types';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
// Takes in a list item and renders/displays it to the user
const Item = props => (
  <View style={styles.container}>
    <View style={styles.skillColumn}>
      <View style={styles.skillRow}>
        <View>
          <Text>{props.reqLevel}</Text>
        </View>
        <View>
          <Text>{props.name}</Text>
        </View>
        <View>
          <Text>{props.xpAmount}</Text>
        </View>
        <View>
          <Text>{props.amount}</Text>
        </View>
      </View>
    </View>
  </View>
);
// This is a list of all of the styles for the individual list item
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'honeydew',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 10,
    padding: 0,
    fontSize: 80,
    alignItems: 'center',
  },
  textStyles: {
    marginLeft: 50,
  },
  skillColumn: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  skillRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '1%',
    width: '80%',
    justifyContent: 'space-around',
  },
});
export default Item;
