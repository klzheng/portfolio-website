export default function Skills(props) {

    const { skills } = props

    return (
        <>
            <div className="my-20">
                <h3 className="text-2xl text-gray-200 my-6">Soft Skills</h3>
                <ul className="list-disc list-inside">
                    {skills.map((item, index) => (
                        <li key={index} className="my-3 ml-5">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <hr />
        </>
    )
}