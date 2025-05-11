
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Index";
import Blog from "./pages/Blog";
import Notes from "./pages/Notes";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Write from "./pages/Write";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  }
});

// Table of Contents component for the blog post right sidebar
const TableOfContents = () => {
  return (
    <div>
      <h3 className="font-medium mb-2 text-white">Table of Contents</h3>
      <div className="text-sm">
        {/* TOC content is dynamically generated in the BlogPost component */}
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/blog" element={<Layout children={<Blog />} rightSidebar={<TableOfContents />} />} />
          <Route path="/notes" element={<Layout children={<Notes />} />} />
          <Route path="/projects" element={<Layout children={<Projects />} />} />
          <Route path="/about" element={<Layout children={<About />} />} />
          <Route path="/write" element={<Layout children={<Write />} />} />
          <Route path="*" element={<Layout children={<NotFound />} />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
