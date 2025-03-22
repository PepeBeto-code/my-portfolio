const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-primary text-white">
      <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">Contacto</h3>
        <form>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-4 mt-4 bg-gray-800 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full p-4 mt-4 bg-gray-800 text-white rounded-md"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-4 mt-4 bg-gray-800 text-white rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-secondary text-white font-bold rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
