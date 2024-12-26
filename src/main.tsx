import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Services } from './pages/Services.tsx'
import { About } from './pages/About.tsx'

import "@radix-ui/themes/styles.css";
import { Ourspace } from './pages/Ourspace.tsx'
import { Contact } from './pages/Contact.tsx'
import { PageLayout } from './components/PageLayout.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<About />} />
        <Route path="test" element={<PageLayout BoxStyle='' pageSubTitle='Test Page' />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="ourspace" element={<Ourspace />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
)
