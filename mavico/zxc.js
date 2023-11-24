document.addEventListener('DOMContentLoaded', () => {
const courseList = document.getElementById('course-list');
  const personalizedCourses = document.getElementById('personalized-courses');
    const courses = [
      {
        name: 'Basics of Programming',
        description: 'This course provides an introduction to the world of programming, starting with the basic concepts and programming languages.',
        image: 'images/basics.jpg',
        price: '$9.99'
      },
      {
        name: 'Web Development',
        description: 'A training course on creating websites, including HTML, CSS, JavaScript, and the basics of web design.',
        image: 'images/career.jpg',
        price: '$9.99'
      },
      {
        name: 'Mobile Development',
        description: 'Learning how to create mobile apps for Android and iOS using various platforms and tools.',
        image: 'images/mob.jpg',
        price: '$9.99'
      },
      {
        name: 'Databases and SQL',
        description: 'Lessons on creating and managing databases, as well as using SQL for queries and data analysis.',
        image: 'images/sqll.jpg',
        price: '$9.99'
      },
      {
        name: 'Python Programming',
        description: 'A course in Python, including basics and advanced topics such as data analysis and machine learning.',
        image: 'images/python.jpg',
        price: '$9.99'
      },
      {
        name: 'Algorithms and Data Structures',
        description: 'In-depth study of algorithms, data structures, and code optimization.',
        image: 'images/infsec.jpg',
        price: '$9.99'
      },
      {
        name: 'Information Security',
        description: 'A course on aspects of cybersecurity, ethics, and information protection.',
        image: 'images/secc.jpg',
        price: '$9.99'
      },
      {
        name: 'Artificial Intelligence and Machine Learning',
        description: 'Teaching the theory and practice of AI and machine learning.',
        image: 'images/machine.jpg',
        price: '$9.99'
      },
      {
        name: 'Game Development',
        description: 'Lessons on creating computer games, including game design and programming of game engines.',
        image: 'images/gamr.jpg',
        price: '$9.99'
      },
      {
        name: 'DevOps and Project Management',
        description: 'Training in DevOps methodologies, development automation, and project management in IT.',
        image: 'images/devops.jpg',
        price: '$9.99'
      },
      {
        name: 'Internet of Things (IoT)',
        description: 'A course dedicated to the development of devices and systems for IoT and their programming.',
        image: 'images/iot.jpg',
        price: '$9.99'
      },
      {
        name: 'Career Development in IT',
        description: 'Lessons on developing communication skills, preparing for interviews, and building a career in the IT field.',
        image: 'images/webb.jpg',
        price: '$9.99'
      },
    ];
  
    const selectedCourses = new Set(); // Множество для отслеживания выбранных курсов

    courses.forEach((course) => {
      const courseElement = document.createElement('div');
      courseElement.classList.add('col-md-4');
      courseElement.classList.add('course-card');
      courseElement.innerHTML = `
        <div class="card mb-4">
          <div class="text-center">
            <img class="circular-image" src="${course.image}" alt="${course.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${course.name}</h5>
            <p class="card-text">${course.description}</p>
            <button class="btn btn-primary select-course" data-course-name="${course.name}">Select</button>
            <p class="card-text"><strong>Price:</strong> ${course.price}</p>
          </div>
        </div>
      `;
      courseList.appendChild(courseElement);
  
      const selectCourseButton = courseElement.querySelector('.select-course');
      selectCourseButton.addEventListener('click', () => {
        const selectedCourseName = selectCourseButton.getAttribute('data-course-name');
        if (selectedCourses.has(selectedCourseName)) {
          selectedCourses.delete(selectedCourseName);
        } else {
          selectedCourses.add(selectedCourseName);
        }
        updateCourses(); // Обновляем выбранные курсы и уведомления
      });
    });
  
    // Функция для показа уведомлений если курс выбран
    const updateCourses = () => {
      // Show a notification if courses are selected
      if (selectedCourses.size > 0) {
        showNotification(Array.from(selectedCourses));
      }
    };
  
    // Функция для показа уведомлений
    const showNotification = (selectedCourses) => {
      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.innerHTML = `You have selected the following courses: ${selectedCourses.join(', ')}. Please <a href="#contact">contact us</a> to proceed.`;
      document.body.appendChild(notification);
    };
  
    // Инициализация UI
    updateCourses();
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const personalizedCourses = document.getElementById('personalized-courses');
    const audioElement = document.getElementById('courseAudio');
    const audioSource = document.getElementById('audioSource');
  
    const playAudio = (audioFile) => {
      audioSource.src = audioFile;
      audioElement.load();
      audioElement.play();
    };
  
    const courses = [
      { id: 1, title: 'Introduction to Programming', selected: false, description: 'Includes fundamentals of programming and coding basics. Courses: Basics of Programming, Python', price: '$12', audioFile: 'audio/клик.mp3' },
      { id: 2, title: 'Web Development Basics', selected: false, description: 'Learn HTML, CSS, and JavaScript for web development. Courses: Web Development, Basics of Programming', price: '$19', audioFile: 'audio/клик.mp3' },
      { id: 3, title: 'Python Fundamentals', selected: false, description: 'A comprehensive introduction to Python programming. Courses: Python, Database and SQL, Career development on IT', price: '$29', audioFile: 'audio/клик.mp3' },
      // Add more courses here
    ];
  
    const updateCourses = () => {
      personalizedCourses.innerHTML = '';
      let selectedCourses = [];
  
      courses.forEach((course) => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('col-md-4');
        courseElement.innerHTML = `
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text">${course.description}</p>
              <p class="card-text">Price: ${course.price}</p>
              <button class="btn btn-primary" data-course-id="${course.id}">${course.selected ? 'Remove' : 'Select'}</button>
            </div>
          </div>
        `;
  
        const selectButton = courseElement.querySelector('button');
        selectButton.addEventListener('click', () => {
          course.selected = !course.selected;
          updateCourses();
  
          if (course.selected && course.audioFile) {
            playAudio(course.audioFile);
          }
        });
  
        personalizedCourses.appendChild(courseElement);
  
        if (course.selected) {
          selectedCourses.push(course.title);
        }
      });
  
      if (selectedCourses.length > 0) {
        showNotification(selectedCourses);
      }
    };
  
    const showNotification = (selectedCourses) => {
      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.innerHTML = `You have selected the following courses: ${selectedCourses.join(', ')}. Please <a href="#contact">contact us</a> to proceed.`;
      document.body.appendChild(notification);
    };
  
    updateCourses();
  });
  
