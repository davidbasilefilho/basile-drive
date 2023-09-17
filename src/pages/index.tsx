import { Inter } from "next/font/google";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

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
                <Navbar />
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
