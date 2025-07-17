import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// whenever you call a button, you must pass in a label (the text on the button),
// and a function (onPress)
// can also pass in an optional theme
type Props = {
  label: string;
  theme?: 'primary';
  onPress: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[styles.buttonContainer,
        { borderWidth: 1, borderColor: '#007bff', borderRadius: 1 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={onPress}>
          <FontAwesome name="dollar" size={24} color="#fff" />
          <Text style={[styles.buttonLabel, { color: '#2529e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View >
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
