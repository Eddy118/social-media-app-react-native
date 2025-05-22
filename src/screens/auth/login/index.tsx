import React, {useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import AppContainer from "../../../components/organisms/AppContainer";
import Input from "../../../components/molecules/input";
import Button from "../../../components/molecules/button";
import Label from "../../../components/atoms/label";
import {SCREENS, Strings, Images, USERS} from '../../../constants';
import CommonStyles from  '../../../common/commonStyles'
import GradientWrapper from "../../../components/organisms/GradientWrapper";
import Styles from "../styles.tsx";
import PressableContainer from "../../../components/organisms/PressableContainer";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "../../../types/navigation.tsx";
import {showErrorToast, validateEmail} from "../../../utils/helper";
import RNCryptoJS  from 'react-native-crypto-js'
import {getItemByKey, setItemByKey} from "../../../utils";
import {User} from "../../../shared/type/commonTypes.ts";
import {StackActions} from '@react-navigation/native';
import {useAppDispatch} from "../../../store/hooks.tsx";
import {updateUser} from "../../../store/user.slice.ts";
import {USER_DETAILS} from "../../../constants/asyncStorageKeys.tsx";
import {genericLoginError, invalidLoginCredentials} from "../../../constants/genericErrors.tsx";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<LoginProps> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = async () => {
        if (!email || !password) {
            showErrorToast( {message : invalidLoginCredentials});
            return;
        }
        if (validateEmail(email)) {
            const allUsers = await getItemByKey(USERS);
            if (!allUsers) {
                showErrorToast( {message : genericLoginError});
                return;
            }

            const user: User = allUsers.find((item: User) => item.email === email);

            if (!user) {
                showErrorToast( {message : genericLoginError});
                return;
            }

            const decryptedTxt = RNCryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = decryptedTxt.toString(RNCryptoJS.enc.Utf8);

            if (email === user.email && password === originalPassword) {
                dispatch(updateUser(user))
                await setItemByKey(USER_DETAILS , user)
                navigation.dispatch(StackActions.replace(SCREENS.HOME));
            } else {
                showErrorToast( {message : genericLoginError});
            }
        }
    };

    return (
        <AppContainer>
            <GradientWrapper style={{flex : 1}}>
                <View style={[Styles.container]}>
                    <Image source={Images.appLogo} style={Styles.logo}/>
                    <Input style={Styles.textInput}  placeholder={Strings.email} value={email} onChangeText={(val) => setEmail(val)} />
                    <Input onIconPress={() => setShowPassword(!showPassword)} style={Styles.textInput}  placeholder={Strings.password} value={password} secureTextEntry={!showPassword} onChangeText={(val) => setPassword(val)} icon={Images.showIcon} />
                    <Button style={[CommonStyles.buttonContainer, CommonStyles.centerContainer]} textStyle={Styles.actionTextStyle} title={Strings.loginIn} onPress={() => loginUser()} />
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