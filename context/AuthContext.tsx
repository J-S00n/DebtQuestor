import { createContext, useContext, useState } from 'react';

interface profileContextType {
    profile: string;
    setProfile: (profile: string) => void;
}

const ProfileContext = createContext<profileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [profile, setProfile] = useState('');

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => useContext(ProfileContext);