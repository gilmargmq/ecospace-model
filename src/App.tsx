import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router'
import Layout from './components/Layout';
import Index from './pages/Index';
import CategoryPage from './pages/products/CategoryPage';
import SubCategoryPage from './pages/products/SubCategoryPage';
import BlogIndex from './pages/blog/BlogIndex';
import BlogEntry from './pages/blog/BlogEntry';
import ProducersIndex from './pages/producers/ProducersIndex';
import ProducerPage from './pages/producers/ProducerPage';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:categoryName" element={<CategoryPage />} />
            <Route path="/:categoryName/:subCategoryName" element={<SubCategoryPage />} />
            <Route path="/:categoryName/:subCategoryName/:subSubCategoryName" element={<SubCategoryPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:entryName" element={<BlogEntry />} />
            <Route path="/productores" element={<ProducersIndex />} />
            <Route path="/productores/:producerName" element={<ProducerPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
