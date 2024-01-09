import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
  AOS.init({
    easing: 'linear',
    duration: 1500,
  });
};

export default initAOS;