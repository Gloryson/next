import { About, BigScrollComponent, Contacts, MainFixedBackground, MainTitle, Projects } from '@/components';
import { AppProvider } from '@/store/AppProvider';




export default function App () {
  
  return (
    <AppProvider>
      <MainFixedBackground />
      <BigScrollComponent />
      <MainTitle />
      <About />
      <Projects />
      <Contacts />
    </AppProvider>
  )
}
