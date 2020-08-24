import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import HeaderText from '../components/HeaderText';

import { SearchBar } from 'react-native-elements';
import RecommendCard from '../components/RecommendCard';

import * as colors from '../assets/colors';
import * as images from '../assets/images/imageIndex';

const RecommendListData = [
  {
    imgSrc: images.Nepal3,
    headerText: 'Nepal Red Cross Society',
    descText: 'Annapurna Region',
  },
  {
    imgSrc: images.Nepal2,
    headerText: 'Nepalguni',
    descText: 'Dolpa Region',
  },
  {
    imgSrc: images.Nepal1,
    headerText: 'Nepali Behancha Ghar',
    descText: 'Ghattekhola, Annapurna Region',
  },
];

const SearchScreen = (props) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <HeaderText text='Where are you going?' />
        <View style={styles.searchView}>
          <SearchBar
            containerStyle={styles.SearchBarContainerStyle}
            inputContainerStyle={styles.SearchBarInputContainerStyle}
            inputStyle={styles.SearchBarInputStyle}
            loadingProps={<ActivityIndicator />}
            backgroundColor={colors.signature_Blue}
            placeholder='Search Here...'
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>
      </View>

      <View style={styles.recommendSection}>
        <Text>
          <HeaderText text='We recommend you...' />
        </Text>
        <ScrollView style={styles.recommendCardView}>
          {RecommendListData.map((context, index) => {
            return (
              <RecommendCard
                key={index}
                imageSrc={context.imgSrc}
                headerText={context.headerText}
                descText={context.descText}
              />
            );
          })}
        </ScrollView>
      </View>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('SelectPaymentScreen')}
        style={styles.BottomButton}
        underlayColor={colors.signature_Yellow}
      >
        <View>
          <Button
            title='CONFIRM'
            color={colors.signature_Blue}
            backgroundColor={colors.signature_Yellow}
          />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    alignItems: 'center',
    width: '100%',
    marginBottom: '10%',
  },
  searchView: {
    width: '90%',
  },

  recommendSection: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  recommendCardView: {
    marginTop: 30,
    width: '90%',
  },
  BottomButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Yellow,
  },
  SearchBarContainerStyle: {
    backgroundColor: colors.signature_Blue,
  },
  SearchBarInputContainerStyle: {
    backgroundColor: colors.signature_Blue,
  },
  SearchBarInputStyle: {
    color: colors.signature_Yellow,
  },
});
