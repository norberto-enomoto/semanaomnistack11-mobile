import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        paddingTop: Contants.statusBarHeight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
        maxWidth: '100%'
    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: 'bold',
        marginTop: 24,
        maxWidth: '100%'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        maxWidth: '100%'
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        maxWidth: '100%'
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
        maxWidth: '100%'
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
        maxWidth: '100%'
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '100%'
    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        maxWidth: '100%'
    }
});