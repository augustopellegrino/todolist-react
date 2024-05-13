import "./style.css";

const Form = () => {

    return (
        <div>
            <h2>Lista de tareas</h2>
            <form className="form">
                <input
                    type="text"
                    name="todo"
                    placeholder="Agregar una tarea"
                />
                <button>Agregar</button>
            </form>
        </div>
    );
}

export default Form;