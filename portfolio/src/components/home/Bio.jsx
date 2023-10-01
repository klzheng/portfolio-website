
export default function Bio(props) {

    const { name, role } = props

    return (
        <section className="flex flex-col space-y-6 2xs:text-base sm:text-lg 2xs:text-center xs:text-left">

            <p>Hi, my name is</p>
            <p className="text-5xl drop-shadow-white-text text-gray-300 ">{name}</p>
            <p>I'm a <span className="text-2xl text-gray-300">{role}</span>.</p><br/>
            <p>
                Currently developing code for the <a href="https://www.nasa.gov/international-space-station/" target="_blank" rel="noreferrer" className="text-2xl"> ISS</a> at 
                <a href="https://www.boeing.com/space/international-space-station/" target="_blank" rel="noreferrer"> <span className="text-3xl text-gray-300">Boeing!</span></a>
            </p>
            <p>
                And working on <a href="https://github.com/ProductifyOrg/productify" target="_blank" rel="noreferrer"><span className="text-2xl text-gray-300">Productify</span></a>, 
                a mobile app that aims to boost productivity for those with learning disabilities! 
            </p>
            <br/><br/>

            <hr />

        </section>
    )
}