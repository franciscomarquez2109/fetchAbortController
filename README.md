# Proyecto: Rick and Morty API Buscador de Personajes
## Descripción
Este código forma parte de un proyecto que utiliza la API de Rick and Morty para buscar personajes. La función principal aquí es realizar una solicitud a la API en función de un valor de texto proporcionado (TextValue). El código maneja la cancelación de solicitudes anteriores para evitar la ejecución simultánea de múltiples solicitudes.

## Detalles del Código
### Método cancelPreviousRequest()
Este método se encarga de cancelar solicitudes de búsqueda anteriores. Verifica si hay un controlador de aborto (AbortController) existente y, en caso afirmativo, aborta la solicitud actual y establece el controlador en null.

### Método getApiList(TextValue: string): Promise<any>
Este método realiza una solicitud a la API de Rick and Morty para buscar personajes cuyos nombres coincidan con el valor de texto proporcionado. 

## Uso
Este código puede ser parte de un servicio o componente que realiza búsquedas de personajes en la API de Rick and Morty. Al llamar al método getApiList, se inicia una nueva solicitud, y cualquier solicitud en curso se cancela para evitar resultados inconsistentes.