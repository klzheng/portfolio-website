export default function Experience() {
    return (
        <>
            <div className="my-14">
                <h2 className="sm:text-3xl 2xs:text-xl  text-gray-200 text-center mb-14">
                    Experience
                </h2>
                
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <span className="text-xl text-gray-300">Boeing Company</span>
                        <p>Software Engineer (Contract)</p><br/>
                    </div>
                    <div className="col-span-3">
                        <p>Feb, 2023 - Current</p> 
                    </div>
                </div>
                <ul className="list-disc space-y-1">
                    <li>Responsible for the improvement and maintenance of the ORBIT application suite for the International Space Station (ISS) 
                        used by thousands of highly specialized NASA users
                    </li>
                    <li>Successfully led the development, modernization, and enhancement of the legacy PITA application from ColdFusion into the .NET framework</li>
                    <li>Incorporated new feature specifications/requirements and addressed various software defects to improve application 
                        functionality and allow for an enhanced user experience for NASA clients and customers
                    </li>
                </ul>
            </div>

            <hr />
        </>
    )
}