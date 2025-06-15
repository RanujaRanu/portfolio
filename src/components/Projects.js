import websiteImg1 from '../assets/eventease.jpg';
import websiteImg2 from '../assets/conference day managent system.jpg';
import websiteImg3 from '../assets/design.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'An event management system, built with React.js and Firebase.',
                link: 'https://github.com/tlashla373/EventEase-.git'
            },
            {
                image: websiteImg2,
                description: 'conference day managent system. built with Html, Css, JavaScript, php, MySQL',
                link:'https://github.com/RanujaRanu/conference-day-system.git'
            },
            {
                image: websiteImg3,
                description: 'photo manipulation design, built with photoshop.',
                
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, idx) => (
                        <div className='relative' key={idx}>
                            <img className='h-[200px] w-[500px]' src={project.image} alt="Project" />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}