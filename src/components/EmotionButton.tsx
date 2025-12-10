import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/colors';

interface EmotionButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const EmotionButton: React.FC<EmotionButtonProps> = ({
  label,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.buttonSelected]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.accent,
    marginHorizontal: 6,
    marginVertical: 6,
    backgroundColor: Colors.barWood,
  },
  buttonSelected: {
    backgroundColor: Colors.barRed,
    borderColor: Colors.gold,
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.gold,
  },
  textSelected: {
    color: Colors.darkGray,
  },
});
