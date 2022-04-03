import "./NoteCard.css";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";

const NoteCard = () => {
  return (
    <section className="note-card">
      <h2 className="note-title">Title</h2>
      <p className="note-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        ducimus, illum soluta debitis sequi nostrum quisquam, labore fuga magni
        explicabo quam laboriosam nemo quas accusamus nulla harum veniam cumque
        officia vel voluptatum pariatur doloribus mollitia beatae? Aliquid
        corporis sapiente voluptates officia obcaecati earum sit incidunt
        numquam error, quo, accusantium quidem.
      </p>
      <div className="note-card-footer">
        <p>date</p>
        <div className="note-icons-container">
          <MdColorLens className="icon" />
          <FaArchive className="icon" />
          <FaTrashAlt className="icon" />
        </div>
      </div>
    </section>
  );
};

export { NoteCard };
