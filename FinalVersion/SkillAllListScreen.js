////////////////////////////////////////////////////////////////////////////////
// Created By: Chris Cota, Last Modified: 12/20/2018
////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import Hiscores from './SearchUser';
import SkillDetailScreen from './SkillDetailScreen';
import CombatCalculatorScreen from './CombatCalculatorScreen';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
export default class SkillAllListScreen extends React.Component {
  //Sets the current state for the expected user object
  state = {
    username: '',
    verifiedUser: '',
    stats: {
      overall: { rank: 0, level: 0, xp: 0 },
      attack: { rank: 0, level: 0, xp: 0 },
      defence: { rank: 0, level: 0, xp: 0 },
      strength: { rank: 0, level: 0, xp: 0 },
      hitpoints: { rank: 0, level: 0, xp: 0 },
      ranged: { rank: 0, level: 0, xp: 0 },
      prayer: { rank: 0, level: 0, xp: 0 },
      magic: { rank: 0, level: 0, xp: 0 },
      cooking: { rank: 0, level: 0, xp: 0 },
      woodcutting: { rank: 0, level: 0, xp: 0 },
      fletching: { rank: 0, level: 0, xp: 0 },
      fishing: { rank: 0, level: 0, xp: 0 },
      firemaking: { rank: 0, level: 0, xp: 0 },
      crafting: { rank: 0, level: 0, xp: 0 },
      smithing: { rank: 0, level: 0, xp: 0 },
      mining: { rank: 0, level: 0, xp: 0 },
      herblore: { rank: 0, level: 0, xp: 0 },
      agility: { rank: 0, level: 0, xp: 0 },
      thieving: { rank: 0, level: 0, xp: 0 },
      slayer: { rank: 0, level: 0, xp: 0 },
      farming: { rank: 0, level: 0, xp: 0 },
      runecraft: { rank: 0, level: 0, xp: 0 },
      hunter: { rank: 0, level: 0, xp: 0 },
      construction: { rank: 0, level: 0, xp: 0 },
    },
  };
  // Allows the user to navigate to the skill detail screen
  getDetailScreen = () => {
    this.props.navigation.navigate('SkillDetailScreen', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  };
  // Renders each skill with their corresponding touchable opacity and well as link to the detail screen with unique props
  render() {
    return (
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={styles.mainBack}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./assets/oldSchoolLogo.png')}
          />
          <TextInput
            style={{
              width: '80%',
              height: 40,
              borderColor: '#999999',
              borderWidth: 2,
              backgroundColor: 'grey',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            onChangeText={username => this.setState({ username })}
            placeholder="                        Enter A Player Name"
            placeholderTextColor="black"
          />
          <Button
            title="Lookup"
            onPress={() => this.lookupPlayer(this.state.username)}
          />
          <Text style={styles.title}>
            <Image
              style={styles.gnome}
              source={require('./assets/torchLeft.png')}
            />
            {this.state.verifiedUser}
            <Image
              style={styles.gnome}
              source={require('./assets/torch.png')}
            />
          </Text>
          <View style={styles.skillColumn}>
            <ImageBackground
              source={require('./assets/runescapeBack.png')}
              style={styles.colBack}>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.attack.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/attack.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.hitpoints.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/hitpoints.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.mining.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'mining',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.mining.xp,
                        skillLevel: this.state.stats.mining.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/mining.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.strength.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/strength.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.agility.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'agility',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.agility.xp,
                        skillLevel: this.state.stats.agility.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/agility.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.smithing.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'smithing',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.smithing.xp,
                        skillLevel: this.state.stats.smithing.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/smithing.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.defence.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/defence.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.herblore.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'herblore',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.herblore.xp,
                        skillLevel: this.state.stats.herblore.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/herblore.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.fishing.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'fishing',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.fishing.xp,
                        skillLevel: this.state.stats.fishing.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/fishing.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.ranged.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/ranged.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.thieving.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'thieving',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.thieving.xp,
                        skillLevel: this.state.stats.thieving.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/thieving.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.cooking.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'cooking',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.cooking.xp,
                        skillLevel: this.state.stats.cooking.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/cooking.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.prayer.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/prayer.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.crafting.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'crafting',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.crafting.xp,
                        skillLevel: this.state.stats.crafting.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/crafting.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.firemaking.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'firemaking',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.firemaking.xp,
                        skillLevel: this.state.stats.firemaking.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/firemaking.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.magic.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CombatCalculatorScreen', {
                        prayerLevel: this.state.stats.prayer.level,
                        attackLevel: this.state.stats.attack.level,
                        defenceLevel: this.state.stats.defence.level,
                        hitpointsLevel: this.state.stats.hitpoints.level,
                        strengthLevel: this.state.stats.strength.level,
                        rangedLevel: this.state.stats.ranged.level,
                        magicLevel: this.state.stats.magic.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/magic.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.fletching.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'fletching',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.fletching.xp,
                        skillLevel: this.state.stats.fletching.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/fletching.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.woodcutting.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'woodcutting',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.woodcutting.xp,
                        skillLevel: this.state.stats.woodcutting.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/woodcutting.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.runecraft.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'runecrafting',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.runecraft.xp,
                        skillLevel: this.state.stats.runecraft.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/runecrafting.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.slayer.level}
                  </Text>

                  <Image
                    style={styles.images}
                    source={require('./assets/slayer.png')}
                  />
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.farming.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'farming',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.farming.xp,
                        skillLevel: this.state.stats.farming.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/farming.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.skillRow}>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.construction.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'construction',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.construction.xp,
                        skillLevel: this.state.stats.construction.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/construction.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberStyle}>
                    {this.state.stats.hunter.level}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SkillDetailScreen', {
                        skill: 'hunter',
                        otherParam: this.state.username,
                        skillXP: this.state.stats.hunter.xp,
                        skillLevel: this.state.stats.hunter.level,
                      });
                    }}>
                    <Image
                      style={styles.images}
                      source={require('./assets/hunter.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.numberTotalStyle}>
                    {this.state.stats.overall.level}
                  </Text>
                  <Image
                    style={styles.images}
                    source={require('./assets/overall.png')}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.under} />
        </View>
      </ImageBackground>
    );
  }
  // Is an async function used to lookup the player when the username is typed in and submitted
  async lookupPlayer(uName) {
    Hiscores.getStats(uName, 'full')
      .then(res =>
        this.setState({ stats: res.main.stats, verifiedUser: uName })
      )
      .catch(err => console.log(err));
  }
  // This will get the current Skill Level for a player
  getSkillLevel(skillName) {
    if (this.state.stats.nothing === 'nothing') {
      return '0';
    }
    let player = this.state.stats;
    let skill = player[skillName].level;
    return skill;
  }
}
// These are all of the styles for the tiles/columns and rows
const styles = StyleSheet.create({
  logo: {
    width: 225.67,
    height: 104.33,
    marginTop: -20,
  },
  numberStyle: {
    position: 'absolute',
    zIndex: 99,
    padding: 20,
    fontSize: 20,
    marginLeft: 45,
    color: 'yellow',
  },
  numberTotalStyle: {
    position: 'absolute',
    zIndex: 99,
    padding: 30,
    color: 'yellow',
    fontSize: 20,
  },
  container: {
    flex: 10,
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    fontSize: 80,
    alignItems: 'center',
  },
  gnome: {
    height: 71.5,
    width: 53.75,
  },
  colBack: {
    height: 493.2,
    width: 365.4,
    padding: 12,
  },
  mainBack: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 25,
    color: 'yellow',
  },
  images: {
    width: 111.6,
    height: 57.6,
  },
  under: {
    flex: 1,
    backgroundColor: 'purple',
  },
  skillColumn: {
    flex: 9,
    padding: 20,
    alignItems: 'center',
  },
  skillRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '1%',
  },
});
