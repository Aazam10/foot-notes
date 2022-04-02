import "./Home.css";
import { Navbar, Sidebar, NoteCard } from "../../components";
import { NoteForm } from "./component/NoteForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <div className="notes-main-container">
          <NoteForm />
          <div className="notes-card-container">
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export { Home };
