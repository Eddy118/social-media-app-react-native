import React, {useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import AppContainer from "../../../components/organisms/AppContainer";
import Input from "../../../components/molecules/input";
import Button from "../../../components/molecules/button";
import Label from "../../../components/atoms/label";
import {Images} from "../../../constants/images.tsx";
import {SCREENS, Strings} from '../../../constants';
import CommonStyles from  '../../../common/commonStyles'
import GradientWrapper from "../../../components/organisms/GradientWrapper";
import Styles from "../styles.tsx";
import PressableContainer from "../../../components/organisms/PressableContainer";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "../../../types/navigation.tsx";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<LoginProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <AppContainer>
            <GradientWrapper style={{flex : 1}}>
                <View style={[Styles.container]}>
                    <Image source={Images.logo} style={Styles.logo}/>
                    <Input style={Styles.textInput}  placeholder={Strings.email} value={email} onChangeText={(val) => setEmail(val)} />
                    <Input style={Styles.textInput}  placeholder={Strings.password} value={password} secureTextEntry={true} onChangeText={(val) => setPassword(val)} icon={Images.showIcon} />
                    <Button   style={[CommonStyles.buttonContainer, CommonStyles.centerContainer]} textStyle={Styles.actionTextStyle} title={Strings.loginIn} onPress={() => navigation.navigate(SCREENS.HOME)} />
                    <PressableContainer onPress={() => navigation.navigate(SCREENS.SIGNUP)} >
                        <View style={[CommonStyles.centerContainer,Styles.secondaryActionTextContainer]}>
                                  <Label style={Styles.secondaryActionLabel}  title={Strings.dontHaveAnAccount} />
                                  <Label style={Styles.secondaryActionBtnText} title={` ${Strings.register} `} />
                        </View>
                    </PressableContainer>
                </View>
            </GradientWrapper>
        </AppContainer>
    );
};

export default Login;