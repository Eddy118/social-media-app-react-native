import {View} from 'react-native';
import CustomListing from "../../molecules/custom-listing";
import {Post} from "../../../shared/type/commonTypes.ts";

type CustomListingContainerProps = {
    posts : Post[],
    onRefresh : () => void,
    refreshing?: boolean,
    onReachEnd: () => void
}

const CustomListingContainer = ({posts , onRefresh, refreshing, onReachEnd} :CustomListingContainerProps ) => {
    return (
        <View style={{flex : 1}}>
            <CustomListing onReachEnd={onReachEnd} refreshing={refreshing} onRefresh={() => onRefresh()} posts={posts} />
        </View>
    );
}
export  default  CustomListingContainer;