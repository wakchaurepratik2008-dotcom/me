import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="mt-2 text-gray-600">A brief introduction about myself and my journey</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">Your Full Name</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">your.email@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">City, Country</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Birthday</p>
              <p className="font-medium">January 1, 1990</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Hello! I'm [Your Name], a passionate [Your Profession] with [X] years of experience in 
            [Your Field]. I specialize in [Your Skills] and have a strong background in 
            [Your Expertise].
          </p>
          <p className="mt-4">
            My journey in [Your Field] started when [Your Story]. Since then, I've had the privilege 
            of working with amazing teams and on exciting projects that have helped me grow both 
            professionally and personally.
          </p>
          <p className="mt-4">
            When I'm not working, you can find me [Your Hobbies/Interests]. I believe in continuous 
            learning and always look for opportunities to expand my knowledge and skills.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {[
            { name: 'Web Development', level: 90 },
            { name: 'UI/UX Design', level: 80 },
            { name: 'Mobile Development', level: 75 },
            { name: 'Database Management', level: 85 },
            { name: 'DevOps', level: 70 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
