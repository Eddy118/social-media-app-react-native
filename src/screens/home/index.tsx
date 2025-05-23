import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/molecules/header";
import ContentSeparator from "../../components/atoms/content-separator";
import CustomListingContainer from "../../components/organisms/CustomListingContainer";
import GradientWrapper from "../../components/organisms/GradientWrapper";
import {getPostsListing} from '../../services/posts.service';
import {fetchPosts} from '../../store/social-posts.slice'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useTheme} from "../../theme/app-theme/theme-hook.tsx";

const pageSize = 10;

const Home = () => {

    const { theme, toggleTheme } = useTheme();

    const [page, setPage ] = useState<number>(1);

    const dispatch = useAppDispatch();
    const [refreshing , setRefreshing] = useState(false);

    const posts = useAppSelector(state => state.socials.socialPosts);
    const getPosts = useCallback(async () => {
        const newPosts  = await  getPostsListing({page , pageSize});

       if(page === 1){
           dispatch(fetchPosts(newPosts))
       } else  {
           const mergedPosts = [...posts, ...newPosts];
           dispatch(fetchPosts(mergedPosts))
        }
        setRefreshing(false);
    }, [page , pageSize]);

    useEffect(() => {
        getPosts()
    }, [getPosts]);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        setPage(1)
    }, []);


    return (
        <AppContainer>
            <View style={[Styles.container, {backgroundColor: theme.background}]}>
            <GradientWrapper>
                <Header showBack={false} title={'Home'}/>
            </GradientWrapper>
                <ContentSeparator theme={'dark'}/>
                <CustomListingContainer onReachEnd={() => setPage(prevState => prevState + 1)} refreshing= {refreshing} onRefresh={() => handleRefresh()} posts={posts} />
            </View>
        </AppContainer>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex : 1,
    }
})
export default Home;
