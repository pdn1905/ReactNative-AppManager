import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection, Button } from './index';

const Alert = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => {}}
            style={{ alignItems: 'center' }}
        >
            <View style={styles.containerStyle}>
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardSection>
                <CardSection style={styles.cardSectionStyle2}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection> 
            </View>  
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        height: 70
    },
    cardSectionStyle2: {
        justifyContent: 'center',
        height: 50,
        alignItems: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0 , 0, 0, 0.3)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        height: 250,
        paddingLeft: 30,
        paddingRight: 30
    }
};

export default Alert;
