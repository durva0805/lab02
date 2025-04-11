import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddExpenseScreen = ({ navigation, route }) => {
  const { addTransaction } = route.params;

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("Credit");
  const [category, setCategory] = useState("Shopping");

  const handleAddExpense = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    const newTransaction = {
      id: Math.random().toString(),
      date,
      amount: `$${amount}`,
      description,
      location,
      type: transactionType,
      category,
    };

    addTransaction(newTransaction); 
    Alert.alert("Success", "Transaction added successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>

      <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Amount" keyboardType="numeric" value={amount} onChangeText={setAmount} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />

      <Text style={styles.label}>Transaction Type</Text>
      <Picker selectedValue={transactionType} onValueChange={(itemValue) => setTransactionType(itemValue)}>
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      <Text style={styles.label}>Category</Text>
      <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
        <Picker.Item label="Food" value="Food" />
      </Picker>

      <Button title="Add Transaction" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: { padding: 10, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
});

export default AddExpenseScreen;
