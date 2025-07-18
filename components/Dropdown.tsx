import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && styles.focusedLabel]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && styles.dropdownFocus]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                containerStyle={styles.dropdownContainer}
                itemTextStyle={styles.dropdownItemText}
                itemContainerStyle={styles.dropdownItemContainer}
                activeColor="#1E40AF" // deep blue for active item
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? '#2563EB' : '#94A3B8'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E293B',
        padding: 16,
        borderRadius: 12,
        width: 200,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    dropdown: {
        height: 50,
        borderColor: '#64748B',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#0F172A',
    },
    dropdownFocus: {
        borderColor: '#2563EB',
    },
    icon: {
        marginRight: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#1E293B',
        left: 16,
        top: -10,
        zIndex: 999,
        paddingHorizontal: 6,
        fontSize: 14,
        color: '#CBD5E1',
        fontWeight: '600',
    },
    focusedLabel: {
        color: '#2563EB',
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#94A3B8',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#E2E8F0',
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#2563EB',
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: '#E2E8F0',
        backgroundColor: '#0F172A',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    dropdownContainer: {
        backgroundColor: '#0F172A',
        borderColor: '#2563EB',
        borderWidth: 1,
        borderRadius: 8,
    },
    dropdownItemText: {
        color: '#E2E8F0',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    dropdownItemContainer: {
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
});
