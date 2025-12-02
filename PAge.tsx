import { BookOpen, Award, GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University Name',
    year: '2020 - 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on [Your Thesis Topic].',
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'College Name',
    year: '2016 - 2020',
    description: 'Focus on Software Development and Web Technologies. GPA: 3.8/4.0',
    icon: <BookOpen className="w-6 h-6 text-blue-500" />
  },
  {
    degree: 'High School Diploma',
    institution: 'School Name',
    year: '2014 - 2016',
    description: 'Science Stream with Computer Science as major subject. Scored 95% in final exams.',
    icon: <Award className="w-6 h-6 text-blue-500" />
  },
]

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Education</h1>
        <p className="mt-2 text-gray-600">My academic journey and qualifications</p>
      </div>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                {edu.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline-block mx-2">•</span>
                  <span className="text-blue-600 font-medium">{edu.year}</span>
                </div>
                <p className="mt-3 text-gray-700">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Certifications</h2>
        <div className="space-y-4">
          {[
            'Certified Web Developer - FreeCodeCamp (2023)',
            'AWS Certified Solutions Architect - Amazon Web Services (2022)',
            'Machine Learning Specialization - Coursera (2021)',
            'Responsive Web Design - freeCodeCamp (2020)'
          ].map((cert, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="ml-3 text-gray-700">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
