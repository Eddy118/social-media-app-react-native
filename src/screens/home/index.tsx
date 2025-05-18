import React from 'react';
import {
  Text,
    View,
} from 'react-native';
import AppContainer from "../../components/organisms/AppContainer";
import Fonts from '../../theme/fonts'
const Home = () => {
    return (
        <AppContainer >
            <View style={{flex : 1}}>
           <Text style={{fontFamily : Fonts.Instagram.regular}}>Hello Regular</Text>
                <Text style={{fontFamily : Fonts.Instagram.light}}>Hello Light</Text>
                <Text style={{fontFamily : Fonts.Instagram.medium}}>Hello Medium</Text>
                <Text style={{fontFamily : Fonts.Instagram.bold}}>Hello Bold</Text>
            </View>
        </AppContainer>

    );
}

export default Home;
