import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function FormKematian() {
  const [noPengajuan, setNoPengajuan] = useState("");
  const [noKK, setNoKK] = useState("");
  const [namaKK, setNamaKK] = useState("");
  const [file, setFile] = useState<any>(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    
    if (!result.canceled) {
      // file ada di result.assets[0]
      const file = result.assets[0];
      setFile(file);
    }
  };

  const handleSubmit = () => {
    // nanti disesuaikan untuk submit ke backend
    console.log({
      noPengajuan,
      noKK,
      namaKK,
      file
    });
    alert("Data berhasil disimpan!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pengajuan Kematian</Text>

      <Text style={styles.label}>No. Pengajuan</Text>
      <TextInput
        style={styles.input}
        value={noPengajuan}
        onChangeText={setNoPengajuan}
        placeholder="Masukkan No. Pengajuan"
      />

      <Text style={styles.label}>No. KK</Text>
      <TextInput
        style={styles.input}
        value={noKK}
        onChangeText={setNoKK}
        placeholder="Masukkan No. KK"
      />

      <Text style={styles.label}>Nama KK</Text>
      <TextInput
        style={styles.input}
        value={namaKK}
        onChangeText={setNamaKK}
        placeholder="Masukkan Nama KK"
      />

      <Text style={styles.label}>Upload File</Text>
      <TouchableOpacity style={styles.uploadBtn} onPress={pickDocument}>
        <Text style={styles.uploadText}>{file ? file.name : "Pilih File"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  uploadBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  uploadText: {
    color: "#333",
  },
  submitBtn: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
