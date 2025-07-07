import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
  }

  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    asunto: Yup.string().required('El asunto es requerido'),
  })

  const handleSubmit = (values, { resetForm }) => {
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    resetForm()
  }

  return (
    <div className="card" style={{ 
      maxWidth: '500px', 
      margin: '0 auto',
      padding: '2rem',
    }}>
      <h2 style={{ 
        textAlign: 'center',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        📧 Contáctanos
      </h2>
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, isValid }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#2d3748',
              }}>
                Nombre *
              </label>
              <Field 
                name="nombre" 
                type="text" 
                placeholder="Tu nombre"
                style={{ marginBottom: '0.25rem' }}
              />
              <ErrorMessage name="nombre" component="div" style={{ 
                color: '#e53e3e', 
                fontSize: '0.875rem',
                marginTop: '0.25rem',
              }} />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#2d3748',
              }}>
                Apellido *
              </label>
              <Field 
                name="apellido" 
                type="text" 
                placeholder="Tu apellido"
                style={{ marginBottom: '0.25rem' }}
              />
              <ErrorMessage name="apellido" component="div" style={{ 
                color: '#e53e3e', 
                fontSize: '0.875rem',
                marginTop: '0.25rem',
              }} />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#2d3748',
              }}>
                Email *
              </label>
              <Field 
                name="email" 
                type="email" 
                placeholder="tu@email.com"
                style={{ marginBottom: '0.25rem' }}
              />
              <ErrorMessage name="email" component="div" style={{ 
                color: '#e53e3e', 
                fontSize: '0.875rem',
                marginTop: '0.25rem',
              }} />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#2d3748',
              }}>
                Asunto *
              </label>
              <Field 
                name="asunto" 
                as="textarea" 
                placeholder="¿En qué podemos ayudarte?"
                rows="4"
                style={{ 
                  marginBottom: '0.25rem',
                  resize: 'vertical',
                  minHeight: '100px',
                }}
              />
              <ErrorMessage name="asunto" component="div" style={{ 
                color: '#e53e3e', 
                fontSize: '0.875rem',
                marginTop: '0.25rem',
              }} />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || !isValid}
              className="btn"
              style={{ 
                marginTop: '1rem',
                fontSize: '1.1rem',
                padding: '15px',
                opacity: isSubmitting || !isValid ? 0.6 : 1,
              }}
            >
              {isSubmitting ? 'Enviando...' : '📤 Enviar mensaje'}
            </button>

            {sent && (
              <div style={{ 
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: '1rem',
                animation: 'fadeIn 0.5s ease-out',
              }}>
                ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm 