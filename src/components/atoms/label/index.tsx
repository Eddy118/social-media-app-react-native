import {StyleProp, Text, TextStyle} from 'react-native';

interface  LabelProps {
    title: string | number;
    style?: StyleProp<TextStyle>;
}

const Label = ({title , style = {}} : LabelProps) => {
    return (
        <Text style={style}>
            {title}
        </Text>
    )
}
export default Label;