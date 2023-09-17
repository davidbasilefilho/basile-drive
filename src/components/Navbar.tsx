import Link from "next/link";
import { LogOutButton } from "@/components/LogOutButton";
import { ProfileIcon } from "@/components/ProfileIcon";

export function Navbar(): JSX.Element {
    return (
        <div className="bg-blue-600 h-12 px-2 text-slate-50 mb-4">
            <div className="container mx-auto flex flex-row items-center h-full gap-3">
                <Link href="/" className="text-2xl w-64">
                    Basile Drive
                </Link>
                <div className="flex flex-row justify-end items-center h-full w-full">
                    <ProfileIcon />
                </div>
            </div>
        </div>
    );
}
