import React, {useState} from 'react';
import {
    View,
    Image
} from 'react-native';
import AppContainer from "../../../components/organisms/AppContainer";
import Input from "../../../components/molecules/input";
import Button from "../../../components/molecules/button";
import Label from "../../../components/atoms/label";
import {Images, USERS} from "../../../constants";
import {SCREENS, Strings} from '../../../constants';
import CommonStyles from  '../../../common/commonStyles'
import GradientWrapper from "../../../components/organisms/GradientWrapper";
import Styles from "../styles.tsx";
import PressableContainer from "../../../components/organisms/PressableContainer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../types/navigation.tsx";
import {getItemByKey, setItemByKey} from "../../../utils";
import RNCryptoJS  from 'react-native-crypto-js'
import {showErrorToast, showSuccessToast, validateEmail} from "../../../utils/helper";
import { v4 as uuidv4 } from 'uuid';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup: React.FC<SignupProps> = ({ navigation }) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword , setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState<boolean>(false);


    const createUser = async () => {
        try {
            if (!name || !email || !password || !confirmPassword) {
                // error messages can be moved to constants file as well
                showErrorToast({message: 'Please fill all fields and then try agin'});
                return;
            }

            if (!validateEmail(email)) {
                showErrorToast({ message:'Invalid Email'});
                return;
            }

            if (password !== confirmPassword) {
                showErrorToast({message: 'please make sure both passwors and confirm passwird fields are same'}
                );
                return;
            }

            const users = await getItemByKey(USERS);

            // To Make sure User info is secure I'm encrypting user password
            const encryptPassword = RNCryptoJS.AES.encrypt(
                password,
                process.env.SECRET_KEY,
            ).toString();
            console.log({encryptPassword})
            if (!users) {
                const newUser = [
                    {
                        id: uuidv4(),
                        name,
                        email: email.toLowerCase(),
                        password: encryptPassword,
                    },
                ];

                await setItemByKey(USERS, newUser);
            } else {
                users.push({
                    id: uuidv4(),
                    name,
                    email: email.toLowerCase(),
                    password: encryptPassword,
                });

                await setItemByKey(USERS, users);
            }
            showSuccessToast({message:'User Created'});
            navigation.navigate(SCREENS.LOGIN);
        } catch (error) {
            console.log({error})
        }
    };

    return (
        <AppContainer>
            <GradientWrapper style={{flex : 1}}>
                <View style={Styles.container}>
                    <Image source={Images.appLogo} style={Styles.logo}/>
                    <Input style={Styles.textInput}  placeholder={Strings.name} value={name} onChangeText={(val) => setName(val)} />
                    <Input style={Styles.textInput}  placeholder={Strings.email} value={email} onChangeText={(val) => setEmail(val)} />
                    <Input onIconPress={() => setShowPassword(!showPassword)} style={Styles.textInput}  placeholder={Strings.password} value={password} secureTextEntry={!showPassword} onChangeText={(val) => setPassword(val)} icon={Images.showIcon} />
                    <Input onIconPress={() => setShowConfirmPassword(!showConfirmPassword)} style={Styles.textInput}  placeholder={Strings.confirmPassword} value={confirmPassword} secureTextEntry={!showConfirmPassword} onChangeText={(val) => setConfirmPassword(val)} icon={Images.showIcon} />
                    <Button style={[CommonStyles.buttonContainer, CommonStyles.centerContainer]} textStyle={Styles.actionTextStyle} title={Strings.signUp} onPress={() => createUser()} />
                  <PressableContainer onPress={() => navigation.navigate(SCREENS.LOGIN)} >
                      <View style={[CommonStyles.centerContainer,Styles.secondaryActionTextContainer]}>
                          <Label style={Styles.secondaryActionLabel}  title={Strings.alreadyRegistered} />
                          <Label style={Styles.secondaryActionBtnText} title={` ${Strings.loginIn}`} />
                      </View>
                  </PressableContainer>
                </View>
            </GradientWrapper>
        </AppContainer>
    );
};

export default Signup;