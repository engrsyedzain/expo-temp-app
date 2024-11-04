import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the user object
export interface User {
  id?: string;
  name?: string;
  // Add more properties as needed
}

// Define the context type
interface ProfileContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Create the ProfileContext
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// Define props for UserProvider
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({});

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the ProfileContext
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a UserProvider");
  }
  return context;
};
