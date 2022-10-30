export default function Footer() {

    const thisYear = new Date().getFullYear()

    return (
        <footer className="mt-6 2xs:-mb-4 sm:-mb-6 lg:-mb-12 text-center">
            © Kevin Zheng {thisYear}
        </footer>
    )
}