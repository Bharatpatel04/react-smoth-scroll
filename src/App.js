import "./App.css";
import {Link} from'react-scroll';

function App() {
  const menuItems = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 1,
      title: "about",
    },
    {
      id: 1,
      title: "contact",
    },
    {
      id: 1,
      title: "login",
    },
  ];
  return (
    <div>
      <header>
        <nav>
          <h1>shop</h1>
          <ul>
            {menuItems.map((menu) => (
              <li>
               
                <Link to={menu.title} smooth={true} offset={-350} duration={500}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {
          menuItems.map(menu=>(
            <div className="content">
          <h1 className="content-header" id={menu.title}>{menu.title}</h1>
        </div>
          ))
        }
       

      </main>
    </div>
  );
}

export default App;
