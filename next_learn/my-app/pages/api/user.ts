import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const useInfo = {
        name: 'test',
    };

    if (req.method === 'POST') {
        res.status(200).send(useInfo);
    } else {
        res.status(405).end();
    }
}