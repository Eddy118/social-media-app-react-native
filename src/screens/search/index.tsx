import {View, StyleSheet} from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import GradientWrapper from "../../components/organisms/GradientWrapper";
import SearchHeader from "../../components/molecules/search-header";
import {useCallback, useEffect, useState} from "react";
import {getTrendingTags} from "../../services/posts.service.tsx";
import GenericListing from "../../components/molecules/generic-listing";
import Label from "../../components/atoms/label";
import {RF} from "../../utils/helper";
import {colors} from "../../theme/colors";
import PressableContainer from "../../components/organisms/PressableContainer";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [tags, setTags] = useState<string[]>([] );

    const trendingTags = useCallback(async() => {
       const tags : string[]  | undefined = await getTrendingTags();
        tags &&  setTags(tags)
    }, [])
    useEffect(() => {
        trendingTags()
    }, [])

    useEffect(() => {

    }, [searchText])


   const onInputTextChange = (text: string) => {
       setSearchText(text);
   }

    const renderTagsComponent = (item : string) => {
        return (
            <PressableContainer onPress={() => {}} >
                <View style={{ height : RF(20), backgroundColor: colors.gray, borderRadius : 5, justifyContent : 'center', alignItems : 'center', paddingHorizontal : 5, paddingVertical : 5 }}>
                    <Label style={{color : colors.white}} title={item}/>
                </View>

            </PressableContainer>
        )
    }

    return(
        <AppContainer>
           <View style={Styles.container}>
               <GradientWrapper>
                   <SearchHeader onChangeText={(val) => onInputTextChange(val)} showBack={true} title={'Search'}/>
               </GradientWrapper>
               <View style={{width : '100%', height : RF(30)}}>
                   <GenericListing ItemSeparatorComponent={() => <View style={{width : 5}} />} horizontal={true} renderComponent={(item) => renderTagsComponent(item)} data={tags} />
               </View>
           </View>
        </AppContainer>
    )
}
const Styles = StyleSheet.create({
    container : {flex : 1}
})
export  default  SearchScreen;