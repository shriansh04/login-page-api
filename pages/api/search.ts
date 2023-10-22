import { NextApiRequest, NextApiResponse } from 'next';
import names from '../names.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const searchFor: string = req.query.searchFor as string;
        if (!searchFor) {
            names.filter(() =>{
                return true;
            }
            )
        }
        const filteredNames = names.filter((name) =>
          name.name.toLowerCase().includes(searchFor.toLowerCase())
        );
        res.status(200).json(filteredNames);
    } catch (error) {
        console.error('API call error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
