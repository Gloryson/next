import { About, BigScrollComponent, MainFixedBackground, MainTitle } from '@/components';
import { AppProvider } from '@/store/AppProvider';




export default function App () {
  
  return (
    <AppProvider>
      <MainFixedBackground />
      <BigScrollComponent />
      <MainTitle />
      <About />
    </AppProvider>
  )
}
