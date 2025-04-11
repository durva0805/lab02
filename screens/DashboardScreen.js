import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from "react-native";

const DashboardScreen = ({ navigation, setAuth }) => {
  
    const [transactions, setTransactions] = useState([
        {
          id: "1",
          date: "2025-03-07",
          amount: "$50",
          description: "Groceries",
          location: "Supermart",
          type: "Debit",
          category: "Shopping",
        },
        {
          id: "2",
          date: "2025-03-06",
          amount: "$200",
          description: "Salary",
          location: "Company",
          type: "Credit",
          category: "Income",
        },
      ]);
      


  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Button title="Logout" onPress={() => setAuth(false)} />
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() => navigation.navigate("TransactionDetail", { transaction: item })}
          >
            <Text>{item.date} - {item.description} - {item.amount}</Text>
          </TouchableOpacity>
        )}
      />

      <Button title="Add Expense" onPress={() => navigation.navigate("AddExpense", { addTransaction })} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  transactionItem: { padding: 15, borderBottomWidth: 1, marginBottom: 5 },
});

export default DashboardScreen;
