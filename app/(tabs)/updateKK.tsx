import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function FormUpdateKK() {
  const [noPengajuan, setNoPengajuan] = useState("");
  const [noKKLama, setNoKKLama] = useState("");
  const [noKKBaru, setNoKKBaru] = useState("");
  const [namaKK, setNamaKK] = useState("");
  const [file, setFile] = useState<any>(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  };

  const handleSubmit = () => {
    console.log({
      noPengajuan,
      noKKLama,
      noKKBaru,
      namaKK,
      file,
    });
    alert("Data update KK berhasil disimpan!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Update KK</Text>

      <Text style={styles.label}>No. Pengajuan</Text>
      <TextInput
        style={styles.input}
        value={noPengajuan}
        onChangeText={setNoPengajuan}
        placeholder="Masukkan No. Pengajuan"
      />

      <Text style={styles.label}>No. KK Lama</Text>
      <TextInput
        style={styles.input}
        value={noKKLama}
        onChangeText={setNoKKLama}
        placeholder="Masukkan No. KK Lama"
      />

      <Text style={styles.label}>No. KK Baru</Text>
      <TextInput
        style={styles.input}
        value={noKKBaru}
        onChangeText={setNoKKBaru}
        placeholder="Masukkan No. KK Baru"
      />

      <Text style={styles.label}>Nama Kepala Keluarga</Text>
      <TextInput
        style={styles.input}
        value={namaKK}
        onChangeText={setNamaKK}
        placeholder="Masukkan Nama KK"
      />

      <Text style={styles.label}>Upload Dokumen Pendukung</Text>
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
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 14, marginBottom: 5, fontWeight: "500" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15 },
  uploadBtn: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, alignItems: "center", marginBottom: 20, backgroundColor: "#f5f5f5" },
  uploadText: { color: "#333" },
  submitBtn: { backgroundColor: "#28a745", padding: 15, borderRadius: 8, alignItems: "center" },
  submitText: { color: "#fff", fontWeight: "bold" },
});
