export default function Footer() {

    const thisYear = new Date().getFullYear()

    return (
        <footer className="mt-6 -mb-12 text-center">
            © Kevin Zheng {thisYear}
        </footer>
    )
}