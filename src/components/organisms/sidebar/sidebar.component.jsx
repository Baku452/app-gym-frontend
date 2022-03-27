import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';

// Images
const avatar1 = '../assets/icons/instructor/gym.ico';
const navHome = '../assets/icons/instructor/nav-home.svg';
const navClass = '../assets/icons/instructor/nav-class.svg';
const navStudents = '../assets/icons/instructor/nav-students.svg';
const navBlogs = '../assets/icons/instructor/nav-blog.svg';
const navConfig = '../assets/icons/instructor/nav-config.svg';

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <Image
          className={styles.aside_logo_figure}
          src={avatar1}
          alt="Logo Gym"
          roundedCircle={true}
        />
      </div>
      <div className={styles.aside__content}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item className={styles.nav__item}>
            <Image src={navHome} alt="nav home" />
            <Link to="/dashboard/" className={styles.custom_sidebar__nav_link}>
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navClass} alt="nav class" />
            <Link to="/dashboard/courses" className={styles.custom_sidebar__nav_link}>
              Cursos
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navStudents} alt="nav students" />
            <Link to="/dashboard/students" className={styles.custom_sidebar__nav_link}>
              Estudiantes
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navBlogs} alt="nav blog" />
            <Link to="/dashboard/blogs" className={styles.custom_sidebar__nav_link}>
              Blogs
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navConfig} alt="nav config" />
            <Link to="/dashboard/configs" className={styles.custom_sidebar__nav_link}>
              Configuraciones
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </aside>
  );
};
export default React.memo(Sidebar);
