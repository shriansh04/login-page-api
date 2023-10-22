import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const credentials = [
    {
        "id": 1,
        "username": "Girish",
        "password": "137"
    },
    {
        "id": 2,
        "username": "qwerty",
        "password": "qwerty"
    },
    {
        "id": 3,
        "username": "Shriansh",
        "password": "letmein"
    }
];

  res.status(200).json(credentials);
};
