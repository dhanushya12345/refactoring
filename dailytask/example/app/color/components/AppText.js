import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import styles from './styles';

const AppText = (props) => {
    return (
        <Text style={styles.text}>{props.children}</Text>
        // <Text style={styles.text}>{props.str}</Text>
    )
}


export default AppText;