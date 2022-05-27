import { render ,fireEvent,screen} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client';
import Toggle from '../components/Toggle';


describe('Pruebas en Toggle',() => {

    test('Prueba toggle', async() => { 
           
           const snap = render(<Toggle />)
           expect(snap).toMatchSnapshot();

        //    const input =  screen.getByTestId('input');
        //    fireEvent.click(input);
        //    const label = screen.getByTestId('label')
        //    expect(label.style.background).toBe('red');
        //   expect(label).toHaveStyle('color: red');
           

           
        
           

            


     })

})