/* Дискашн */
document.addEventListener('DOMContentLoaded', function () {
    const discussionForm = document.getElementById('discussion-form');
    const discussionList = document.getElementById('discussion-list');

    discussionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = discussionForm.querySelector('input').value;
        const message = discussionForm.querySelector('textarea').value;

        if (title && message) {
            createDiscussionTopic(title, message);
            discussionForm.reset();
        }
    });

    function createDiscussionTopic(title, message) {
        const topicDiv = document.createElement('div');
        topicDiv.classList.add('topic');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('topic-title');
        titleDiv.textContent = title;

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('topic-message');
        messageDiv.textContent = message;

        topicDiv.appendChild(titleDiv);
        topicDiv.appendChild(messageDiv);

        discussionList.appendChild(topicDiv);
    }
});


/* пятая страница */

document.addEventListener('DOMContentLoaded', function () {
  // Ваши данные о стажировках могут быть получены из внешнего источника (API, базы данных и т. д.)
  var internshipsData = [
    {
      company: 'Google',
      logo: 'images/Google.jpg', // Замените на реальный URL логотипа Google
      description: 'Embarking on a Google internship opens the door to engaging with cutting-edge projects, immersing yourself in the latest advancements in information technology.',
      date: 'June 2023 - August 2023',
      contact: '<a href="zxc.html#contact">Click</a>'
    },
    {
      company: 'Microsoft',
      logo: 'images/microsoft.png', // Замените на реальный URL логотипа Microsoft
      description: 'An internship at Microsoft provides a unique experience of working on products that change the world and participating in technological innovations.',
      date: 'July 2023 - September 2023',
      contact: '<a href="zxc.html#contact">Click</a>'
    },
    {
      company: 'AstanaHub',
      logo: 'images/AstanaHub.jpg', // Замените на реальный URL логотипа AstanaHub
      description: 'The internship at Astana Hub provides an opportunity to contribute to the development of the technological ecosystem and participate in startup projects.',
      date: 'August 2023 - October 2023',
      contact: '<a href="zxc.html#contact">Click</a>'
    }
    // Добавьте данные для других компаний
  ];

  // Получаем контейнер для стажировок
  var internshipsContainer = document.getElementById('internshipsContainer');

  // Добавляем блоки стажировок на страницу
  internshipsData.forEach(function (internship) {
    var internshipBlock = document.createElement('div');
    internshipBlock.classList.add('col-lg-4', 'col-md-6', 'mb-4');
    internshipBlock.innerHTML = '<div class="internship fade-in">' +
      '<img src="' + internship.logo + '" alt="' + internship.company + ' Logo">' +
      '<h2>' + internship.company + '</h2>' +
      '<p>' + internship.description + '</p>' +
      '<p>Date: ' + internship.date + '</p>' + '<p>Contact us:' + internship.contact + '</p>' +
      '</div>';
    internshipsContainer.appendChild(internshipBlock);
  });
});
