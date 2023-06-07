import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {setThemeName} = useTheme();
  const { themeName } = useTheme();

  const handleClickDay = (e) => {
    e.preventDefault();
      setThemeName('day')
  }

  const handleClickNight = (e) => {
    e.preventDefault();
      setThemeName('night')
  }

  return (
    <div className="light-switch day">
      <div className="on" onClick={handleClickDay}>DAY</div>
      <div className="off" onClick={handleClickNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;