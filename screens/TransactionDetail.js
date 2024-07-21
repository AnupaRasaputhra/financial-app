import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetail = ({ route }) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.transactionInfoContainer}>
                <Text style={styles.amount}>{`$${transaction.amount.toFixed(2)}`}</Text>
                <Text style={styles.name}>{transaction.name}</Text>
                <Text style={styles.location}>{transaction.place}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>Transaction Date</Text>
                <Text style={styles.dateValue}>{transaction.date}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    transactionInfoContainer: {
        alignItems: "center",
        marginTop: 50,
        backgroundColor: "#8e44ad",
        padding: 20,
        borderRadius: 10,
    },
    amount: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    name: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
    location: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        marginTop: 5,
    },
    divider: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 20,
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateLabel: {
        textAlign: "left",
    },
    dateValue: {
        textAlign: "right",
    },
});

export default TransactionDetail;
