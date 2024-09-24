import React from 'react'
import ReactDOM from 'react-dom'
import ApiProvider from './common/ApiProvider.tsx'
import { NasaApodPageContainer } from './pages/NasaApodPage/NasaApodPage.container.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const theme = createTheme()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NasaApodPageContainer />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')!,
)
