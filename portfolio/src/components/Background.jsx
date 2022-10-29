export default function Background({children}) {
    return (
        <div className="fixed inset-0 bg-black bg-starry text-gray-400 overflow-y-auto ">
            {children}
        </div>
    )
}