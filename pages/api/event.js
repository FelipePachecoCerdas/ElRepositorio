/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: 
 *     - event
 *     summary: Gets all events
 *     description: Gets all stored events information
 *     operationId: eventGETAll
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Successful Operation
 *         schema:
 *          type: array
 *          items:
 *             $ref: '#/definitions/Event'
 *       401:
 *         description: Invalid auth token
 *     security:
 *     - auth_token: []
 */
 export default async function handler(req, res) {
  const request = await fetch("https://api.nasa.gov/planetary/apod?api_key=e38iKVLxFahcNt2PcGEHZmc8bzLGbohlCRVVak2k")
  const data = await request.json()
  res.status(200).json(data)
}
