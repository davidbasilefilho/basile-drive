import { Card } from "@/components/Card";
import { useRef } from "react";

export default function SignUp() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const passConfRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen border-2">
            {false ? (
                <Card className="bg-red-300 border-red-400">
                    <p>Your e-mail or password is wrong.</p>
                </Card>
            ) : null}
            <Card>
                <h2 className="text-center">Sign Up</h2>
                <hr className="my-4" />

                <form method="post">
                    <label htmlFor="email-input">E-mail</label>
                    <br />
                    <input
                        type="email"
                        ref={emailRef}
                        required
                        id="email-input"
                    />
                    <br />
                    <label htmlFor="pass-input">Password</label>
                    <br />
                    <input
                        type="password"
                        ref={passRef}
                        required
                        id="pass-input"
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
                    />
                    <hr className="my-4" />
                    <button type="submit" className="btn-primary w-full">
                        Sign Up
                    </button>
                </form>
            </Card>
        </div>
    );
}
