import { render ,fireEvent,screen} from '@testing-library/react'
import App from '../App';
import Toggle from '../components/Toggle';


describe(' Toggle tests',() => {

    test('Should change label color when input clicked', () => { 
            render(<App><Toggle /></App>);
             const input =  screen.getByRole('checkbox');
             const label = screen.getByTestId('label');

           expect(label).toHaveStyle({ backgroundColor: '' });
           
           fireEvent.click(input); 
           expect(label).toHaveStyle({ backgroundColor: 'red' });
                })


      test('should match snapshot', () => { 
         const component = render(<App><Toggle /></App>)
         expect(component).toMatchSnapshot();
      })

})