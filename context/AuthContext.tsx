import { createContext, useContext, useState } from 'react';

interface profileContextType {
    user: any; // Placeholder for user object, can be replaced with actual type
    setUser: (user: any) => void; // Function to set user object
    university: string;
    program: string;
    rent: number;
    income: number;
    costOfLiving: number;
    setUniversity: (university: string) => void;
    setProgram: (program: string) => void;
    setRent: (rent: number) => void;
    setIncome: (income: number) => void;
    setCostOfLiving: (costOfLiving: number) => void;
}

const ProfileContext = createContext<profileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [university, setUniversity] = useState('');
    const [program, setProgram] = useState('');
    const [rent, setRent] = useState(0);
    const [income, setIncome] = useState(0);
    const [costOfLiving, setCostOfLiving] = useState(0);
    const [user, setUser] = useState<any>(null); // Placeholder for user object

    return (
        <ProfileContext.Provider value={{
            university, setUniversity, program, setProgram, rent, setRent,
            income, setIncome, costOfLiving, setCostOfLiving, user, setUser,
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => useContext(ProfileContext);