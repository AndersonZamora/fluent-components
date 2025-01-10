import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { BrowserRouter } from 'react-router-dom';
import { ContentRouter } from './routers';

function App() {
  return (
    <BrowserRouter>
      <FluentProvider theme={webLightTheme}>
        <ContentRouter/>
      </FluentProvider>
    </BrowserRouter>
  )
}

export default App
