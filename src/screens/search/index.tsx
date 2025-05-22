import {View, StyleSheet} from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import GradientWrapper from "../../components/organisms/GradientWrapper";
import SearchHeader from "../../components/molecules/search-header";
import {useCallback, useEffect, useState} from "react";
import {getMatchingPosts, getTrendingTags} from "../../services/posts.service.tsx";
import GenericListing from "../../components/molecules/generic-listing";
import Label from "../../components/atoms/label";
import {RF, wp} from "../../utils/helper";
import {colors} from "../../theme/colors";
import PressableContainer from "../../components/organisms/PressableContainer";
import {useNavigation} from "@react-navigation/native";
import {SCREENS} from "../../constants";
import { useDebounce } from 'use-debounce';
import Fonts from "../../theme/fonts";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [tags, setTags] = useState<string[]>([] );

    const [suggestion, setSuggestions] = useState<string[]>([] );

    const [debouncedSearchedText] = useDebounce(searchText, 1000);

    const navigation = useNavigation();

    const trendingTags = useCallback(async() => {
       const tags : string[] | undefined  = await getTrendingTags();
        tags &&  setTags(tags)
    }, [])
    useEffect(() => {
        trendingTags()
    }, [])
    const getSuggestedPosts = async () => {
        if(searchText && searchText.length > 0){
            const suggestedPosts =  await getMatchingPosts(searchText);
            const uniqueResults = [... new Set(suggestedPosts)];
            setSuggestions(uniqueResults)
        }
    };

    useEffect(() => {
        getSuggestedPosts()
    }, [debouncedSearchedText])


   const onInputTextChange = (text: string) => {
       setSearchText(text);
   }

    const renderTagsComponent = (item : string) => {
        return (
            <PressableContainer onPress={() => {
                navigation.goBack()
                navigation.navigate(SCREENS.SEARCH_RESULTS, {searchText: item})
            }} >
                <View style={{ height : RF(20), backgroundColor: colors.gray, borderRadius : 5, justifyContent : 'center', alignItems : 'center', paddingHorizontal : 5, paddingVertical : 5 }}>
                    <Label style={{color : colors.white}} title={item}/>
                </View>
            </PressableContainer>
        )
    };

    const renderSuggestionsComponent = (item : string) => {
        return (
            <PressableContainer onPress={() => {
                navigation.goBack()
                navigation.navigate(SCREENS.SEARCH_RESULTS, {searchText: item})
            }} >
                <View style={{ height : RF(20), justifyContent : 'center'}}>
                    <Label style={{color : colors.primary, fontFamily : Fonts.Instagram.medium}} title={item}/>
                </View>
            </PressableContainer>
        )
    };


    return(
        <AppContainer>
           <View style={Styles.container}>
               <GradientWrapper>
                   <SearchHeader value={searchText} setValue={(val) => setSearchText(val)} onChangeText={(val) => onInputTextChange(val)} showBack={true} title={'Search'}/>
               </GradientWrapper>
               <View style={{width : '100%', height : RF(30)}}>
                   <GenericListing ItemSeparatorComponent={() => <View style={{width : 5}} />} horizontal={true} renderComponent={(item) => renderTagsComponent(item)} data={tags} />
               </View>

               {suggestion.length > 0 &&
                   <View style={{width : '100%', height : '100%'}}>
                       <View style={{padding : wp(2)}}>
                           <Label style={{fontFamily : Fonts.Instagram.bold}} title={'Suggestions: '} />
                       </View>

                       <GenericListing ItemSeparatorComponent={() => <View style={{height : 5}} />}  renderComponent={(item) => renderSuggestionsComponent(item)} data={suggestion} />
                   </View>}
           </View>
        </AppContainer>
    )
}
const Styles = StyleSheet.create({
    container : {flex : 1}
})
export  default  SearchScreen;