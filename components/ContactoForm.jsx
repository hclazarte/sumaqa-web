"use client";

import { useState } from "react";
import { InfomovilAPI } from "../src/services/infomovil";

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined, _contacto: undefined }));
    setSuccessMsg("");
    setErrorMsg("");
  };

  const validate = () => {
    const newErrors = {};
    const nombre = form.nombre.trim();
    const email = form.email.trim();
    const telefono = form.telefono.trim();
    const mensaje = form.mensaje.trim();
    const asunto = form.asunto.trim();

    if (!nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!mensaje) newErrors.mensaje = "El mensaje es obligatorio.";

    // En tu form original: debe ingresar celular o email
    if (!telefono && !email) {
      newErrors._contacto =
        "Debe ingresar su teléfono o su correo electrónico.";
    }

    // Teléfono: acepto 8 dígitos (Bolivia) o vacío
    if (telefono && !/^\d{8}$/.test(telefono)) {
      newErrors.telefono = "El teléfono debe tener exactamente 8 dígitos.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingrese un correo electrónico válido.";
    }

    // Asunto opcional (si usted quiere hacerlo obligatorio, descomente)
    // if (!asunto) newErrors.asunto = 'El asunto es obligatorio.'

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await InfomovilAPI.enviarContacto(form);

      setSuccessMsg("Mensaje enviado correctamente.");
      setErrorMsg("");
      setForm({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
    } catch (err) {
      setErrorMsg(err.message || "Error enviando el mensaje.");
      setSuccessMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
      {errors._contacto && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {errors._contacto}
        </div>
      )}

      <div>
        <label className="text-sm text-neutral-700">Tu nombre</label>
        <input
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={onChange}
          className="w-full rounded-md px-3 py-2 border border-neutral-300 text-sm bg-white outline-none focus:border-green-700"
        />
        {errors.nombre && (
          <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-neutral-700">
          Tu correo electrónico
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          className="w-full rounded-md px-3 py-2 border border-neutral-300 text-sm bg-white outline-none focus:border-green-700"
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-neutral-700">
          Tu teléfono (8 dígitos)
        </label>
        <input
          name="telefono"
          type="text"
          inputMode="numeric"
          placeholder="Ej: 76543210"
          value={form.telefono}
          onChange={onChange}
          className="w-full rounded-md px-3 py-2 border border-neutral-300 text-sm bg-white outline-none focus:border-green-700"
        />
        {errors.telefono && (
          <p className="text-xs text-red-600 mt-1">{errors.telefono}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-neutral-700">Asunto</label>
        <input
          name="asunto"
          type="text"
          value={form.asunto}
          onChange={onChange}
          className="w-full rounded-md px-3 py-2 border border-neutral-300 text-sm bg-white outline-none focus:border-green-700"
        />
        {errors.asunto && (
          <p className="text-xs text-red-600 mt-1">{errors.asunto}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-neutral-700">
          Tu mensaje (opcional)
        </label>
        <textarea
          name="mensaje"
          rows={8}
          value={form.mensaje}
          onChange={onChange}
          className="w-full rounded-md px-3 py-2 border border-neutral-300 text-sm bg-white outline-none focus:border-green-700 resize-none"
        />
        {errors.mensaje && (
          <p className="text-xs text-red-600 mt-1">{errors.mensaje}</p>
        )}
      </div>

      {/* Mensajes arriba del botón */}
      {successMsg && (
        <p className="text-green-700 text-sm font-semibold mb-2">
          {successMsg}
        </p>
      )}
      {errorMsg && (
        <p className="text-red-600 text-sm font-semibold mb-2">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="px-6 py-3 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 transition w-fit"
      >
        Enviar
      </button>
    </form>
  );
}
