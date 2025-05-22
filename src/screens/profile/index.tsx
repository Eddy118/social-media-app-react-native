import React from 'react';
import {
    View,
    Image,
    StatusBar,
    useColorScheme, ImageProps, StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Images, SCREENS} from '../../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StackActions} from '@react-navigation/native';
import {hp, RF} from "../../utils/helper";
import {useAppDispatch} from "../../store/hooks.tsx";

import GradientWrapper from "../../components/organisms/GradientWrapper";
import Header from "../../components/molecules/header";
import AppContainer from "../../components/organisms/AppContainer";
import Label from "../../components/atoms/label";
import Fonts from "../../theme/fonts";
import PressableContainer from "../../components/organisms/PressableContainer";
import {removeItemByKey} from "../../utils/localstorage";
import {USER_DETAILS} from "../../constants/asyncStorageKeys.tsx";
import {updateUser} from "../../store/user.slice.ts";

type ProfileScreenProps = NativeStackScreenProps<{}>;

const Profile: React.FC<ProfileScreenProps> = ({navigation}) => {

    const dispatch = useAppDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const logoutUser = async () => {
        dispatch(updateUser({}))
        await removeItemByKey(USER_DETAILS);
        navigation.dispatch(StackActions.replace(SCREENS.LOGIN));
    };
    const profileOptions = [
        {
            title : 'Account Privacy',
            onPress: () => {},
            icon : Images.lock,
        },
        {
            title : 'Password Management',
            onPress: () => {},
            icon : Images.password,
        },
        {
            title : 'FAQ',
            onPress: () => {},
            icon : Images.faq,
        },
        {
            title : 'Contact Us',
            onPress: () => {},
            icon : Images.contact,
        },  {
            title : 'About Us',
            onPress: () => {},
            icon : Images.about,
        },  {
            title : 'Activity',
            onPress: () => {},
            icon : Images.activity,
        },
        {
            title : 'Blocked',
            onPress: () => {},
            icon : Images.blocked,
        },
        {
            title : 'Logout',
            onPress: () => logoutUser(),
            icon : Images.logout,
        },
    ]

    const renderProfileOptions = ({image, title, onPress}:  {title : string, image: ImageProps, onPress : () => void})  => {
        return(
            <PressableContainer onPress={onPress}>
                <View style={Styles.profileOption}>
                    <View style={Styles.optionImageContainer}>
                        <Image source={image} style={Styles.optionImg}/>
                        <Label style={{fontFamily : Fonts.Instagram.medium}} title={title} />
                    </View>
                    <Image source={Images.more_than} style={Styles.optionArrowImg}/>
                </View>
            </PressableContainer>
        )
    }

    return (
        <AppContainer>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <GradientWrapper>
                <Header showBack={true} />
            </GradientWrapper>
        <View style={Styles.optionsContainer}>
            {profileOptions?.map((option, index) => renderProfileOptions({title : option.title, image : option.icon , onPress: option.onPress}))}
        </View>
        </AppContainer>
    );
};

const Styles = StyleSheet.create({
    optionsContainer : {
        flex : 1 , justifyContent : 'center'
    },
    profileOption : {
        width : '100%', marginVertical : hp(1.5), flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', paddingHorizontal : RF(10)
    },
    optionImageContainer : {
        flexDirection : 'row', alignItems : 'center'
    },
    optionImg : {
        width : 20 , height : 20, resizeMode : 'contain', marginRight : RF(10)
    },
    optionArrowImg : {
        width : 30 , height : 30, resizeMode : 'contain'
    }
})

export default Profile;