import React from 'react'

const Features = () => {
  return (
    <div>
      <section id="features" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <i className="fas fa-tasks fa-3x text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Task Management</h3>
          <p className="text-gray-600">
            Create, assign, and track tasks with ease. Stay organized and on top
            of your workload.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <i className="fas fa-users fa-3x text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
          <p className="text-gray-600">
            Work seamlessly with your team. Share files, chat in real-time, and
            collaborate effectively.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <i className="fas fa-chart-line fa-3x text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
          <p className="text-gray-600">
            Monitor your progress visually. Set goals, track milestones, and
            stay motivated.
          </p>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Features
