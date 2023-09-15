import { Inter } from "next/font/google";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Card } from "@/components/Card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomeAuth(): JSX.Element {
    return (
        <AuthProvider>
            <Home />
        </AuthProvider>
    );
}

function Home(): JSX.Element {
    const auth = useAuth();
    return (
        <>
            {auth?.currentUser ? (
                <p>Hello!</p>
            ) : (
                <div className="flex flex-col gap-3 h-screen items-center justify-center">
                    <p>It looks like you are not logged in!</p>
                    <p>
                        Try to{" "}
                        <Link href="/signup" className="link">
                            create an account
                        </Link>{" "}
                        or{" "}
                        <Link href="/login" className="link">
                            log in!
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
}
