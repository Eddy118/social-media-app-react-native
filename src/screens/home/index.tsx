import React from 'react';
import { View } from 'react-native';
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/molecules/header";
import {colors} from "../../theme/colors";
import ContentSeparator from "../../components/atoms/content-separator";
import CustomListingContainer from "../../components/organisms/CustomListingContainer";
const Home = () => {
    return (
        <AppContainer>
            <View style={{flex : 1, backgroundColor : colors.primary}}>
              <Header showBack={false} title={'Home'}/>
                <ContentSeparator />
                <CustomListingContainer />
                 </View>
        </AppContainer>
    );
}
export default Home;
