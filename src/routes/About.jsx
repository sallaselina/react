const About = () => {
  return (
    <div className="content">
      <h1>About this project</h1>
      <p>
        This Zoo app project was made to demonstrate and practice my skills in
        React. Each animal is divided into four categories. There is a category
        page for each. There are likes and dislikes implemented and also an
        option to remove an animal from the list. You can open the single page
        of the animal by clicking the See more button and you should be able to
        see more information about that animal. That functionality was
        implemented using a Wikipedia API. The pictures are all from Unsplash.
        There is a search feature that allows the user to search for a specific
        animal in that category. This project was a challenge. It was good
        practice for refactoring code.
      </p>
      <h2>What I learned</h2>
      <p>
        I learned a lot about working with APIs, I did not have a lot of
        previous experience with APIs and to be honest, it has not been the
        easiest topic for me but I am getting there. Routing was a new topic for
        me as well, very useful and a simple concept. I have learned so much
        during this course that it is quite hard to pick a specific thing. React
        Hooks are getting easier to use everytime I use them.
      </p>
    </div>
  );
};

export default About;
