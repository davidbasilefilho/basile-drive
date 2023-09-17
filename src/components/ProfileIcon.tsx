import Image from "next/image";
import Link from "next/link";

export function ProfileIcon(): JSX.Element {
    return (
        <Link href="/profile">
            <Image
                src="/static/shrek.png"
                alt="Profile Icon"
                className="rounded-full aspect-square object-cover"
                width={32}
                height={32}
            />
        </Link>
    );
}
