////////////////////////////////////////////////////////////////////////////////
// Created By: Chris Cota, Last Modified: 12/20/2018
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Button, View, StyleSheet, Text, Image, FlatList, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item from './Item.js';
export default class CombatCalculatorScreen extends React.Component {
  state = {
    combatLevel: 0,
    attack: 0,
    strength: 0,
    hitpoints: 0,
    defence: 0,
    ranged: 0,
    magic: 0,
    prayer: 0,
  };
  back = () => {
    this.props.navigation.navigate('SkillAllListScreen');
  };
  //This function simply calculates the users combat level using their existing stats pulled in
  getCombatLevel(
    strengthLevel,
    defenceLevel,
    magicLevel,
    hitpointsLevel,
    attackLevel,
    prayerLevel,
    rangedLevel
  ) {
    defenceLevel = Number.parseInt(defenceLevel, 0);
    strengthLevel = Number.parseInt(strengthLevel, 0);
    hitpointsLevel = Number.parseInt(hitpointsLevel, 0);
    magicLevel = Number.parseInt(magicLevel, 0);
    rangedLevel = Number.parseInt(rangedLevel, 0);
    attackLevel = Number.parseInt(attackLevel, 0);
    prayerLevel = Number.parseInt(prayerLevel, 0);
    var base = 0.25 * (defenceLevel + hitpointsLevel + prayerLevel / 2);
    var melee = 0.325 * (attackLevel + strengthLevel);
    var range = 0.325 * (rangedLevel / 2 + rangedLevel);
    var mage = 0.325 * (magicLevel / 2 + magicLevel);
    if (melee > range) {
      var final = melee + base;
    } else {
      var final = base + range;
    }
    this.setState({ combatLevel: final });
  }
  //Renders the users current combat level using their existing stats
  render() {
    const { navigation } = this.props;
    const strengthLevel = navigation.getParam('strengthLevel', 0);
    const defenceLevel = navigation.getParam('defenceLevel', 0);
    const magicLevel = navigation.getParam('magicLevel', 0);
    const hitpointsLevel = navigation.getParam('hitpointsLevel', 0);
    const attackLevel = navigation.getParam('attackLevel', 0);
    const prayerLevel = navigation.getParam('prayerLevel', 0);
    const rangedLevel = navigation.getParam('rangedLevel', 0);
    icon = name => {
      if (name == 'attack') return require('./assets/attack.png');
      if (name == 'hitpoints') return require('./assets/hitpoints.png');
      if (name == 'strength') return require('./assets/strength.png');
      if (name == 'defence') return require('./assets/defence.png');
      if (name == 'ranged') return require('./assets/ranged.png');
      if (name == 'prayer') return require('./assets/prayer.png');
      if (name == 'magic') return require('./assets/magic.png');
    };

    return (
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={styles.mainBack}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Your Combat Level Is: {this.state.combatLevel}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("attack")} />
        Raise Attack By: {this.state.attack}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("strength")} />
        Raise Strength By: {this.state.strength}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("hitpoints")} />
        Raise Hitpoints By: {this.state.hitpoints}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("defence")} />
        Raise Defence By: {this.state.defence}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("ranged")} />
        Raise Ranged By: {this.state.ranged}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("magic")} />
        Raise Magic By: {this.state.magic}</Text>
        <Text style={styles.mainText}><Image style={styles.images} source={icon("prayer")} />
        Raise Prayer By: {this.state.prayer}</Text>
        <Button
          title="press me"
          onPress={() => {
            this.getCombatLevel(
              strengthLevel,
              defenceLevel,
              magicLevel,
              hitpointsLevel,
              attackLevel,
              prayerLevel,
              rangedLevel
            );
          }}
        />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 0,
    fontSize: 80,
    alignItems: 'center',
  },
  mainBack: {
    height: '100%',
    width: '100%',
  },
  mainText: {
    color: 'yellow',
    fontSize: 13,
    padding: 3,
  }
});
