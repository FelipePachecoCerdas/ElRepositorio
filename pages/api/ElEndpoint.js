import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

const applyCors = (handler) => (req, res) => {
  cors(req, res, (result) => {
    if (result instanceof Error) {
      res.status(500).json({ Soy: 'Error :c' });
    }
    return handler(req, res);
  });
}

export async function handler(req, res) {
  return res.status(200).json({ Soy: 'El Endpoint' });
}

export default applyCors(handler);