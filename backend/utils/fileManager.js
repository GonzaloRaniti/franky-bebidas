import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataDir = path.join(__dirname, '../data')

// Función genérica para leer archivos JSON
export const readJSONFile = async (filename) => {
  try {
    const filePath = path.join(dataDir, filename)
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Si el archivo no existe, crear uno vacío
      await writeJSONFile(filename, [])
      return []
    }
    throw error
  }
}

// Función genérica para escribir archivos JSON
export const writeJSONFile = async (filename, data) => {
  try {
    const filePath = path.join(dataDir, filename)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch (error) {
    throw error
  }
}

