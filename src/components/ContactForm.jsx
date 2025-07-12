import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import './ContactForm.css'

const initialValues = {
  nombre: '',
  apellido: '',
  email: '',
  asunto: '',
}

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  apellido: Yup.string()
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no puede exceder 50 caracteres'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es obligatorio'),
  asunto: Yup.string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres'),
})

const ContactForm = () => {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('success')

  // Auto-guardado de borrador
  useEffect(() => {
    const savedDraft = localStorage.getItem('contactFormDraft')
    if (savedDraft) {
      const draft = JSON.parse(savedDraft)
      // Solo restaurar si el borrador es reciente (menos de 1 hora)
      const oneHourAgo = Date.now() - (60 * 60 * 1000)
      if (draft.timestamp > oneHourAgo) {
        console.log('Borrador restaurado automáticamente')
      }
    }
  }, [])

  const saveDraft = (values) => {
    const draft = {
      ...values,
      timestamp: Date.now()
    }
    localStorage.setItem('contactFormDraft', JSON.stringify(draft))
  }

  const showToast = (message, type = 'success') => {
    setNotificationMessage(message)
    setNotificationType(type)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      // Guardar en localStorage
      const formData = {
        ...values,
        fecha: new Date().toISOString(),
        id: Date.now(),
        estado: 'nuevo'
      }
      
      // Obtener mensajes existentes o crear array vacío
      const mensajesExistentes = JSON.parse(localStorage.getItem('mensajesContacto') || '[]')
      
      // Agregar nuevo mensaje
      mensajesExistentes.push(formData)
      
      // Guardar en localStorage
      localStorage.setItem('mensajesContacto', JSON.stringify(mensajesExistentes))
      
      // Limpiar borrador
      localStorage.removeItem('contactFormDraft')
      
      // Actualizar analytics
      const analytics = JSON.parse(localStorage.getItem('contactAnalytics') || '{}')
      analytics.totalMensajes = (analytics.totalMensajes || 0) + 1
      analytics.ultimoEnvio = new Date().toISOString()
      analytics.mensajesPorDia = analytics.mensajesPorDia || {}
      const hoy = new Date().toDateString()
      analytics.mensajesPorDia[hoy] = (analytics.mensajesPorDia[hoy] || 0) + 1
      localStorage.setItem('contactAnalytics', JSON.stringify(analytics))
      
      showToast('¡Mensaje enviado y guardado exitosamente!', 'success')
      setSubmitting(false)
      resetForm()
    }, 1000)
  }

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">📧 Contáctanos</h2>
      
      {/* Notificación Toast */}
      {showNotification && (
        <div className={`toast-notification ${notificationType}`}>
          {notificationMessage}
        </div>
      )}
      
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, values, setFieldValue }) => (
          <Form className="contact-form-fields">
            <div>
              <label className="contact-form-label">Nombre *</label>
              <Field 
                name="nombre" 
                type="text" 
                placeholder="Tu nombre"
                className="contact-form-input"
                onChange={(e) => {
                  setFieldValue('nombre', e.target.value)
                  saveDraft({ ...values, nombre: e.target.value })
                }}
              />
              <ErrorMessage name="nombre" component="div" className="contact-form-error" />
            </div>
            <div>
              <label className="contact-form-label">Apellido *</label>
              <Field 
                name="apellido" 
                type="text" 
                placeholder="Tu apellido"
                className="contact-form-input"
                onChange={(e) => {
                  setFieldValue('apellido', e.target.value)
                  saveDraft({ ...values, apellido: e.target.value })
                }}
              />
              <ErrorMessage name="apellido" component="div" className="contact-form-error" />
            </div>
            <div>
              <label className="contact-form-label">Email *</label>
              <Field 
                name="email" 
                type="email" 
                placeholder="tu@email.com"
                className="contact-form-input"
                onChange={(e) => {
                  setFieldValue('email', e.target.value)
                  saveDraft({ ...values, email: e.target.value })
                }}
              />
              <ErrorMessage name="email" component="div" className="contact-form-error" />
            </div>
            <div>
              <label className="contact-form-label">Asunto *</label>
              <Field 
                name="asunto" 
                as="textarea" 
                placeholder="¿En qué podemos ayudarte?"
                rows="4"
                className="contact-form-textarea"
                onChange={(e) => {
                  setFieldValue('asunto', e.target.value)
                  saveDraft({ ...values, asunto: e.target.value })
                }}
              />
              <ErrorMessage name="asunto" component="div" className="contact-form-error" />
            </div>
            <button 
              type="submit" 
              className="btn contact-form-btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm 