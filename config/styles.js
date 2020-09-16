import { Platform } from 'react-native';
import colors from './color';

export default {
    colors,
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
}