export default function Container({children}) {
    return (
        <div className="lg:mx-16 xl:mx-32 md:mx-14 2xs:mx-4 sm:mx-10 lg:my-20 2xs:my-8 sm:my-12 ">
            {children}
        </div>
    )
}