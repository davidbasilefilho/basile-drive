import { Card } from "@/components/Card";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function LogIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const auth = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    async function handleLogIn(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);

            await auth?.logIn(
                emailRef.current?.value as string,
                passRef.current?.value as string
            );

            router.push("/");
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    }

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen">
            {error && (
                <Card className="alert-red">
                    <p>{error}</p>
                </Card>
            )}

            <Card className="w-80 max-w-xs">
                <h2 className="text-center">Log In</h2>
                <hr className="my-4" />

                <form onSubmit={handleLogIn} method="post">
                    <label htmlFor="email-input">E-mail</label>

                    <br />

                    <input
                        type="email"
                        ref={emailRef}
                        required
                        id="email-input"
                        className="w-full"
                    />

                    <br />

                    <label htmlFor="pass-input">Password</label>

                    <br />

                    <input
                        type="password"
                        ref={passRef}
                        required
                        id="pass-input"
                        className="w-full"
                    />

                    <hr className="my-4" />

                    <button
                        disabled={loading}
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Log In
                    </button>

                    <hr className="my-4" />

                    <p className="w-full inline-block text-center">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-blue-700">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
}

export default function LogInAuth() {
    const router = useRouter();
    const auth = useAuth();

    return (
        <AuthProvider>
            {auth?.currentUser ? router.push("/") : <LogIn />}
        </AuthProvider>
    );
}
