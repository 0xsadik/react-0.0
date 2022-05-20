// import logo from './logo.svg';
import './App.css';
import resturant from './img/resturant.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <Main adj="amazing" dishes={dishobj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}


// --> Header 

function Header(props) {
  return(
    <header>
      <h1>
        Horacio's kitchen
      </h1>
    </header>
  )
}


// --> Main 

function Main(props) {
  let rad = {listStyle: "none"}
  return( 
    <section>
      <p>We serve the most {props.adj} food around.</p>
      <img src={resturant} style={rad} alt="" height={250}/>
      <ul>
        {props.dishes.map((dish) => <li style={rad} key={dish.id}> {dish.title} </li> )}
      </ul>
    </section>
  )
}

const dishes = [
  'Macaroni and Cheese',
  'Salmon',
  'Tofu with vegetables',
  'Minestrone'
]

const dishobj = dishes.map((dish, i) => ({id: i, title: dish}))




// --> Footer 

function Footer(props) {
  
  return( 
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

export default App;
