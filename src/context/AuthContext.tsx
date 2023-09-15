import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    Unsubscribe,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/app";

export type AuthContextType = {
    currentUser: User | null;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    logIn: (email: string, password: string) => Promise<UserCredential>;
};

export type AuthProviderProps = {
    children?: ReactNode;
};

export function useAuth() {
    return useContext(AuthContext);
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const signUp = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect((): Unsubscribe => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value: AuthContextType = {
        currentUser,
        signUp,
        logIn,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
