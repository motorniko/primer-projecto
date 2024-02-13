
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='cont-title'><h1>Testimonio de alumnos egresados</h1></div>

      <div className='contenedor-principal'>
          <Testimonio 

            nombre= 'Leonardo Bostian'
            pais= 'Suecia'
            cargo= 'Ingeniero de Software'
            empresa= 'Spotify'
            
            testimonio='Vivimos en una época que exige aprendizaje constante. Es mi deber alcanzar la excelencia en los estudios.
                        Gracias a Aplaplac University que con su prestigioso claustro y competentes profesionales contribuye al avance
                        de mis conocimientos. Al estudiar en Aplaplac University, desarrollo mi calidad de vida y me propongo contribuir
                        a la creación de una sociedad del aprendizaje que incentive la ciencia, la innovación y la tecnología.'

            imagen= 'persona1'

            />

          <Testimonio 

            nombre= 'Agustin Saavedra'
            pais= 'Brazil'
            cargo= 'Frontend developer'
            empresa= 'Brazilian SA'

            testimonio='Vivimos en una época que exige aprendizaje constante. Es mi deber alcanzar la excelencia en los estudios.
                        Gracias a Aplaplac University que con su prestigioso claustro y competentes profesionales contribuye al avance
                        de mis conocimientos. Al estudiar en Aplaplac University, desarrollo mi calidad de vida y me propongo contribuir
                        a la creación de una sociedad del aprendizaje que incentive la ciencia, la innovación y la tecnología.'

            imagen='persona2'
            />

          <Testimonio 

            nombre= 'Lili Cordova'
            pais= 'Chile'
            cargo= 'Gerente Gral'
            empresa= 'Chilean SPA'

            testimonio='Vivimos en una época que exige aprendizaje constante. Es mi deber alcanzar la excelencia en los estudios.
                        Gracias a Aplaplac University que con su prestigioso claustro y competentes profesionales contribuye al avance
                        de mis conocimientos. Al estudiar en Aplaplac University, desarrollo mi calidad de vida y me propongo contribuir
                        a la creación de una sociedad del aprendizaje que incentive la ciencia, la innovación y la tecnología.'
                        
            imagen='persona3'

            />

        </div>
    </div>
  );
}

export default App;
