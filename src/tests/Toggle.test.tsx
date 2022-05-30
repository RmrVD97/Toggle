import { render ,fireEvent,screen} from '@testing-library/react'
import App from '../App';
import Toggle from '../components/Toggle';


describe(' Toggle tests',() => {

    test('Should change label color when input clicked', () => { 
            render(<App/>);
             const input =  screen.getByRole('checkbox');
             const label = screen.getByTestId('label');

           expect(label).toHaveStyle({ backgroundColor: '' });
           
           fireEvent.click(input); 
           expect(label).toHaveStyle({ backgroundColor: '#06D6A0' });
                })


      test('should match snapshot', () => { 
         const component = render(<App/>)
         expect(component).toMatchSnapshot();
      })

      test('Should have onColor prop color', () => {
         
        const onChange = () => {}

        render(<div className="App">
                  <Toggle
                  isOn={true}
                  handleToggle={ () => onChange()  }
                  onColor='blue'
               />
               </div>) 

          const label = screen.getByTestId('label');
           expect(label).toHaveStyle({ backgroundColor: 'blue' });

             })

             

})