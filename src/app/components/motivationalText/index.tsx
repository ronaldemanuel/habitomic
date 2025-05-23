import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { GoogleGenAI } from "@google/genai";

export default function MotivationalText() {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  useEffect(() => {
    async function getMessage() {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents:
          "Generate one short motivational phrase for a routines app in portuguese with only 1 line without identation",
      });
      console.log(response.text);

      setMessage(response.text);
    }

    getMessage();
  }, []);

  const [message, setMessage] = useState<string | undefined>();

  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#888",
    margin: 16,
  },
});
