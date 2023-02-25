import { render, fireEvent } from '@testing-library/vue'
import App from '@/App.vue'

import { workerOfflineResponse, workerOnlineResponse } from '../../__mocks__/workStatus'
import store from '@/store/store'
import mockAxios from 'axios'

describe('Tracker', () => {
  
  it('should call the correct endpoint when the user is online and click on Salir', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(workerOnlineResponse))
    
    const { findByRole } = render(App, { global: {
      plugins: [store]
    }})
    
    const buttonExit = await findByRole('button', { name: 'Salir' })
    fireEvent.click(buttonExit)
  
  
    expect(mockAxios.post).toHaveBeenCalledWith("/clock-out", { employeeId: "b99a6cd9-3a3d-4635-9eea-e089c90ac45a", workEntryOut: { coordinates: {latitude: 39.46975, longitude: -0.37739}}})
  })
  
  it('should call the correct endpoint when the user is offline and click on Entrar', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(workerOfflineResponse))
    
    const { findByRole } = render(App, { global: {
      plugins: [store]
    }})
    
    const buttonExit = await findByRole('button', { name: 'Entrar' })
    fireEvent.click(buttonExit)
  
    expect(mockAxios.post).toHaveBeenCalledWith("/clock-in", { employeeId: "b99a6cd9-3a3d-4635-9eea-e089c90ac45a", workEntryIn: { coordinates: {latitude: 39.46975, longitude: -0.37739}}})
  })
})
