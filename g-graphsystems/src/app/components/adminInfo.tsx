const roleInfo = [
    {
        id: 1,
        title: "Technical Areas to Review Debugging & Troubleshooting (Very Important)",
        description:
            "You will likely be asked to walk through your troubleshooting process for complex issues.\
            Example: If an application is slow or unresponsive, a strong answer may include:\
            Gathering information from the customer (scope, impact, timeline)\
            Reviewing browser developer tools and server logs\
            Analyzing page load times, TTFB, and slow resources\
            Identifying backend vs frontend bottlenecks\
            Checking database queries and system resource usage\
            Explaining how you would isolate, validate, and resolve the issue\
            Focus on how you think, not just the tools you name.\
           "
    },
    {
        id: 2,
        title: "Web Application Technologies",
        description:
            "Be comfortable discussing:\
            JavaScript, HTML, and CSS fundamentals\
            How browsers render web pages\
            Client-side vs server-side issues\
            Debugging frontend problems using browser developer tools\""
    },
    {
        id: 3,
        title: "Java & JavaScript Fundamentals",
        description:
            "You may be asked about:\
            Object-Oriented programming concepts\
            Debugging Java or JavaScript code\
            The difference between loose and strict equality in JavaScript\
            Safely decoding and handling JSON\
            How to pause execution during debugging (breakpoints, debugger statements)\""
    },
    {
        id: 4,
        title: "Databases (MySQL / Oracle)",
        description:
            "Be prepared to discuss:\
            How you would analyze database-related issues\
            Identifying slow or inefficient queries\
            Understanding relational database concepts\
            How database performance can impact application behavior\""
    },
    {
        id: 5,
        title: "Systems & Infrastructure",
        description:
            "Systems & Infrastructure\
            You should have foundational knowledge of:\
            Linux/Unix or Microsoft Server environments\
            Diagnosing system-level performance issues\
            Remote administration and troubleshooting using tools such as:\
            SSH\
            SNMP\
            WMI\
            PowerShell\""
    },
    {
        id: 6,
        title: "Networking Basics",
        description:
            "You may be asked to walk through what happens during a typical network request:\
            Request creation\
            Network transmission\
            Server-side processing\
            Response generation\
            Browser rendering\
            This helps demonstrate your understanding of SaaS and web application behavior.\""
    },
    {
        id: 7,
        title: "Final Tips for the Interview",
        description:
            "Helpful Resource\
            We recommend reviewing ServiceNow documentation to get familiar with the platform and user experience concepts. A helpful starting point is below — feel free to explore further:\
            https://www.servicenow.com/docs/r/impact/io-triage-sn-instance.html\
            Final Tips for the Interview\
            During the interview, remember to:\
            DO NOT USE AI TOOLS\
            Keep your hands visible at all times\
            Explain your thinking step by step\
            Ask clarifying questions when needed\
            Consider multiple solutions and discuss tradeoffs\
            Highlight best practices\
            Show awareness of performance, scalability, and user impact\
            Demonstrate professionalism, especially in customer-facing scenarios\
            If you have any questions as you prepare, don't hesitate to reach out.\
            Wishing you the best of luck — you've got this! 🚀",
        href: "https://www.servicenow.com/docs/r/impact/io-triage-sn-instance.html"
    },

]
const useFullLinks = [
    {
        id: 1,
        href: (
            <a href="https://www.servicenow.com/docs/r/impact/io-triage-sn-instance.html">Service Now link</a>
        )
    },
    {
        id: 2,
        href: (
            <a href="https://www.youtube.com/watch?v=pw14NzfYPa8">Dev Tools Tricks | Debugging frontend problems using browser developer tools</a>
        )
    },
    {
        id: 3,
        href: (
            <a href="https://www.youtube.com/watch?v=NBAjlYb6jIs">How browsers render web pages</a>
        )
    },
    {
        id: 4,
        href: (
            <a href="https://www.youtube.com/watch?v=7GRKUaQ8Spk">Client-side vs server-side how it works</a>
        )
    },
    {
        id: 5,
        href: (
            <a href="https://www.youtube.com/watch?v=TiccevwEVe8">Java Object-Oriented Programming (with actual code)</a>
        )
    },
    {
        id: 6,
        href: (
            <a href="https://www.youtube.com/watch?v=pTB0EiLXUC8">Object-Oriented programing (JavaScript)</a>
        )
    },
    {
        id: 7,
        href: (
            <a href="https://www.youtube.com/watch?v=KMLOWkGAxVc">Safely decoding and handling JSON</a>
        )
    },
]

export function Admin() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-68">
                {roleInfo.map((role) => (
                    <div key={role.id} className="text-center">
                        <h1 className="text-2xl mt-5 font-bold">{role.title}</h1>
                        <p className="mt-5 text-mb">🔘 {role.description}</p>
                    </div>
                ))}
            </div>
            <div className="container mx-auto px-4 mt-15 lg:px-68">
                <h1 className="text-2xl font-bold">Other references to check: </h1>
                {useFullLinks.map((links) => (
                    <li className="ml-10 mt-5" key={links.id}>
                        <a className="hover:text-cyan-600 underline text-neutral-400" href="">{links.href}</a>
                    </li>
                ))}
                <h1 className="text-2xl mt-10 font-bold">JavaScript function to review</h1>
                <img src="/JavaSFunction.jpg" alt="javascriptFunction" className="rounded-lg mt-8 ml-8 size-80 shadow-lg col-span-2" />
            </div>
        </section>
    )
}