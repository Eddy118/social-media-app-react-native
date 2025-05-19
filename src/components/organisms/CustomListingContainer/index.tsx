import {View} from 'react-native';
import CustomListing from "../../molecules/custom-listing";

const CustomListingContainer = () => {
    return (
        <View style={{flex : 1, backgroundColor : 'white'}}>
            <CustomListing />
        </View>
    );
}
export  default  CustomListingContainer;