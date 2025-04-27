import React from 'react';
import aboutImg from '../../assets/about-img.svg';
import pic2 from '../../assets/pic-2.jpg';
import pic3 from '../../assets/pic-3.jpg';
import pic4 from '../../assets/pic-4.jpg';
import pic5 from '../../assets/pic-5.jpg';
import pic6 from '../../assets/pic-6.jpg';
import pic7 from '../../assets/pic-7.jpg';

const About = () => {
  const stats = [
    { icon: 'fas fa-graduation-cap', value: '+10k', label: 'online courses' },
    { icon: 'fas fa-user-graduate', value: '+40k', label: 'brilliant students' },
    { icon: 'fas fa-chalkboard-user', value: '+2k', label: 'expert tutors' },
    { icon: 'fas fa-briefcase', value: '100%', label: 'job placement' },
  ];

  const reviews = [
    { img: pic2, name: 'Student' },
    { img: pic3, name: 'Student' },
    { img: pic4, name: 'Student' },
    { img: pic5, name: 'Student' },
    { img: pic6, name: 'Student' },
    { img: pic7, name: 'Student' },
  ];

  return (
    <>
      <section className="about p-6 md:p-12 bg-gray-100">
        <div className="row flex flex-col md:flex-row items-center gap-8">
          <div className="image md:w-1/2">
            <img src={aboutImg} alt="About us" className="w-full rounded-lg shadow-lg" />
          </div>

          <div className="content md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why choose us?</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo?
              Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam
              eum eveniet sequi aspernatur quaerat tenetur.
            </p>
            <a
              href="/courses"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Our Courses
            </a>
          </div>
        </div>

        <div className="box-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div
              className="box bg-white p-6 rounded-lg shadow-lg text-center"
              key={index}
            >
              <i className={`${stat.icon} text-4xl text-blue-500 mb-4`}></i>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews p-6 md:p-12 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student's Reviews</h1>

        <div className="box-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              className="box bg-gray-100 p-6 rounded-lg shadow-lg"
              key={index}
            >
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit
                a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam
                vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?
              </p>
              <div className="student flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                  <div className="stars text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;