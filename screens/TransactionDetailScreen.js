import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.description}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});

export default TransactionDetailScreen;
