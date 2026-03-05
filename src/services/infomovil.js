const BASE = '/api'
const COMERCIO_ID = Number(process.env.NEXT_PUBLIC_GEOSOFT_COMERCIO_ID || 53257)
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION || 'Contacto desde su sitio web'
                             
async function request(path, payload) {
  const url = `${BASE}${path}`
  const headers = { 'Content-Type': 'application/json' }

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })
  } catch (e) {
    // Error de red / conexión
    throw new Error(
      'No se pudo conectar con el servicio. Intente nuevamente en unos minutos.'
    )
  }

  const contentType = (res.headers.get('content-type') || '').toLowerCase()

  // Si el proxy no existe, normalmente Next responde HTML (doctype)
  const isHtml = contentType.includes('text/html')

  if (!res.ok) {
    const text = await res.text().catch(() => '')

    const looksLikeHtml = isHtml || /^\s*<!doctype html/i.test(text)

    if (looksLikeHtml || res.status === 404) {
      throw new Error(
        'En este momento el formulario no puede enviar el mensaje (servicio no disponible). Por favor, intente más tarde.'
      )
    }

    throw new Error(text || `Error ${res.status}`)
  }

  // OK pero respuesta inesperada (no JSON)
  if (!contentType.includes('application/json')) {
    const text = await res.text().catch(() => '')
    const looksLikeHtml = isHtml || /^\s*<!doctype html/i.test(text)

    if (looksLikeHtml) {
      throw new Error(
        'En este momento el formulario no puede enviar el mensaje (servicio no disponible). Por favor, intente más tarde.'
      )
    }

    throw new Error('Respuesta inesperada del servidor. Intente más tarde.')
  }

  return res.json().catch(() => ({}))
}

export const  InfomovilAPI = {

  async enviarContacto(form) {
    const token = await grecaptcha.enterprise.execute(
      SITE_KEY,
      { action: 'contact_form' }
    )
    const payload = {
      correos_usuario: {
        remitente: form.email,
        asunto: SITE_DESCRIPTION,
        cuerpo: form.mensaje,
        nombre: form.nombre,
        comercio_id: COMERCIO_ID,
        numero_celular: form.celular || null
      },
      recaptcha_token: token
    }

    console.log('Enviando a Infomóvil:', payload)
    return request('/correos_usuarios', payload)
  }
}
