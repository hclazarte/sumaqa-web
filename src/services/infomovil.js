const BASE = process.env.NEXT_PUBLIC_INFOMOVIL_API_BASE
const COMERCIO_ID = Number(process.env.NEXT_PUBLIC_GEOSOFT_COMERCIO_ID || 0)
const RECAPTCHA_TOKEN = process.env.NEXT_PUBLIC_RECAPTCHA_TOKEN || 'test'

async function request(path, payload) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-APP-TOKEN': process.env.NEXT_PUBLIC_GEOSOFT_TOKEN
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Error ${res.status}`)
  }

  return res.json().catch(() => ({}))
}

export const InfomovilAPI = {
  enviarContacto(form) {
    const payload = {
      correos_usuario: {
        remitente: form.email,
        asunto: 'Contacto desde geosoft.website',
        cuerpo: form.mensaje,
        nombre: form.nombre,
        comercio_id: COMERCIO_ID,
        numero_celular: form.celular || null
      },
      recaptcha_token: RECAPTCHA_TOKEN
    }

    console.log('Enviando a Infomóvil:', payload)
    return request('/correos_usuarios', payload)
  }
}
