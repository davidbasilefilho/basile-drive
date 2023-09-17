import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export function Profile(): JSX.Element {
    const auth = useAuth();
    const router = useRouter();

    return (
        <>
            {auth?.currentUser ? (
                <div>
                    <Navbar />
                    <div className="container px-4">
                        <Card></Card>
                    </div>
                </div>
            ) : (
                router.push("/signup")
            )}
        </>
    );
}

export default function ProfileAuth(): JSX.Element {
    return (
        <AuthProvider>
            <Profile />
        </AuthProvider>
    );
}
