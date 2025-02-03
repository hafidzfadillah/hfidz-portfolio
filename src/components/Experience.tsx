export const Experiences = () => (
    <div>
            <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Mobile Development Path',
                  company: 'Bangkit Academy',
                  period: 'Feb 2024 - Jul 2024',
                  highlights: [
                    'Graduated with Distinction (89.7 score)',
                    'Developed BinaBola Capstone Project',
                    'Ranked in top 10% of learning path'
                  ]
                },
                {
                  title: 'Mobile Developer',
                  company: 'PT. Pineapple Technology Indonesia',
                  period: 'Sep 2021 - Jan 2024',
                  highlights: [
                    'Maintained and improved existing mobile applications',
                    'Developed projects for internal needs and clients',
                    'Specialized in Payment Point Online Banking (PPOB) solutions'
                  ]
                }
              ].map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company} | {job.period}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
)