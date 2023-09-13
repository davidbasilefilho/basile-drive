export type CardProps = {
    children?: React.ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps): JSX.Element {
    return (
        <div
            className={`${className} max-w-max rounded-lg p-4 border-slate-300 bg-slate-50 border-2`}
        >
            {children}
        </div>
    );
}
