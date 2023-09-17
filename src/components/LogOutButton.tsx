import { useState } from "react";
import { FaRightFromBracket } from "react-icons/fa6";

export function LogOutButton(): JSX.Element {
    const [error, setError] = useState<string>("");

    const handleLogOut = (): void => {};

    return (
        <button className="transition-all duration-300 hover:scale-125">
            <FaRightFromBracket />
        </button>
    );
}
