type PostGridCardProps = {
    children: React.ReactNode
}

export function PostGridCard ({children}:PostGridCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4 sm:mt-14 mt-6">
            {children}
        </div>
    )
}