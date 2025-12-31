interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
    return (
        <div className={`mb-5 ${className}`}>
            <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{title}</h2>
            </div>
            {description && (
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm lg:text-base max-w-2xl">
                    {description}
                </p>
            )}
        </div>
    );
}
