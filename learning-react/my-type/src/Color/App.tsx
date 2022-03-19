import { Routes, Route } from "react-router-dom";
import AddColorForm from "./AddColorForm";
import { ColorProvider } from "./hooks";
import ColorList from "./ColorList";
import { ColorDetails } from "./ColorDetail";

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}
