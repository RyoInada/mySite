export const About = () => {
  const birthday = {
    year: 1995,
    month: 4,
    date: 10,
  };

  const getAge = (birthday) => {
    var today = new Date();

    var thisYearsBirthday = new Date(
      today.getFullYear(),
      birthday.month - 1,
      birthday.date
    );

    var age = today.getFullYear() - birthday.year;

    if (today < thisYearsBirthday) {
      age--;
    }

    return age;
  };
  return (
    <div id="about">
      <div className="container">
        <div className="heading">
          <h2>About</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <p>
              <span className="about-item">Birth day/Age</span>1995.4.10/
              {getAge(birthday)}yo
            </p>
            <p>
              <span className="about-item">Live in</span>Fukuoka, Japan
            </p>
            <p>
              <span className="about-item">Hobby</span>
              Workout/Music/Site production
            </p>
            <p>
              <span className="about-item">FInal education</span>Shizuoka
              Univercity/Faculty of infomatics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
