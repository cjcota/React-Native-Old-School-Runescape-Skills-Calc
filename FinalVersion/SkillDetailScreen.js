////////////////////////////////////////////////////////////////////////////////
// Created By: Chris Cota, Last Modified: 12/20/2018
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Button, View, StyleSheet, Text, Image, FlatList, ImageBackground} from 'react-native';
import { Icon } from 'native-base';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item from './Item.js';
import CombatCalculatorScreen from './CombatCalculatorScreen';
export default class SkillDetailScreen extends React.Component {
  // The goal level and goal exp are getting the navigation props if there or replacing the state with 0
  state = {
    goalLevel: this.props.navigation.getParam('skillLevel', 0),
    goalExp: this.props.navigation.getParam('skillXP', 0),
  };
  //This will take you back to the skill list page
  back = () => {
    this.props.navigation.navigate('SkillAllListScreen');
  };
  // This function designs what you goal level should be and will not let you pass 99 or go below your current level
  goalUpDown(bool, skillLevel, expJSON) {
    if (bool) {
      var total = Number.parseInt(this.state.goalLevel, 0) + 1;
      if (total > 99) {
        console.log('sorry');
      } else {
        this.setState({
          goalLevel: Number.parseInt(this.state.goalLevel, 0) + 1,
          goalExp: expJSON[Number.parseInt(this.state.goalLevel, 0) + 1],
        });
      }
    } else {
      var total = Number.parseInt(this.state.goalLevel, 0) - 1;
      if (total < 0 || total < skillLevel) {
        console.log('sorry');
      } else {
        this.setState({
          goalLevel: Number.parseInt(this.state.goalLevel, 0) - 1,
          goalExp: expJSON[Number.parseInt(this.state.goalLevel, 0) - 1],
        });
      }
    }
  }
  // This will render the detail screen based on the method clicked
  render() {
    const { navigation } = this.props;
    const skillName = navigation.getParam('skill', 'mining');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    const skillXP = navigation.getParam('skillXP', 'some default value');
    const skillLevel = navigation.getParam('skillLevel', 0);
    var skillJSON = require('./SkillMethods.json');
    var expJSON = require('./experience.json');
    // The icon function gets the correct method icon
    icon = name => {
      if (name == 'mining') return require('./assets/Mining_icon.png');
      if (name == 'agility') return require('./assets/Agility_icon.png');
      if (name == 'smithing') return require('./assets/Smithing_icon.png');
      if (name == 'defence') return require('./assets/Defence_icon.png');
      if (name == 'herblore') return require('./assets/Herblore_icon.png');
      if (name == 'fishing') return require('./assets/Fishing_icon.png');
      if (name == 'ranged') return require('./assets/Ranged_icon.png');
      if (name == 'thieving') return require('./assets/Thieving_icon.png');
      if (name == 'cooking') return require('./assets/Cooking_icon.png');
      if (name == 'prayer') return require('./assets/Prayer_icon.png');
      if (name == 'crafting') return require('./assets/Crafting_icon.png');
      if (name == 'firemaking') return require('./assets/Firemaking_icon.png');
      if (name == 'fletching') return require('./assets/Fletching_icon.png');
      if (name == 'woodcutting')
        return require('./assets/Woodcutting_icon.png');
      if (name == 'runecrafting')
        return require('./assets/Runecrafting_icon.png');
      if (name == 'farming') return require('./assets/Farming_icon.png');
      if (name == 'construction')
        return require('./assets/Construction_icon.png');
      if (name == 'hunter') return require('./assets/Hunter_icon.png');
    };

    return (
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={styles.mainBack}>
      <View style={styles.container}>
        <View style={styles.skillColumn}>
          <View style={styles.imageRow}>
            <View>
              <Text style={styles.title}>{skillName}                     </Text>
            </View>
            <View>
              <Image style={styles.images} source={icon(skillName)} />
            </View>
          </View>
          <View style={styles.skillRow}>
            <View>
              <Text style={styles.numberTotalStyle}>Current Skill Level: {skillLevel}</Text>
              <Text style={styles.numberTotalStyle}>Current Experience: {skillXP}</Text>
            </View>
            <View>
              <Text style={styles.numberTotalStyle}> Goal XP: {this.state.goalExp}</Text>
              <Text style={styles.numberTotalStyle}>
                {' '}
                <Icon
                  onPress={() =>
                    this.goalUpDown(
                      true,
                      navigation.getParam('skillLevel', 0),
                      expJSON
                    )
                  }
                  type="Entypo"
                  name="arrow-with-circle-up"
                  style={{ fontSize: 25, color: 'yellow' }}
                />
                Goal Level: {this.state.goalLevel}
                <Icon
                  onPress={() =>
                    this.goalUpDown(
                      false,
                      navigation.getParam('skillLevel', 0),
                      expJSON
                    )
                  }
                  type="Entypo"
                  name="arrow-with-circle-down"
                  style={{ fontSize: 25, color: 'yellow' }}
                />
              </Text>
            </View>
          </View>
          <View style={styles.skillRow}>
            <View />
          </View>
        </View>
        <ImageBackground
          source={require('./assets/runescapeBack.png')}
          style={styles.colBack}>
        <View style={styles.under}>
          <Text style={styles.numberTotalStyle}>         LVL Req.          Method           XP           Amount</Text>
          <FlatList
            extraData={this.state}
            data={skillJSON[skillName].method.methodArray}
            renderItem={({ item }) => (
              <View>
                <Item
                  methodItem={item}
                  name={item.name}
                  reqLevel={item.lvl}
                  xpAmount={item.XP}
                  amount={Math.round((this.state.goalExp - skillXP) / item.XP)}
                />
              </View>
            )}
          />
        </View>
        </ImageBackground>
      </View>
      </ImageBackground>
    );
  }
  // componentDidUpdate() {
  //   this.setState({goalLevel: skillLevel})
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 0,
    fontSize: 80,
    alignItems: 'center',
  },
  colBack: {
    height: 493.2,
    width: 365.4,
    padding: 12,
  },
  title: {
    fontSize: 30,
    color: 'yellow',
  },
  text: {
    fontSize: 15,
  },
  mainBack: {
    height: '100%',
    width: '100%',
  },
  skillColumn: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  skillRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '1%',
    width: '100%',
  },
  imageRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '1%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  under: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  images: {
    width: 46,
    height: 46,
  },
  numberTotalStyle: {
    color: 'yellow',
    fontSize: 13,
    padding: 3,
  },
});
