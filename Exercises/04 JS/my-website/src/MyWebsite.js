import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const MyWebsite = () => {
  const [shibaImage, setShibaImage] = useState('');

  useEffect(() => {
    // FETCH SHIBA
    fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
      .then(response => response.json())
      .then(data => {
        setShibaImage(data[0]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let idleTimer;
    const idleTimeout = 600000;

    function resetIdleTimer() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(startScreenSaver, idleTimeout);
    }

    function startScreenSaver() {
      animate();
    }

    document.addEventListener('mousemove', resetIdleTimer);

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      document.removeEventListener('mousemove', resetIdleTimer);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  const createArticles = [
    {
      title: 'Super-heatproof computer memory survives temperatures over 500°C',
      description: 'Memory technology that can withstand extreme temperatures.',
      src:
        'https://images.newscientist.com/wp-content/uploads/2023/09/27110926/SEI_173494949.jpg?width=900',
      date: 'Oct 1, 2023',
      link: '#',
      tags: ['Science', 'Physics', 'Computer']
    },
    {
      title: 'Exoskeleton suit boosts your legs to help you run faster',
      description: 'A new suit that enhances running performance.',
      src:
        'https://images.newscientist.com/wp-content/uploads/2023/09/27143935/SEI_173524369.jpg?width=900',
      date: 'Sep 28, 2023',
      link: '#',
      tags: ['Health', 'Fitness']
    },
    {
      title: 'AI is evolving for its own benefit, not ours',
      description: 'The development of AI technology for self-improvement.',
      src:
        'https://images.newscientist.com/wp-content/uploads/2023/09/19172434/SEI_171766752.jpg?width=900',
      date: 'Sep 25, 2023',
      link: '#',
      tags: ['AI', 'Coding', 'Data']
    }
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            My Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="details.html">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="hireMe.html">
                  Hire me!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="text-center py-5">
        <h1>Welcome to My Website</h1>
      </header>

      <main className="container">
        <div className="watermark-container text-end">
          <img src={shibaImage} alt="Shiba Inu" />
          <img src={shibaImage} alt="Shiba Inu" className="watermark" />
        </div>

        <div className="row">
          {createArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img src={article.src} className="card-img-top" alt="Article" />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{article.date}</small>
                  </p>
                  <a href={article.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-3">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MyWebsite;