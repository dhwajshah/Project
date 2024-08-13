import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mb-4 text-gray-700">
          Welcome to FilmVibe, where we are dedicated to bringing you the best in entertainment. Our team of passionate FilmVibe enthusiasts is committed to providing you with the latest news, reviews, and insights into the world of cinema.
        </p>
        <p className="mb-4 text-gray-700">
          Our mission is to create a space where FilmVibe lovers can connect, share their thoughts, and stay updated on their favorite films. Whether you're here to find the latest blockbuster hits or discover hidden gems, we've got you covered.
        </p>
        <p className="mb-4 text-gray-700">
          Founded in 2024, FilmVibe started with a simple goal to offer a user-friendly platform for FilmVibe enthusiasts to explore and enjoy content related to their favorite films. Since then, we have grown into a vibrant community of FilmVibe lovers from around the world.
        </p>
        <p className="text-gray-700">
          Thank you for visiting FilmVibe. We hope you enjoy your time here and find everything you're looking for. If you have any questions or feedback, feel free to <a href="mailto:contact@FilmVibe.com" className="text-blue-500 hover:underline">contact us</a>.
        </p>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Our Team</h2>
          <p className="mb-4 text-gray-700">
            Meet the dedicated team behind FilmVibe. Our team members are avid FilmVibe lovers and industry experts who work tirelessly to bring you the best content.
          </p>
          <ul className="mb-4 text-gray-700 list-disc list-inside">
            <li>Faizan Khimani : Founder</li>
            <li>Dhwaj Shah : Co-Founder</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Testimonials</h2>
          <p className="mb-4 text-gray-700">
            Hear what our users have to say about FilmVibe.
          </p>
          <div className="mb-4 text-gray-700">
            <blockquote className="p-4 italic border-l-4 border-blue-500">
              "FilmVibe is my go-to source for FilmVibe news and reviews. The team is knowledgeable and the content is always top-notch!" - Sarah W.
            </blockquote>
          </div>
          <div className="mb-4 text-gray-700">
            <blockquote className="p-4 italic border-l-4 border-blue-500">
              "I love the community aspect of FilmVibe. It's great to connect with other FilmVibe enthusiasts and share our thoughts." - David K.
            </blockquote>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Join Our Community</h2>
          <p className="mb-4 text-gray-700">
            Become a part of our growing community of FilmVibe lovers. Sign up for our newsletter to stay updated on the latest news, reviews, and more.
          </p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
