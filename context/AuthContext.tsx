import { createContext, useContext, useState } from 'react';

interface profileContextType {
    name: string;
    age: number;
    university: string;
    program: string;
    rent: number;
    income: number;
    costOfLiving: number;
    setName: (name: string) => void;
    setAge: (age: number) => void;
    setUniversity: (university: string) => void;
    setProgram: (program: string) => void;
    setRent: (rent: number) => void;
    setIncome: (income: number) => void;
    setCostOfLiving: (costOfLiving: number) => void;
}

const ProfileContext = createContext<profileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [university, setUniversity] = useState('');
    const [program, setProgram] = useState('');
    const [rent, setRent] = useState(0);
    const [income, setIncome] = useState(0);
    const [costOfLiving, setCostOfLiving] = useState(0);

    return (
        <ProfileContext.Provider value={{
            name, setName, age, setAge, university, setUniversity,
            program, setProgram, rent, setRent, income, setIncome, costOfLiving, setCostOfLiving
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => useContext(ProfileContext);