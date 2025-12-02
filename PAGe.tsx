import { Code, Globe, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/project1.jpg',
    demo: '#',
    code: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    image: '/project2.jpg',
    demo: '#',
    code: '#',
    featured: true
  },
  {
    title: 'Personal Finance Tracker',
    description: 'An application to track expenses, income, and investments with detailed analytics and reports.',
    tags: ['React Native', 'Redux', 'Firebase'],
    image: '/project3.jpg',
    demo: '#',
    code: '#'
  },
  {
    title: 'Recipe Finder App',
    description: 'Discover and save recipes based on available ingredients with nutritional information.',
    tags: ['Vue.js', 'Express', 'Spoonacular API'],
    image: '/project4.jpg',
    demo: '#',
    code: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast and location-based weather updates.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
    image: '/project5.jpg',
    demo: '#',
    code: '#'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with rich text editing, categories, and user comments.',
    tags: ['Django', 'PostgreSQL', 'Docker'],
    image: '/project6.jpg',
    demo: '#',
    code: '#'
  }
]

export default function PortfolioPage() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="mt-2 text-gray-600">A collection of my projects and work</p>
      </div>

      {featuredProjects.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <Code className="w-12 h-12 text-gray-400" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <Globe className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
          {project.code && (
            <a 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              <Github className="w-4 h-4 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
