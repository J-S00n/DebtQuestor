import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[styles.buttonContainer,
        { borderWidth: 1, borderColor: '#007bff', borderRadius: 1 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={() => alert('Navigating to your budget.')}>
          <FontAwesome name="dollar" size={24} color="#fff" />
          <Text style={[styles.buttonLabel, { color: '#2529e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: "#d4d4d4ff"
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#1f1e1eff',
    fontSize: 16,
  },
});
