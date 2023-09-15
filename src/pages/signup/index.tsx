import { Card } from "@/components/Card";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function SignUp() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const passConfRef = useRef<HTMLInputElement>(null);
    const auth = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    async function handleSignUp(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (passRef.current?.value !== passConfRef.current?.value) {
            setError("Passwords do not match!");
            return;
        }

        try {
            setError("");
            setLoading(true);

            await auth?.signUp(
                emailRef.current?.value as string,
                passRef.current?.value as string
            );

            router.push("/");
        } catch {
            setError("Failed to create an account");
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
                <h2 className="text-center">Sign Up</h2>
                <hr className="my-4" />

                <form onSubmit={handleSignUp} method="post">
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

                    <br />

                    <label htmlFor="pass-conf-input">
                        Password Confirmation
                    </label>

                    <br />

                    <input
                        type="password"
                        ref={passConfRef}
                        required
                        id="pass-conf-input"
                        className="w-full"
                        minLength={6}
                    />

                    <hr className="my-4" />

                    <button
                        disabled={loading}
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Sign Up
                    </button>

                    <hr className="my-4" />

                    <p className="w-full inline-block text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-700">
                            Log In
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
}

export default function SignUpAuth() {
    const auth = useAuth();
    const router = useRouter();

    return (
        <AuthProvider>
            {auth?.currentUser ? router.push("/") : <SignUp />}
        </AuthProvider>
    );
}
