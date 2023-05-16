import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <h1>
            Header
        </h1>
         <ul>
        <li>
            <a href="/">Home</a>    
        </li>
        <li>
            <a href="/main">Main</a>    
        </li>
       </ul> 
      </div>
    )
};

export default Header;