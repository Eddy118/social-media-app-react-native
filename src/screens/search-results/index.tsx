import React, {useEffect, useState} from "react";
import AppContainer from "../../components/organisms/AppContainer";
import GradientWrapper from "../../components/organisms/GradientWrapper";
import Header from "../../components/molecules/header";
import {getSearchedPost} from "../../services/posts.service.tsx";
import {Post} from "../../shared/type/commonTypes.ts";
import ContentSeparator from "../../components/atoms/content-separator";
import CustomListingContainer from "../../components/organisms/CustomListingContainer";
import {View, StyleSheet} from "react-native";
import {colors} from "../../theme/colors";

const  SearchResults = ({route}) => {
    const { searchText } = route.params;
    const [searchResults, setSearchResults] = useState<Post[]>([]);

    const getPost = async () => {
        const results = await getSearchedPost(searchText);
        results &&  setSearchResults(results);
    }
    useEffect(() => {
        getPost()
    }, [searchText])
    return(
        <AppContainer>
            <View style={Styles.container}>
                <GradientWrapper>
                    <Header showBack={true}/>
                </GradientWrapper>
                <ContentSeparator theme={'dark'}/>
                <CustomListingContainer onRefresh={() => {}}  onReachEnd={() => {}} posts={searchResults} />
            </View>
        </AppContainer>
    )
};

const Styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : colors.primary
    }

})

export default SearchResults;