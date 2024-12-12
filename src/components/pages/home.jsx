import Main from './homepageMain.jsx'
import Aside from './homepageAside.jsx'
import '../styles/homepage.scss';

const Home = () => {
  return (
    <>
      <button type="button" class="fixedButton"><a href='contact'>Contact</a></button>
      <Main />
      <Aside />
    </>
  );
};


export default Home;