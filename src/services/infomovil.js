// TODO: Implementar ReCAPTCHA v3 en el formulario de contacto
const BASE = '/api'
const COMERCIO_ID = Number(process.env.NEXT_PUBLIC_GEOSOFT_COMERCIO_ID || 322008)
const APP_TOKEN = process.env.NEXT_PUBLIC_GEOSOFT_TOKEN || ''

async function request(path, payload) {
  const url = `${BASE}${path}`
  const headers = { 'Content-Type': 'application/json' }
  if (APP_TOKEN) headers['X-APP-TOKEN'] = APP_TOKEN

  console.log('POST:', url)

  const res = await fetch(url, {
    method: 'POST',
    headers,
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
      }
    }

    console.log('Enviando a Infomóvil:', payload)
    return request('/correos_usuarios', payload)
  }
}
